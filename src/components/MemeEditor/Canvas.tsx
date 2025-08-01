import React from 'react'
import { Stage, Layer, Image, Rect } from 'react-konva'
import { Template, CharacterPlacement } from '@/types'

interface CanvasProps {
  template: Template
  characters: CharacterPlacement[]
  onAreaClick: (areaId: string) => void
  selectedArea: string | null
}

export const Canvas: React.FC<CanvasProps> = ({
  template,
  characters,
  onAreaClick,
  selectedArea
}) => {
  const [templateImage, setTemplateImage] = React.useState<HTMLImageElement | null>(null)

  React.useEffect(() => {
    const img = new window.Image()
    img.src = template.imageUrl
    img.onload = () => setTemplateImage(img)
  }, [template.imageUrl])

  return (
    <div className="card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
      </div>
      
      <Stage width={template.width} height={template.height}>
        <Layer>
          {/* 模板背景 */}
          {templateImage && (
            <Image
              image={templateImage}
              width={template.width}
              height={template.height}
            />
          )}
          
          {/* 可点击区域 */}
          {template.areas.map((area) => (
            <Rect
              key={area.id}
              x={area.x}
              y={area.y}
              width={area.width}
              height={area.height}
              fill={selectedArea === area.id ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 0, 0, 0.1)'}
              stroke={selectedArea === area.id ? '#3b82f6' : '#6b7280'}
              strokeWidth={2}
              onClick={() => onAreaClick(area.id)}
              onMouseEnter={(e) => {
                e.target.getStage()!.container().style.cursor = 'pointer'
              }}
              onMouseLeave={(e) => {
                e.target.getStage()!.container().style.cursor = 'default'
              }}
            />
          ))}
          
          {/* 角色图片 */}
          {characters.map((placement) => {
            const area = template.areas.find(a => a.id === placement.areaId)
            if (!area) return null
            
            return (
              <Image
                key={`${placement.areaId}-${placement.character.id}`}
                image={new window.Image()}
                x={area.x + placement.x}
                y={area.y + placement.y}
                width={area.width * placement.scale}
                height={area.height * placement.scale}
                opacity={placement.opacity}
                rotation={placement.rotation}
                draggable
                onDragEnd={(e) => {
                  // TODO: 更新角色位置
                  console.log('角色位置更新', e.target.x(), e.target.y())
                }}
              />
            )
          })}
        </Layer>
      </Stage>
    </div>
  )
} 