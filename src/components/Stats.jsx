import { useState } from 'react'

export default function Stats() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M')

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Stats</h1>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {['1W', '1M', '3M', '1Y', 'ALL'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 text-sm rounded-md ${
                  selectedTimeframe === timeframe
                    ? 'bg-brand-secondary text-white'
                    : 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {/* Win Rate Over Time */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Win Rate Over Time</h2>
          <div className="h-64 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Risk Distribution</h2>
          <div className="h-64 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
          </div>
        </div>

        {/* Profit Factor */}
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Profit Factor</h2>
          <div className="h-64 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Trade Analysis */}
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-sm shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-light-border-primary dark:border-dark-border-primary">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Trade Analysis</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Average Trade Duration */}
            <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Average Trade Duration</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">2.5 days</p>
            </div>

            {/* Best Performing Asset */}
            <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Best Performing Asset</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">AAPL</p>
            </div>

            {/* Most Common Setup */}
            <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Most Common Setup</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Breakout</p>
            </div>

            {/* Average R:R Ratio */}
            <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-sm p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Average R:R Ratio</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">1:2.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 