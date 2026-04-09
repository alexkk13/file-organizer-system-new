'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Scan', href: '/scan', icon: '🔍' },
  { name: 'Rules', href: '/rules', icon: '⚙️' },  // ✅ 改为 /rules
  { name: 'Reports', href: '/report', icon: '📄' },
]


export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 fixed left-0 top-0 h-full p-6">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-500">📁 OneDrive Organizer</h2>
        <p className="text-xs text-gray-600 mt-1">File Management System</p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-600">
        <p>Connected to OneDrive</p>
        <p>v1.0.0</p>
      </div>
    </div>
  )
}