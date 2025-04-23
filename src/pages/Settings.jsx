import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

function Settings() {
  const [activeSection, setActiveSection] = useState('account')
  const { theme, toggleTheme } = useTheme()

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Account Settings</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-white dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border-primary rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-white dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border-primary rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
        )
      case 'security':
        return (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Security Settings</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-white dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border-primary rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-white dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border-primary rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                placeholder="Enter new password"
              />
            </div>
          </div>
        )
      case 'tags':
        return (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tag Management</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Add New Tag</label>
              <div className="flex gap-1">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 bg-white dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border-primary rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Enter tag name"
                />
                <button className="px-4 py-2 bg-primary-500 text-white rounded-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  Add
                </button>
              </div>
            </div>
          </div>
        )
      case 'appearance':
        return (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Appearance</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Theme</label>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 dark:text-gray-300">Light</span>
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-light-bg-toggle dark:bg-dark-bg-toggle transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  <span
                    className={`${
                      theme === 'light' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-200 transition-transform`}
                  />
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300">Dark</span>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-2 h-full">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Settings</h1>
      
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm p-3 h-[calc(100vh-6rem)]">
        <div className="flex gap-6 h-full relative">
          {/* Navigation */}
          <div className="w-48 space-y-1">
            <button
              onClick={() => setActiveSection('account')}
              className={`w-full text-left px-3 py-2 rounded-sm ${
                activeSection === 'account'
                  ? 'bg-brand-active-light/50 dark:bg-brand-active-dark/50 text-gray-900 dark:text-white border-l-[3px] border-brand-primary'
                  : 'text-gray-900 dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
              }`}
            >
              Account Settings
            </button>
            <button
              onClick={() => setActiveSection('security')}
              className={`w-full text-left px-3 py-2 rounded-sm ${
                activeSection === 'security'
                  ? 'bg-brand-active-light/50 dark:bg-brand-active-dark/50 text-gray-900 dark:text-white border-l-[3px] border-brand-primary'
                  : 'text-gray-900 dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
              }`}
            >
              Security Settings
            </button>
            <button
              onClick={() => setActiveSection('tags')}
              className={`w-full text-left px-3 py-2 rounded-sm ${
                activeSection === 'tags'
                  ? 'bg-brand-active-light/50 dark:bg-brand-active-dark/50 text-gray-900 dark:text-white border-l-[3px] border-brand-primary'
                  : 'text-gray-900 dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
              }`}
            >
              Tag Management
            </button>
            <button
              onClick={() => setActiveSection('appearance')}
              className={`w-full text-left px-3 py-2 rounded-sm ${
                activeSection === 'appearance'
                  ? 'bg-brand-active-light/50 dark:bg-brand-active-dark/50 text-gray-900 dark:text-white border-l-[3px] border-brand-primary'
                  : 'text-gray-900 dark:text-white hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
              }`}
            >
              Appearance
            </button>
          </div>

          {/* Separator */}
          <div className="w-[1px] bg-light-bg-divider/80 dark:bg-dark-bg-divider/80 h-[calc(100vh-8rem)]" />

          {/* Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings 