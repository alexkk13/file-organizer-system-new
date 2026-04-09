'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const handleLogin = () => {
    // 调用 Microsoft 登录
    signIn('microsoft-entra-id', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-2">
          📁 OneDrive Organizer
        </h1>
        <p className="text-gray-500 text-sm mb-8">File Management System</p>

        <h2 className="text-xl font-medium text-white mb-2">Welcome</h2>
        <p className="text-gray-400 text-sm mb-8">
          Sign in with your Microsoft account to access your OneDrive files
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
        >
          Sign in with Microsoft
        </button>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            This app requires access to your profile and OneDrive files
          </p>
        </div>
      </div>
    </div>
  )
}