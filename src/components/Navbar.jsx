import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import tradelensLogo from '../assets/tradelens_logo.png'

function Navbar({ onCollapseChange }) {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Function to check screen size and update collapse state
  const checkScreenSize = () => {
    const newCollapsed = window.innerWidth < 1024
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  // Set up event listener for window resize
  useEffect(() => {
    checkScreenSize() // Check initial screen size
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`fixed left-0 top-0 h-screen bg-light-bg-nav dark:bg-dark-bg-nav shadow-card transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Logo and Toggle */}
        <div className="p-4 border-b border-light-border-primary dark:border-dark-border-primary flex items-center justify-between">
          {!isCollapsed && (
            <div className="relative flex items-center">
              {/* Logo */}
              <img 
                src={tradelensLogo} 
                alt="TradeLens Logo" 
                className="w-8 h-8 mr-2"
              />
              <h1 className="text-2xl font-bold">
                <span className="text-white">Trade</span>
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Lens</span>
              </h1>
            </div>
          )}
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isCollapsed ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 p-4 space-y-2">
          <Link
            to="/"
            className={`${
              isActive('/')
                ? 'text-brand-primary dark:text-brand-primary bg-brand-active-bg dark:bg-brand-active-bg border-l-[3px] border-brand-primary dark:border-brand-primary rounded-none'
                : 'text-white dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary border-l-[3px] border-transparent rounded-lg'
            } flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 transition-colors duration-200`}
            title="Dashboard"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
          <Link
            to="/trades"
            className={`${
              isActive('/trades')
                ? 'text-brand-primary dark:text-brand-primary bg-brand-active-bg dark:bg-brand-active-bg border-l-[3px] border-brand-primary dark:border-brand-primary rounded-none'
                : 'text-white dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary border-l-[3px] border-transparent rounded-lg'
            } flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 transition-colors duration-200`}
            title="Trades"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {!isCollapsed && <span className="ml-3">Trades</span>}
          </Link>
          <Link
            to="/stats"
            className={`${
              isActive('/stats')
                ? 'text-brand-primary dark:text-brand-primary bg-brand-active-bg dark:bg-brand-active-bg border-l-[3px] border-brand-primary dark:border-brand-primary rounded-none'
                : 'text-white dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary border-l-[3px] border-transparent rounded-lg'
            } flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 transition-colors duration-200`}
            title="Stats"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {!isCollapsed && <span className="ml-3">Stats</span>}
          </Link>
          <Link
            to="/settings"
            className={`${
              isActive('/settings')
                ? 'text-brand-primary dark:text-brand-primary bg-brand-active-bg dark:bg-brand-active-bg border-l-[3px] border-brand-primary dark:border-brand-primary rounded-none'
                : 'text-white dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary border-l-[3px] border-transparent rounded-lg'
            } flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 transition-colors duration-200`}
            title="Settings"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </Link>
        </div>

        {/* Sign Out Button */}
        <div className="p-4 border-t border-light-border-primary dark:border-dark-border-primary">
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center">
                <span className="text-white text-lg font-medium">JD</span>
              </div>
            </div>
            {/* Sign Out Button */}
            <button 
              className={`flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-secondary bg-brand-primary dark:bg-brand-secondary dark:text-brand-primary hover:bg-brand-primary-dark dark:hover:bg-brand-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-200 ${isCollapsed ? 'px-2' : ''}`}
              title="Sign Out"
            >
              {!isCollapsed && <span>Sign Out</span>}
              {isCollapsed && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 