'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewRulePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    description: '',
    fileType: '',
    sourceLocation: '',
    namingConvention: '',
    fileNamePattern: '',
    actionType: 'move',
    actionTarget: '',
    actionFormat: 'PascalCase',
    priority: 0,
    isActive: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: 后续添加 API 调用
    console.log('Rule data:', form)
    setTimeout(() => {
      setLoading(false)
      router.push('/rules')  // 改为 /rules
    }, 500)
  }

  const needsTarget = form.actionType === 'move' || form.actionType === 'copy'
  const isRename = form.actionType === 'rename'

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/rules" className="text-blue-500 text-sm hover:underline">
          ← Back to Rules
        </Link>

        <h1 className="text-2xl font-bold text-white mt-4 mb-2">Create New Rule</h1>
        <p className="text-gray-500 text-sm mb-6">Define conditions and actions for file organization</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Basic Information */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">Basic Information</h3>
            <input
              type="text"
              placeholder="Rule Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm mb-3 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              placeholder="Description (optional)"
              rows={2}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Condition */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">Condition (WHEN to apply)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={form.fileType}
                onChange={(e) => setForm({ ...form, fileType: e.target.value })}
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="">Any file type</option>
                <option value=".png">.png</option>
                <option value=".jpg">.jpg</option>
                <option value=".txt">.txt</option>
                <option value=".pdf">.pdf</option>
                <option value=".ts">.ts</option>
                <option value=".js">.js</option>
              </select>

              <input
                type="text"
                placeholder="Source Location (e.g., B, downloads)"
                value={form.sourceLocation}
                onChange={(e) => setForm({ ...form, sourceLocation: e.target.value })}
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              />

              <select
                value={form.namingConvention}
                onChange={(e) => setForm({ ...form, namingConvention: e.target.value })}
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="">Any naming convention</option>
                <option value="PascalCase">PascalCase (MyFile)</option>
                <option value="camelCase">camelCase (myFile)</option>
                <option value="snake_case">snake_case (my_file)</option>
                <option value="kebab-case">kebab-case (my-file)</option>
              </select>

              <input
                type="text"
                placeholder="File Name Pattern (regex, e.g., .*test.*)"
                value={form.fileNamePattern}
                onChange={(e) => setForm({ ...form, fileNamePattern: e.target.value })}
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Action */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">Action (WHAT to do)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={form.actionType}
                onChange={(e) => setForm({ ...form, actionType: e.target.value })}
                className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="move">📦 Move to folder</option>
                <option value="copy">📄 Copy to folder</option>
                <option value="rename">✏️ Rename file</option>
              </select>

              {needsTarget && (
                <input
                  type="text"
                  placeholder="Target Folder *"
                  value={form.actionTarget}
                  onChange={(e) => setForm({ ...form, actionTarget: e.target.value })}
                  className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              )}

              {isRename && (
                <select
                  value={form.actionFormat}
                  onChange={(e) => setForm({ ...form, actionFormat: e.target.value })}
                  className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="PascalCase">PascalCase (MyFile)</option>
                  <option value="camelCase">camelCase (myFile)</option>
                  <option value="lowercase">lowercase (myfile)</option>
                  <option value="UPPERCASE">UPPERCASE (MYFILE)</option>
                </select>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">Settings</h3>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <label className="text-gray-500 text-sm block mb-1">Priority</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.priority}
                  onChange={(e) => setForm({ ...form, priority: parseInt(e.target.value) || 0 })}
                  className="w-24 bg-gray-950 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-600 mt-1">Lower = earlier</p>
              </div>

              <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-700 bg-gray-950 text-blue-600 focus:ring-blue-500"
                />
                Enable this rule immediately
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3">
            <Link
              href="/rules"
              className="px-5 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-sm hover:text-white hover:border-gray-600 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Creating...' : 'Create Rule'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}