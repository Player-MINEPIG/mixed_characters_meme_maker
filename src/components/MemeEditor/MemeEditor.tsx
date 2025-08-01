import React, { useState } from 'react'
import { Canvas } from './Canvas'
import { CharacterSelector } from '../CharacterSelector/CharacterSelector'
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

  return (
    <div className="relative">
      <Canvas
        template={template}
        characters={characters}
        onAreaClick={handleAreaClick}
        selectedArea={selectedArea}
      />
      
      {showCharacterSelector && (
        <div className="absolute top-4 right-4 z-10">
          <CharacterSelector
            onSelect={handleCharacterSelect}
            onClose={() => setShowCharacterSelector(false)}
          />
        </div>
      )}
    </div>
  )
} 