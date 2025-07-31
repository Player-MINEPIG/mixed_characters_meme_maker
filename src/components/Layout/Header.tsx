import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">
              混合角色梗图制作器
            </h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              Beta
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Player-MINEPIG/mixed_characters_meme_maker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <button className="btn-primary">
              使用说明
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 