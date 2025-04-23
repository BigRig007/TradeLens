import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Trades() {
  return (
    <div className="max-w-7xl mx-auto p-2 space-y-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trades</h1>
      </div>

      {/* Trade List */}
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-light-border-primary dark:border-dark-border-primary">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Trade History</h2>
        </div>
        <div className="overflow-x-auto">
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
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  P/L
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Tags
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">100</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-success-600 dark:text-success-400">+$475.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                    Swing Trade
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2024-03-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">TSLA</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Short</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$175.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$172.50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-success-600 dark:text-success-400">+$250.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                    Day Trade
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade Filters */}
      <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Symbol
            </label>
            <select
              id="symbol"
              name="symbol"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option>All Symbols</option>
              <option>AAPL</option>
              <option>TSLA</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Type
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option>All Types</option>
              <option>Long</option>
              <option>Short</option>
            </select>
          </div>
          <div>
            <label htmlFor="result" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Result
            </label>
            <select
              id="result"
              name="result"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option>All Results</option>
              <option>Winners</option>
              <option>Losers</option>
            </select>
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-tertiary dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option>All Tags</option>
              <option>Swing Trade</option>
              <option>Day Trade</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
} 