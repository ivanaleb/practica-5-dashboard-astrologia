'use client'

import React from 'react'

const ZodiacCards: React.FC = () => {
  const zodiacSigns = [
    {
      name: 'Aries',
      symbol: '♈',
      dates: '21 Mar - 19 Abr',
      element: 'Fuego',
      description: 'Valiente, enérgico y líder natural. Los arianos son pioneros llenos de pasión.'
    },
    {
      name: 'Tauro',
      symbol: '♉',
      dates: '20 Abr - 20 May',
      element: 'Tierra',
      description: 'Paciente, confiable y práctico. Los tauro son conocidos por su determinación.'
    },
    {
      name: 'Géminis',
      symbol: '♊',
      dates: '21 May - 20 Jun',
      element: 'Aire',
      description: 'Adaptable, curioso y comunicativo. Los géminis tienen una mente brillante.'
    },
    {
      name: 'Cáncer',
      symbol: '♋',
      dates: '21 Jun - 22 Jul',
      element: 'Agua',
      description: 'Intuitivo, emocional y protector. Los cancerianos son profundamente leales.'
    },
    {
      name: 'Leo',
      symbol: '♌',
      dates: '23 Jul - 22 Ago',
      element: 'Fuego',
      description: 'Creativo, apasionado y generoso. Los leos son líderes carismáticos.'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      dates: '23 Ago - 22 Sep',
      element: 'Tierra',
      description: 'Analítico, trabajador y práctico. Los virgo son perfeccionistas.'
    },
    {
      name: 'Libra',
      symbol: '♎',
      dates: '23 Sep - 22 Oct',
      element: 'Aire',
      description: 'Diplomático, justo y social. Los libra buscan el equilibrio en todo.'
    },
    {
      name: 'Escorpio',
      symbol: '♏',
      dates: '23 Oct - 21 Nov',
      element: 'Agua',
      description: 'Intenso, apasionado y misterioso. Los escorpio tienen una profunda fuerza interior.'
    },
    {
      name: 'Sagitario',
      symbol: '♐',
      dates: '22 Nov - 21 Dic',
      element: 'Fuego',
      description: 'Optimista, aventurero y filosófico. Los sagitario aman la libertad.'
    },
    {
      name: 'Capricornio',
      symbol: '♑',
      dates: '22 Dic - 19 Ene',
      element: 'Tierra',
      description: 'Ambicioso, disciplinado y responsable. Los capricornio son grandes estrategas.'
    },
    {
      name: 'Acuario',
      symbol: '♒',
      dates: '20 Ene - 18 Feb',
      element: 'Aire',
      description: 'Innovador, humanitario e independiente. Los acuario piensan diferente.'
    },
    {
      name: 'Piscis',
      symbol: '♓',
      dates: '19 Feb - 20 Mar',
      element: 'Agua',
      description: 'Compasivo, artístico e intuitivo. Los piscis son soñadores empáticos.'
    }
  ]

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fuego': return 'from-red-600/20 to-orange-600/20'
      case 'Tierra': return 'from-green-600/20 to-emerald-600/20'
      case 'Aire': return 'from-blue-600/20 to-cyan-600/20'
      case 'Agua': return 'from-indigo-600/20 to-purple-600/20'
      default: return 'from-gray-600/20 to-gray-600/20'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">Signos del Zodíaco</h1>
        <p className="text-lg text-white/80">
          Explora las características únicas de cada signo zodiacal y descubre cómo influyen en tu personalidad.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zodiacSigns.map((sign, index) => (
          <div
            key={sign.name}
            className={`bg-gradient-to-br ${getElementColor(sign.element)} backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="text-center">
              <div className="text-5xl mb-3">{sign.symbol}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{sign.name}</h3>
              <p className="text-white/70 text-sm mb-3">{sign.dates}</p>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-4">
                {sign.element}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {sign.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Leyenda de elementos */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-white mb-4">Elementos del Zodíaco</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🔥</div>
            <p className="text-white font-medium">Fuego</p>
            <p className="text-white/60 text-sm">Aries, Leo, Sagitario</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🌍</div>
            <p className="text-white font-medium">Tierra</p>
            <p className="text-white/60 text-sm">Tauro, Virgo, Capricornio</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💨</div>
            <p className="text-white font-medium">Aire</p>
            <p className="text-white/60 text-sm">Géminis, Libra, Acuario</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💧</div>
            <p className="text-white font-medium">Agua</p>
            <p className="text-white/60 text-sm">Cáncer, Escorpio, Piscis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZodiacCards
