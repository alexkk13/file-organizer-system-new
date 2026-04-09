'use client'


import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

interface Report {
  id: string
  title: string
  format: string
  folderPath: string
  score: number
  date: string
}

export default function ReportListPage() {
  // TODO: 后续从 API 获取真实数据
  const [reports, setReports] = useState<Report[]>([])

  const deleteReport = (id: string) => {
    setReports(reports.filter(r => r.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Reports</h1>
            <p className="text-gray-500 text-sm mt-1">View and download compliance reports</p>
          </div>
          <Link
            href="/scan"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + New Scan
          </Link>
        </div>

        {/* Report List - 空状态提示 */}
        {reports.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-16 text-center">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-500 mb-3">No reports generated yet</p>
            <p className="text-gray-600 text-sm mb-6">Run a scan first to generate compliance reports</p>
            <Link
              href="/scan"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center gap-2 transition"
            >
              🔍 Go to Scan
            </Link>
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-5 border-b border-gray-800 hover:bg-gray-800/50 transition"
              >
                {/* 左侧信息 */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      report.format === 'json' 
                        ? 'bg-yellow-500/20 text-yellow-500' 
                        : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {report.format.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(report.date).toLocaleString()}
                    </span>
                  </div>
                  <p className="font-medium text-white mb-1">{report.title}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">📁 {report.folderPath}</span>
                    <span className={`text-xs font-medium ${
                      report.score >= 80 ? 'text-green-500' : report.score >= 50 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      Score: {report.score}%
                    </span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 border border-gray-700 rounded-lg text-gray-400 text-xs hover:border-gray-600 hover:text-white transition">
                    📥 Download
                  </button>
                  <button className="px-3 py-1.5 border border-gray-700 rounded-lg text-gray-400 text-xs hover:border-gray-600 hover:text-white transition">
                    👁️ View
                  </button>
                  <button
                    onClick={() => deleteReport(report.id)}
                    className="px-3 py-1.5 border border-red-500/30 rounded-lg text-red-500 text-xs hover:bg-red-500/10 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}