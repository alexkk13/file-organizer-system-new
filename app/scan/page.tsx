'use client'


import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function ScanPage() {
  const [folder, setFolder] = useState('')
  const [template, setTemplate] = useState('')
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleScan = () => {
    setScanning(true)
    // TODO: 后续添加真实扫描逻辑
    setTimeout(() => {
      setScanning(false)
      setResult({ score: 75, missing: 3, invalid: 2 })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Scan</h1>
          <p className="text-gray-500 text-sm mt-1">Scan a OneDrive folder against a template</p>
        </div>

        <div className="max-w-xl">
          {/* Step 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white">1</div>
              <h3 className="font-semibold text-white">Select Folder</h3>
            </div>
            <input
              type="text"
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              placeholder="Document / Project"
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-600 mt-2">Enter the path or ID of the OneDrive folder</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white">2</div>
              <h3 className="font-semibold text-white">Select Template</h3>
            </div>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm"
            >
              <option value="">Select a template...</option>
              <option value="project">Project Template</option>
              <option value="document">Document Template</option>
            </select>
            {/* 修改这里：/rule 改为 /rules */}
            <Link href="/rules" className="text-blue-500 text-xs mt-3 inline-block">
              + Manage Templates
            </Link>
          </div>

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={scanning || !folder || !template}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition"
          >
            {scanning ? 'Scanning...' : 'Start Scan'}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 max-w-xl">
            <h3 className="font-semibold text-white mb-3">Scan Result</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-5 text-center border-b border-gray-800">
                <p className="text-gray-500 text-sm mb-1">Compliance Score</p>
                <p className={`text-5xl font-bold ${result.score >= 80 ? 'text-green-500' : result.score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {result.score}%
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-gray-800">
                <div className="bg-gray-900 p-4 text-center">
                  <p className="text-gray-500 text-xs mb-1">Missing Files</p>
                  <p className="text-red-500 text-xl font-bold">{result.missing}</p>
                </div>
                <div className="bg-gray-900 p-4 text-center">
                  <p className="text-gray-500 text-xs mb-1">Invalid Names</p>
                  <p className="text-yellow-500 text-xl font-bold">{result.invalid}</p>
                </div>
              </div>
              <div className="p-4 border-t border-gray-800 flex gap-3">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition">
                  📄 Generate Report
                </button>
                <button className="flex-1 bg-gray-800 border border-gray-700 text-gray-400 py-2 rounded-lg text-sm transition">
                  ⚙️ Apply Rules
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}