import { MemeEditor } from './components/MemeEditor/MemeEditor'
import { Header } from './components/Layout/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <MemeEditor />
      </main>
    </div>
  )
}

export default App 