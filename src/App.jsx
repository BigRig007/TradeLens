import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Trades from './components/Trades'
import Stats from './components/Stats'
import Settings from './pages/Settings'

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary relative">
        <Navbar onCollapseChange={setIsNavCollapsed} />
        <div 
          className={`absolute top-0 transition-all duration-300 ${
            isNavCollapsed ? 'left-20' : 'left-64'
          } right-0 bottom-0 overflow-x-auto`}
        >
          <div className="w-full h-full px-4 lg:px-8">
            <main className="w-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/trades" element={<Trades />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App 