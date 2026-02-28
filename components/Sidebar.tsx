'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar: React.FC = () => {
  const pathname = usePathname()

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/zodiac', label: 'Signos del Zodíaco', icon: '⭐' },
    { path: '/horoscope', label: 'Horóscopo Diario', icon: '🔮' },
    { path: '/birth-chart', label: 'Carta Astral', icon: '🌙' }
  ]

  return (
    <aside className="w-64 bg-black/30 backdrop-blur-md border-r border-white/10">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-3xl">✨</span>
          Astro Dashboard
        </h1>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                pathname === item.path
                  ? 'bg-purple-600/40 text-white border border-purple-400/30'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Footer del sidebar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
        <div className="text-white/50 text-sm text-center">
          <p>🌟 Guía Astral 🌟</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
