'use client'

/**
 * SETTINGS PAGE
 * 
 * 功能：账户设置界面
 * - 账户信息
 * - 通知设置
 * - 其他偏好设置
 */

import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import UserMenu from '@/components/UserMenu'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [autoScan, setAutoScan] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex justify-end items-center">
          <UserMenu 
            userName="John Doe"
            userEmail="john.doe@example.com"
          />
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Account Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your account preferences</p>
          </div>

          <div className="max-w-2xl space-y-6">
            {/* Account Information */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Account Information</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Name</span>
                  <span className="text-white text-sm">John Doe</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Email</span>
                  <span className="text-white text-sm">john.doe@example.com</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Connected Service</span>
                  <span className="text-green-500 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    OneDrive Connected
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Account Type</span>
                  <span className="text-white text-sm">Microsoft Entra ID</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Preferences</h2>
              
              <div className="space-y-4">
                {/* Notification Setting */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Email Notifications</p>
                    <p className="text-gray-500 text-xs mt-1">Receive email updates about scan results</p>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`w-12 h-6 rounded-full transition ${
                      notifications ? 'bg-blue-600' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Auto Scan Setting */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                  <div>
                    <p className="text-white text-sm font-medium">Auto Scan</p>
                    <p className="text-gray-500 text-xs mt-1">Automatically scan folders weekly</p>
                  </div>
                  <button
                    onClick={() => setAutoScan(!autoScan)}
                    className={`w-12 h-6 rounded-full transition ${
                      autoScan ? 'bg-blue-600' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        autoScan ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-red-500 mb-4">Danger Zone</h2>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-sm font-medium">Disconnect OneDrive</p>
                  <p className="text-gray-500 text-xs mt-1">Remove access to your OneDrive account</p>
                </div>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition">
                  Disconnect
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}