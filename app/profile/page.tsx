'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import UserMenu from '@/components/UserMenu'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setMounted(true)
    setCurrentDate(new Date().toLocaleDateString())
  }, [])

  // 检查登录状态
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  // 加载中
  if (!mounted || status === 'loading') {
    return (
      <div className="flex min-h-screen bg-gray-950">
        <Sidebar />
        <div className="ml-64 flex-1 p-8">
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    )
  }

  // 未登录 - 显示提示
  if (!session) {
    return (
      <div className="flex min-h-screen bg-gray-950">
        <Sidebar />
        <div className="ml-64 flex-1 p-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center max-w-md mx-auto">
            <div className="text-5xl mb-4">🔐</div>
            <h2 className="text-xl font-semibold text-white mb-2">Not Signed In</h2>
            <p className="text-gray-400 text-sm mb-6">
              Please sign in to view your profile information
            </p>
            <button
              onClick={() => signIn('microsoft-entra-id', { callbackUrl: '/profile' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 获取真实用户信息
  const userName = session.user?.name || 'User'
  const userEmail = session.user?.email || 'user@example.com'
  const userInitial = userName.charAt(0).toUpperCase()

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex justify-end items-center">
          <UserMenu userName={userName} userEmail={userEmail} />
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
                {userInitial}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{userName}</h2>
                <p className="text-gray-400">{userEmail}</p>
                <p className="text-green-500 text-sm mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Connected to OneDrive
                </p>
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