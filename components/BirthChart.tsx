'use client'

import React, { useState } from 'react'

const BirthChart: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      birthDate: '',
      birthTime: '',
      birthPlace: ''
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4">Tu Carta Astral</h1>
          <p className="text-lg text-white/80">
            Aquí está tu mapa cósmico personal basado en tu información de nacimiento.
          </p>
        </div>

        {/* Resultado de la carta astral (mock) */}
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-white mb-2">{formData.name}</h2>
            <p className="text-white/70">Carta Astral Personal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Información de Nacimiento</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-white/60">Fecha:</span>
                  <p className="text-white font-medium">{formData.birthDate}</p>
                </div>
                <div>
                  <span className="text-white/60">Hora:</span>
                  <p className="text-white font-medium">{formData.birthTime}</p>
                </div>
                <div>
                  <span className="text-white/60">Lugar:</span>
                  <p className="text-white font-medium">{formData.birthPlace}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Posiciones Planetarias</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">☉ Sol:</span>
                  <span className="text-white">25° Géminis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">☽ Luna:</span>
                  <span className="text-white">12° Piscis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">☿ Mercurio:</span>
                  <span className="text-white">8° Cáncer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">♀ Venus:</span>
                  <span className="text-white">18° Tauro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">♂ Marte:</span>
                  <span className="text-white">22° Leo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">♃ Júpiter:</span>
                  <span className="text-white">5° Sagitario</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de casas */}
          <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Casas Astrológicas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 1</div>
                <div className="text-white font-medium">Aries</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 2</div>
                <div className="text-white font-medium">Tauro</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 3</div>
                <div className="text-white font-medium">Géminis</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 4</div>
                <div className="text-white font-medium">Cáncer</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 5</div>
                <div className="text-white font-medium">Leo</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 mb-1">Casa 6</div>
                <div className="text-white font-medium">Virgo</div>
              </div>
            </div>
          </div>

          {/* Análisis básico */}
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Análisis Personal</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Tu carta astral revela una personalidad equilibrada entre la racionalidad y la emocionalidad. 
              Con el Sol en Géminis, posees una mente ágil y comunicativa, mientras que la Luna en Piscis 
              te dota de una profunda sensibilidad e intuición.
            </p>
            <p className="text-white/80 leading-relaxed">
              Venus en Tauro te atrae hacia la estabilidad y el confort material, mientras que Marte en Leo 
              te impulsa a expresar tu creatividad y liderazgo. Esta combinación te hace una persona carismática 
              y confiable, capaz de equilibrar tus aspiraciones personales con tus relaciones interpersonales.
            </p>
          </div>
        </div>

        {/* Botón para nueva consulta */}
        <div className="text-center">
          <button
            onClick={handleReset}
            className="bg-purple-600/40 hover:bg-purple-600/60 text-white font-medium px-8 py-3 rounded-lg border border-purple-400/30 transition-colors duration-200"
          >
            Crear Nueva Carta Astral
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">Carta Astral</h1>
        <p className="text-lg text-white/80">
          Descubre tu mapa cósmico personal. Ingresa tus datos de nacimiento para generar tu carta astral única.
        </p>
      </div>

      {/* Formulario */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-colors duration-200"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <label htmlFor="birthDate" className="block text-white font-medium mb-2">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-colors duration-200"
              />
            </div>

            {/* Hora de nacimiento */}
            <div>
              <label htmlFor="birthTime" className="block text-white font-medium mb-2">
                Hora de Nacimiento
              </label>
              <input
                type="time"
                id="birthTime"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-colors duration-200"
              />
              <p className="text-white/60 text-sm mt-1">
                Si no conoces la hora exacta, usa una aproximación como 12:00
              </p>
            </div>

            {/* Lugar de nacimiento */}
            <div>
              <label htmlFor="birthPlace" className="block text-white font-medium mb-2">
                Lugar de Nacimiento
              </label>
              <input
                type="text"
                id="birthPlace"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-colors duration-200"
                placeholder="Ciudad, País"
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Generar Mi Carta Astral
            </button>
          </form>

          {/* Información adicional */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
            <h3 className="text-white font-medium mb-2 flex items-center gap-2">
              <span className="text-xl">ℹ️</span>
              ¿Qué es una Carta Astral?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              La carta astral es un mapa del cielo en el momento exacto de tu nacimiento. 
              Muestra la posición de los planetas, el sol y la luna en relación con tu lugar 
              y tiempo de nacimiento, proporcionando información sobre tu personalidad, 
              fortalezas, debilidades y potencial de vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthChart
