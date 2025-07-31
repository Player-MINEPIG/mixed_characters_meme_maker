import React, { useState, useEffect } from 'react'
import { Character } from '@/types'

interface CharacterSelectorProps {
  onSelect: (character: Character) => void
  onClose: () => void
}

export const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  onSelect,
  onClose
}) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: 从API获取角色数据
    const mockCharacters: Character[] = [
      {
        id: '1',
        name: '角色A',
        imageUrl: '/characters/character-a.png',
        category: '主角',
        tags: ['主角', '剑士'],
        source: '游戏A',
        lastUpdated: '2024-01-01'
      },
      {
        id: '2',
        name: '角色B',
        imageUrl: '/characters/character-b.png',
        category: '配角',
        tags: ['配角', '法师'],
        source: '游戏A',
        lastUpdated: '2024-01-01'
      }
    ]
    
    setCharacters(mockCharacters)
    setIsLoading(false)
  }, [])

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         character.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || character.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(characters.map(c => c.category)))]

  if (isLoading) {
    return (
      <div className="card">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">选择角色</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {/* 搜索框 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索角色..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field"
        />
      </div>

      {/* 分类筛选 */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? '全部' : category}
            </button>
          ))}
        </div>
      </div>

      {/* 角色列表 */}
      <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
        {filteredCharacters.map(character => (
          <div
            key={character.id}
            onClick={() => onSelect(character)}
            className="cursor-pointer group"
          >
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-primary-500 transition-all">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-character.png'
                }}
              />
            </div>
            <p className="text-sm font-medium text-gray-900 mt-1 truncate">
              {character.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {character.category}
            </p>
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          没有找到匹配的角色
        </div>
      )}
    </div>
  )
} 