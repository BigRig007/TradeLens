import { useState } from 'react'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-2 space-y-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {/* Total Trades */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Trades</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
          </div>
        </div>

        {/* Win Rate */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-success-100 dark:bg-success-900 text-success-600 dark:text-success-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Win %</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">75%</p>
            </div>
          </div>
        </div>

        {/* Average Risk */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Avg Risk</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">1.5%</p>
            </div>
          </div>
        </div>

        {/* Profit/Loss */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">P/L</h3>
              <p className="text-3xl font-bold text-success-600 dark:text-success-400">+$2,450</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Card */}
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-3 lg:p-6">
        <h2 className="text-sm lg:text-lg font-medium text-gray-900 dark:text-white mb-3 lg:mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Sharpe Ratio</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">1.85</p>
          </div>
          <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Max Drawdown</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">-12.5%</p>
          </div>
          <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Win Streak</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">8</p>
          </div>
          <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Loss Streak</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">3</p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {/* Equity Curve */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-3 lg:p-6">
          <h2 className="text-sm lg:text-lg font-medium text-gray-900 dark:text-white mb-3 lg:mb-4">Equity Curve</h2>
          <div className="h-40 lg:h-64 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm flex items-center justify-center">
            <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-3 lg:p-6">
          <h2 className="text-sm lg:text-lg font-medium text-gray-900 dark:text-white mb-3 lg:mb-4">Risk Distribution</h2>
          <div className="h-40 lg:h-64 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm flex items-center justify-center">
            <p className="text-xs lg:text-base text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Trades</h2>
        </div>
        <div className="border-t border-light-border-primary dark:border-dark-border-primary">
          <table className="min-w-full divide-y divide-light-border-primary dark:divide-dark-border-primary">
            <thead className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Symbol
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Entry
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Exit
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  P/L
                </th>
              </tr>
            </thead>
            <tbody className="bg-light-bg-secondary dark:bg-dark-bg-secondary divide-y divide-light-border-primary dark:divide-dark-border-primary">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2024-03-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">AAPL</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Long</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$175.50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$180.25</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-success-600 dark:text-success-400">+$475.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2024-03-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">TSLA</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Short</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$175.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$172.50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-success-600 dark:text-success-400">+$250.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 