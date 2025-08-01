import { MemeEditor } from './components/MemeEditor/MemeEditor'
import { Header } from './components/Layout/Header'
import { GameSelector } from './components/GameSelector/GameSelector'
import { Toolbar } from './components/Toolbar/Toolbar'

function App() {
  const handleExport = () => {
    // TODO: 实现导出功能
    console.log('导出梗图')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* 左侧区域：GameSelector 和 MemeEditor */}
        <div className="flex-1 min-w-0 space-y-6">
          <GameSelector />
          <MemeEditor />
        </div>
        
        {/* 右侧区域：Toolbar */}
        <div className="lg:w-60 lg:flex-shrink-0">
          <Toolbar onExport={handleExport} />
        </div>
      </main>
    </div>
  )
}

export default App 