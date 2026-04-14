'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
<<<<<<< HEAD
import { signOut } from 'next-auth/react'
=======
>>>>>>> 4c4b93b7107e22fdf1217ff044af32778dc10112

interface UserMenuProps {
  userName?: string
  userEmail?: string
  userAvatar?: string
}

export default function UserMenu({ userName = 'User', userEmail = 'user@example.com', userAvatar }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
<<<<<<< HEAD
    signOut({ callbackUrl: '/login' })
  }

  const userInitial = userName.charAt(0).toUpperCase()

=======
    // TODO: 后续添加登出逻辑
    console.log('Logout clicked')
  }

>>>>>>> 4c4b93b7107e22fdf1217ff044af32778dc10112
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
      >
        {userAvatar ? (
          <img src={userAvatar} alt={userName} className="w-8 h-8 rounded-full object-cover border border-gray-700" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
<<<<<<< HEAD
            {userInitial}
=======
            {userName.charAt(0).toUpperCase()}
>>>>>>> 4c4b93b7107e22fdf1217ff044af32778dc10112
          </div>
        )}
        <svg className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b border-gray-800">
            <p className="text-white text-sm font-medium">{userName}</p>
            <p className="text-gray-500 text-xs mt-1">{userEmail}</p>
          </div>

          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <span>👤</span> Profile Settings
            </Link>
<<<<<<< HEAD
=======
            {/* 改为 /setting - 匹配你的文件夹名称 */}
>>>>>>> 4c4b93b7107e22fdf1217ff044af32778dc10112
            <Link
              href="/setting"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <span>⚙️</span> Account Settings
            </Link>
            <div className="border-t border-gray-800 my-1"></div>
            <button
              onClick={() => {
                setIsOpen(false)
                handleLogout()
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-gray-800 transition"
            >
              <span>🚪</span> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}