import React from 'react'

interface ToolbarProps {
  onExport: () => void
}

export const Toolbar: React.FC<ToolbarProps> = ({ onExport }) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">工具栏</h3>
      
      <div className="space-y-3">
        <button
          onClick={onExport}
          className="w-full btn-primary"
        >
          导出梗图
        </button>
        
        <div className="border-t pt-3">
          <h4 className="text-sm font-medium text-gray-700 mb-2">操作提示</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• 点击模板区域选择角色</li>
            <li>• 拖拽角色调整位置</li>
            <li>• 长按显示半透明效果</li>
            <li>• 双击重置角色位置</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 