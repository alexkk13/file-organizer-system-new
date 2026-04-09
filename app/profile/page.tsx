'use client'

/**
 * PROFILE PAGE
 * 
 * 功能：用户个人资料页面
 */

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import UserMenu from '@/components/UserMenu'

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setMounted(true)
    setCurrentDate(new Date().toLocaleDateString())
  }, [])

  // 服务器端渲染时显示占位符，避免 hydration 错误
  if (!mounted) {
    return (
      <div className="flex min-h-screen bg-gray-950">
        <Sidebar />
        <div className="ml-64 flex-1">
          <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex justify-end items-center">
            <UserMenu userName="John Doe" userEmail="john.doe@example.com" />
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
              <p className="text-gray-500 text-sm mt-1">Manage your account information</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-2xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white font-bold">
                  JD
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">John Doe</h2>
                  <p className="text-gray-400">john.doe@example.com</p>
                  <p className="text-gray-600 text-sm mt-1">Connected to OneDrive</p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-gray-500 text-sm">Account type: Microsoft Entra ID</p>
                <p className="text-gray-500 text-sm mt-1">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex justify-end items-center">
          <UserMenu userName="John Doe" userEmail="john.doe@example.com" />
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your account information</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-2xl">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white font-bold">
                JD
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">John Doe</h2>
                <p className="text-gray-400">john.doe@example.com</p>
                <p className="text-gray-600 text-sm mt-1">Connected to OneDrive</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <p className="text-gray-500 text-sm">Account type: Microsoft Entra ID</p>
              <p className="text-gray-500 text-sm mt-1">Member since: {currentDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}