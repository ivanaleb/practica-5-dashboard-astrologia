'use client'

import React, { useState } from 'react'

const Horoscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string>('aries')

  const zodiacSigns = [
    { value: 'aries', label: 'Aries', symbol: '♈' },
    { value: 'taurus', label: 'Tauro', symbol: '♉' },
    { value: 'gemini', label: 'Géminis', symbol: '♊' },
    { value: 'cancer', label: 'Cáncer', symbol: '♋' },
    { value: 'leo', label: 'Leo', symbol: '♌' },
    { value: 'virgo', label: 'Virgo', symbol: '♍' },
    { value: 'libra', label: 'Libra', symbol: '♎' },
    { value: 'scorpio', label: 'Escorpio', symbol: '♏' },
    { value: 'sagittarius', label: 'Sagitario', symbol: '♐' },
    { value: 'capricorn', label: 'Capricornio', symbol: '♑' },
    { value: 'aquarius', label: 'Acuario', symbol: '♒' },
    { value: 'pisces', label: 'Piscis', symbol: '♓' }
  ]

  const horoscopes: { [key: string]: { general: string; love: string; health: string; money: string } } = {
    aries: {
      general: "Hoy las estrellas te impulsan a tomar la iniciativa. Tu energía natural estará en su punto máximo, permitiéndote liderar proyectos y motivar a quienes te rodean.",
      love: "El romance está en el aire. Si tienes pareja, es un buen momento para planificar algo especial. Si estás soltero, mantén los ojos abiertos.",
      health: "Tu vitalidad está alta. Aprovecha para hacer ejercicio físico y liberar esa energía acumulada. El yoga o las artes marciales te beneficiarán.",
      money: "Oportunidades financieras podrían surgir inesperadamente. Mantente alerta a nuevas inversiones o propuestas de negocio."
    },
    taurus: {
      general: "La paciencia será tu virtud hoy. Las cosas pueden no avanzar tan rápido como quisieras, pero la persistencia traerá recompensas.",
      love: "La estabilidad emocional es clave. Conversaciones profundas con tu pareja fortalecerán el vínculo. La honestidad será fundamental.",
      health: "Cuida tu sistema digestivo. Una dieta balanceada y caminatas al aire libre te ayudarán a mantener tu bienestar físico y mental.",
      money: "Buen momento para revisar tus finanzas y hacer ajustes. Evita gastos impulsivos y enfócate en el ahorro a largo plazo."
    },
    gemini: {
      general: "Tu mente estará especialmente brillante hoy. Las ideas fluyen con facilidad y tu capacidad de comunicación está en su punto más alto.",
      love: "La conversación será el puente hacia el corazón. Expresa tus sentimientos con claridad y escucha activamente a tu pareja.",
      health: "Necesitas variedad en tu rutina. Prueba nuevos ejercicios o actividades mentales para mantener tu mente y cuerpo activos.",
      money: "Las oportunidades de networking podrían traer beneficios económicos. Asiste a eventos sociales y mantente conectado."
    },
    cancer: {
      general: "Tu intuición será tu guía más confiable hoy. Confía en esos sentimientos profundos que te orientan hacia las decisiones correctas.",
      love: "La conexión emocional es prioritaria. Pequeños gestos de afecto tendrán un gran impacto en tu relación de pareja.",
      health: "Cuida tu salud emocional. Dedica tiempo a actividades que te brinden paz y tranquilidad, como meditar o estar cerca del agua.",
      money: "Seguridad financiera es tu enfoque principal. Evita riesgos innecesarios y busca inversiones estables a largo plazo."
    },
    leo: {
      general: "Tu carisma natural brillará con fuerza especial hoy. Eres el centro de atención y tu capacidad de inspirar a otros está en su máximo esplendor.",
      love: "La pasión está en su punto más alto. Expresa tu amor de manera creativa y generosa. Tu pareja se sentirá especial.",
      health: "Tu energía física es abundante. Canalízala hacia actividades creativas o deportivas que te permitan expresar tu vitalidad.",
      money: "Las oportunidades de liderazgo podrían traer recompensas económicas. No temas asumir roles de mayor responsabilidad."
    },
    virgo: {
      general: "Tu atención al detalle será tu mayor fortaleza hoy. La perfección en tu trabajo te traerá reconocimiento y satisfacción personal.",
      love: "Los pequeños detalles cuentan mucho. Gestos considerados y palabras amables fortalecerán tu relación de manera significativa.",
      health: "Escucha a tu cuerpo. El descanso adecuado y una rutina saludable son fundamentales para mantener tu bienestar integral.",
      money: "La planificación financiera detallada te traerá beneficios. Analiza cada inversión con cuidado antes de tomar decisiones."
    },
    libra: {
      general: "El equilibrio será tu palabra clave hoy. Busca la armonía en todas las áreas de tu vida y toma decisiones justas y equilibradas.",
      love: "La belleza y el romance están en el aire. Crea un ambiente especial para tu pareja y disfruta de momentos compartidos.",
      health: "El equilibrio mente-cuerpo es esencial. Prueba actividades como el tai chi o el pilates que promuevan armonía interior.",
      money: "Negociaciones y acuerdos financieros serán favorables. Tu capacidad para encontrar puntos medios será muy valiosa."
    },
    scorpio: {
      general: "Tu intensidad y profundidad te permitirán ir más allá de las superficies. Descubre verdades ocultas y transforma situaciones.",
      love: "La conexión emocional profunda es posible. Comparte tus miedos y deseos más íntimos con tu pareja para fortalecer el vínculo.",
      health: "Cuida tu salud emocional. La transformación interior puede ser intensa, así que date tiempo para procesar tus sentimientos.",
      money: "Inversiones transformadoras podrían ser rentables. Confía en tu intuición para detectar oportunidades ocultas."
    },
    sagittarius: {
      general: "La aventura te llama. Tu espíritu libre y optimista te abrirá nuevas puertas y expandirá tus horizontes de maneras inesperadas.",
      love: "La diversión y el juego son importantes. Planifica actividades emocionantes con tu pareja y mantén la chispa viva.",
      health: "El ejercicio al aire libre te beneficiará especialmente. Caminatas, senderismo o deportes al aire libre recargarán tu energía.",
      money: "Oportunidades internacionales o de expansión podrían surgir. Mantén una mente abierta a nuevas posibilidades."
    },
    capricorn: {
      general: "Tu disciplina y ambición te llevarán lejos hoy. El trabajo duro y la perseverancia comenzarán a mostrar resultados tangibles.",
      love: "La estabilidad y el compromiso son importantes. Demuestra tu amor a través de acciones consistentes y apoyo incondicional.",
      health: "La rutina saludable es fundamental. Establece horarios regulares para comer, dormir y hacer ejercicio.",
      money: "Las inversiones a largo plazo son favorables. Tu paciencia y visión estratégica te traerán recompensas futuras."
    },
    aquarius: {
      general: "Tu originalidad y pensamiento innovador destacarán hoy. Las ideas únicas y las soluciones creativas fluirán naturalmente.",
      love: "La libertad individual es importante en tu relación. Apoya las metas de tu pareja y mantén tu propia independencia.",
      health: "Actividades poco convencionales podrían beneficiarte. Prueba terapias alternativas o ejercicios innovadores.",
      money: "Tecnología e innovación podrían traer oportunidades financieras. Mantente actualizado sobre nuevas tendencias."
    },
    pisces: {
      general: "Tu sensibilidad y empatía estarán en su punto más alto. Conectarás profundamente con otros y tu intuición te guiará correctamente.",
      love: "El romance espiritual y emocional es posible. Comparte tus sueños y fantasías con tu pareja para crear una conexión más profunda.",
      health: "Cuida tu salud emocional. Pasar tiempo cerca del agua o practicando meditación te ayudará a mantener el equilibrio.",
      money: "La creatividad podría generar ingresos. Explora oportunidades artísticas o de servicio que utilicen tu sensibilidad."
    }
  }

  const currentHoroscope = horoscopes[selectedSign]
  const selectedSignData = zodiacSigns.find(sign => sign.value === selectedSign)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">Horóscopo Diario</h1>
        <p className="text-lg text-white/80">
          Descubre qué te deparan las estrellas hoy según tu signo zodiacal.
        </p>
      </div>

      {/* Selector de signo */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <label className="block text-white font-medium mb-4">Selecciona tu signo:</label>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.value}
              onClick={() => setSelectedSign(sign.value)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedSign === sign.value
                  ? 'bg-purple-600/40 border-purple-400 text-white'
                  : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="text-2xl mb-1">{sign.symbol}</div>
              <div className="text-xs font-medium">{sign.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Horóscopo del día */}
      <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">{selectedSignData?.symbol}</div>
          <h2 className="text-3xl font-bold text-white">{selectedSignData?.label}</h2>
          <p className="text-white/70 mt-2">Horóscopo de hoy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">✨</span>
              <h3 className="text-xl font-semibold text-white">General</h3>
            </div>
            <p className="text-white/80 leading-relaxed">{currentHoroscope.general}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💕</span>
              <h3 className="text-xl font-semibold text-white">Amor</h3>
            </div>
            <p className="text-white/80 leading-relaxed">{currentHoroscope.love}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏃</span>
              <h3 className="text-xl font-semibold text-white">Salud</h3>
            </div>
            <p className="text-white/80 leading-relaxed">{currentHoroscope.health}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💰</span>
              <h3 className="text-xl font-semibold text-white">Dinero</h3>
            </div>
            <p className="text-white/80 leading-relaxed">{currentHoroscope.money}</p>
          </div>
        </div>
      </div>

      {/* Nota adicional */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
        <p className="text-white/60 italic">
          Recuerda que el horóscopo es una guía, no un destino. Tú tienes el poder de crear tu propio futuro.
        </p>
      </div>
    </div>
  )
}

export default Horoscope
