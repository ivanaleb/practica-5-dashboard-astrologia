'use client'

import React from 'react'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo GIF persistente */}
      <div 
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: 'url("/video/video_1.gif.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="fixed inset-0 bg-black/50 z-10" />
      
      {/* Contenido principal */}
      <div className="relative z-20 flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Área dinámica de contenido */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
