'use client'

import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Bienvenido a Astro Dashboard
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          Tu portal personal al universo místico. Explora los secretos de los astros, 
          descubre tu signo zodiacal y conecta con la energía cósmica que te rodea.
        </p>
      </div>

      {/* Cards de información */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-semibold text-white mb-2">Signos del Zodíaco</h3>
          <p className="text-white/70">Descubre las características de cada signo y su influencia en tu vida.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-xl font-semibold text-white mb-2">Horóscopo Diario</h3>
          <p className="text-white/70">Recibe las predicciones astrales para cada día y toma mejores decisiones.</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-4">🌙</div>
          <h3 className="text-xl font-semibold text-white mb-2">Carta Astral</h3>
          <p className="text-white/70">Crea tu carta natal y explora tu mapa cósmico personal.</p>
        </div>
      </div>

      {/* Frase inspiradora */}
      <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
        <p className="text-2xl text-white font-medium italic">
          "Las estrellas no nos gobiernan, pero nos iluminan el camino"
        </p>
        <p className="text-white/60 mt-2">- Sabiduría Antigua</p>
      </div>
    </div>
  )
}

export default Dashboard
