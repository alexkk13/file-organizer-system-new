'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import UserMenu from '@/components/UserMenu'

function StatCard({ title, value, icon, color }: { 
  title: string; value: number | string; icon: string; color: string 
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition">
      <div className="mb-3">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      <p className="text-sm text-gray-500 mt-2">{title}</p>
    </div>
  )
}

export default function DashboardPage() {
  const { data: session } = useSession()

  // 获取真实用户信息（Guest 时显示 Guest）
  const userName = session?.user?.name || 'Guest'
  const userEmail = session?.user?.email || ''

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1">
        {/* Top Bar with User Menu - 使用真实用户信息 */}
        <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex justify-end items-center">
          <UserMenu 
            userName={userName}
            userEmail={userEmail}
          />
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Overview of your file organization status</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <StatCard title="Total Files" value="—" icon="📄" color="#f1f5f9" />
            <StatCard title="Missing Files" value="—" icon="❌" color="#ef4444" />
            <StatCard title="Incorrect Names" value="—" icon="⚠️" color="#f59e0b" />
            <StatCard title="Rules Active" value="—" icon="⚙️" color="#3b82f6" />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/scan" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
                🔍 Run New Scan
              </Link>
              <Link href="/rules" className="bg-gray-800 border border-gray-700 hover:bg-gray-750 text-gray-300 px-5 py-2 rounded-lg text-sm transition">
                ⚙️ Manage Rules
              </Link>
              <Link href="/rules/new" className="bg-gray-800 border border-gray-700 hover:bg-gray-750 text-gray-300 px-5 py-2 rounded-lg text-sm transition">
                ➕ Create Rule
              </Link>
            </div>
          </div>

          {/* Recent Scans */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Recent Scans</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">
              <p className="text-gray-500">No scans yet</p>
              <Link href="/scan" className="text-blue-500 text-sm hover:underline mt-2 inline-block">
                Run your first scan →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}