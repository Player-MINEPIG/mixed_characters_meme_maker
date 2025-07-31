import React, { useState } from 'react'
import { Canvas } from './Canvas'
import { CharacterSelector } from '../CharacterSelector/CharacterSelector'
import { Toolbar } from '../Toolbar/Toolbar'
import { Template, Character, CharacterPlacement } from '@/types'

export const MemeEditor: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [showCharacterSelector, setShowCharacterSelector] = useState(false)
  const [characters, setCharacters] = useState<CharacterPlacement[]>([])

  // 示例模板数据
  const template: Template = {
    id: 'default',
    name: '默认模板',
    imageUrl: '/templates/default.png',
    width: 800,
    height: 600,
    areas: [
      {
        id: 'area1',
        name: '头部',
        x: 100,
        y: 50,
        width: 200,
        height: 200,
        description: '角色头部区域'
      },
      {
        id: 'area2',
        name: '身体',
        x: 100,
        y: 250,
        width: 200,
        height: 300,
        description: '角色身体区域'
      }
    ]
  }

  const handleAreaClick = (areaId: string) => {
    setSelectedArea(areaId)
    setShowCharacterSelector(true)
  }

  const handleCharacterSelect = (character: Character) => {
    if (selectedArea) {
      const newPlacement: CharacterPlacement = {
        areaId: selectedArea,
        character,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0
      }
      
      setCharacters(prev => {
        const filtered = prev.filter(c => c.areaId !== selectedArea)
        return [...filtered, newPlacement]
      })
      
      setShowCharacterSelector(false)
      setSelectedArea(null)
    }
  }

  const handleExport = () => {
    // TODO: 实现导出功能
    console.log('导出梗图')
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <Canvas
          template={template}
          characters={characters}
          onAreaClick={handleAreaClick}
          selectedArea={selectedArea}
        />
      </div>
      
      <div className="lg:w-80 space-y-4">
        <Toolbar onExport={handleExport} />
        
        {showCharacterSelector && (
          <CharacterSelector
            onSelect={handleCharacterSelect}
            onClose={() => setShowCharacterSelector(false)}
          />
        )}
      </div>
    </div>
  )
} 