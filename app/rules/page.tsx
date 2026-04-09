'use client'

import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

interface Rule {
  id: string
  name: string
  condition: string
  action: string
  isActive: boolean
  priority: number
}

export default function RuleListPage() {
  const [rules, setRules] = useState<Rule[]>([
    { id: '1', name: 'Move PNG to Folder A', condition: 'File type: .png, Source: B', action: 'Move to A', isActive: true, priority: 1 },
    { id: '2', name: 'Rename to PascalCase', condition: 'Naming convention: PascalCase', action: 'Rename', isActive: true, priority: 2 },
  ])

  const toggleActive = (id: string) => {
    setRules(rules.map(r => r.id === id ? { ...r, isActive: !r.isActive } : r))
  }

  const deleteRule = (id: string) => {
    setRules(rules.filter(r => r.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Rules</h1>
            <p className="text-gray-500 text-sm mt-1">Define automated file organization rules</p>
          </div>
          <Link href="/rules/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            + New Rule
          </Link>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          {rules.length === 0 ? (
            <div className="p-16 text-center">
              <p className="text-gray-500 mb-4">No rules defined yet</p>
              <Link href="/rules/new" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm inline-block">
                Create your first rule
              </Link>
            </div>
          ) : (
            rules.map(rule => (
              <div key={rule.id} className="flex items-center justify-between p-5 border-b border-gray-800">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{rule.action.includes('Move') ? '📦' : '✏️'}</span>
                    <span className={`font-medium ${rule.isActive ? 'text-white' : 'text-gray-500'}`}>{rule.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${rule.isActive ? 'bg-green-500/20 text-green-500' : 'bg-gray-700 text-gray-400'}`}>
                      {rule.isActive ? 'Active' : 'Disabled'}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">Priority: {rule.priority}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">📋 {rule.condition}</p>
                  <p className="text-sm text-blue-500">🎯 {rule.action}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleActive(rule.id)} 
                    className={`px-3 py-1.5 rounded-lg text-xs transition border ${rule.isActive ? 'border-green-500/30 text-green-500 bg-green-500/10' : 'border-gray-700 text-gray-400'}`}
                  >
                    {rule.isActive ? '⚡ Active' : '⏸ Disabled'}
                  </button>
                  <button 
                    onClick={() => deleteRule(rule.id)} 
                    className="px-3 py-1.5 rounded-lg text-xs text-red-500 border border-red-500/30 hover:bg-red-500/10 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500">
            💡 <strong>Example:</strong> If any .png in folder B → move to folder A
          </p>
        </div>
      </div>
    </div>
  )
}