// 'use client'

// import { motion } from 'framer-motion'

// const Hero = () => {
//   const scrollToContact = () => {
//     const element = document.querySelector('#contact')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-secondary-black to-primary-black overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
//         style={{
//           backgroundImage: `url('')`
//         }}
//       ></div>
      
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0"></div>
      
//       {/* Grid pattern background */}
//       <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
//       {/* Floating elements */}
//       <motion.div
//         className="absolute w-0.5 h-24  top-1/5 left-1/12"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute w-20 h-0. top-3/5 right-1/6"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//       />
//       <motion.div
//         className="absolute w-10 h-1 top-1/3 right-1/4"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 4,
//         }}
//       />

//       <div className="relative z-10 text-center max-w-4xl px-4">
//         <motion.h1
//           className="heading-1 text-pure-white mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           Architectural Excellence
//         </motion.h1>
        
//         <motion.p
//           className="body-large text-white mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//         >
//           Creating spaces that inspire, function, and endure through innovative design and meticulous craftsmanship.
//         </motion.p>
        
//         <motion.button
//           onClick={scrollToContact}
//           className="inline-block px-10 py-4 bg-pure-white text-primary-black font-medium tracking-wider uppercase text-sm border-2 border-pure-white transition-all duration-300 hover:bg-transparent hover:text-pure-white hover:-translate-y-0.5"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Start Your Project
//         </motion.button>
//       </div>
//     </section>
//   )
// }

// export default Hero




// 'use client'

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isVisible, setIsVisible] = useState(false)
//   const [currentWord, setCurrentWord] = useState(0)
  
//   const words = ['Excellence', 'Innovation', 'Vision', 'Mastery']
  
//   useEffect(() => {
//     setIsVisible(true)
    
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       })
//     }
    
//     const wordInterval = setInterval(() => {
//       setCurrentWord(prev => (prev + 1) % words.length)
//     }, 2500)
    
//     window.addEventListener('mousemove', handleMouseMove)
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//       clearInterval(wordInterval)
//     }
//   }, [])

//   const scrollToContact = () => {
//     const element = document.querySelector('#contact')
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Dynamic Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
//         {/* Animated Geometric Lines */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={`line-${i}`}
//               className="absolute bg-white opacity-10"
//               style={{
//                 width: i % 2 === 0 ? '2px' : '1px',
//                 height: '100vh',
//                 left: `${10 + i * 12}%`,
//               }}
//               animate={{
//                 scaleY: [0.5, 1.2, 0.8, 1],
//                 opacity: [0.05, 0.15, 0.08, 0.12],
//               }}
//               transition={{
//                 duration: 4 + i,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.3,
//               }}
//             />
//           ))}
//         </div>

//         {/* Animated Blueprint Grid */}
//         <motion.div 
//           className="absolute inset-0 opacity-20"
//           animate={{ 
//             backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
//           }}
//           transition={{ 
//             duration: 20, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px'
//           }}
//         />

//         {/* Floating Architectural Elements */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={`arch-${i}`}
//             className="absolute"
//             style={{
//               left: `${15 + i * 15}%`,
//               top: `${20 + (i % 3) * 20}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               rotate: [0, 5, -5, 0],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 6 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.8,
//             }}
//           >
//             {i % 3 === 0 && (
//               <div className="w-16 h-16 border-2 border-white opacity-30 rotate-45" />
//             )}
//             {i % 3 === 1 && (
//               <div className="w-12 h-20 border-2 border-white opacity-30" />
//             )}
//             {i % 3 === 2 && (
//               <div className="w-20 h-2 bg-white opacity-30" />
//             )}
//           </motion.div>
//         ))}

//         {/* Dynamic Building Silhouettes */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={`building-${i}`}
//               className="absolute bottom-0 bg-white"
//               style={{
//                 left: `${i * 8}%`,
//                 width: `${3 + (i % 3)}%`,
//                 height: `${40 + (i % 4) * 20}px`,
//               }}
//               animate={{
//                 height: [
//                   `${40 + (i % 4) * 20}px`,
//                   `${60 + (i % 4) * 20}px`,
//                   `${40 + (i % 4) * 20}px`
//                 ],
//                 opacity: [0.1, 0.3, 0.1],
//               }}
//               transition={{
//                 duration: 4 + (i % 3),
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.2,
//               }}
//             />
//           ))}
//         </div>

//         {/* Particle System */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={`particle-${i}`}
//             className="absolute w-1 h-1 bg-white rounded-full opacity-40"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 0.6, 0],
//               scale: [0.5, 1.2, 0.5],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeOut",
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}

//         {/* Animated Compass/Technical Drawing Elements */}
//         <motion.div
//           className="absolute top-1/4 right-1/6 w-32 h-32 opacity-10"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         >
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" />
//             <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
//             <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
//             <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
//             <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5" />
//             <line x1="15" y1="15" x2="85" y2="85" stroke="white" strokeWidth="0.3" />
//             <line x1="85" y1="15" x2="15" y2="85" stroke="white" strokeWidth="0.3" />
//           </svg>
//         </motion.div>

//         {/* Blueprint Corner Elements */}
//         <motion.div
//           className="absolute top-8 left-8 w-20 h-20 opacity-20"
//           animate={{ 
//             opacity: [0.2, 0.4, 0.2],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{ 
//             duration: 3, 
//             repeat: Infinity, 
//             ease: "easeInOut" 
//           }}
//         >
//           <svg viewBox="0 0 50 50" className="w-full h-full">
//             <path d="M10 10 L40 10 L40 40 L10 40 Z" fill="none" stroke="white" strokeWidth="1" />
//             <path d="M10 25 L40 25" stroke="white" strokeWidth="0.5" />
//             <path d="M25 10 L25 40" stroke="white" strokeWidth="0.5" />
//             <circle cx="25" cy="25" r="3" fill="none" stroke="white" strokeWidth="0.5" />
//           </svg>
//         </motion.div>

//         <motion.div
//           className="absolute bottom-8 right-8 w-24 h-24 opacity-20"
//           animate={{ 
//             rotate: [0, 45, 0],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{ 
//             duration: 4, 
//             repeat: Infinity, 
//             ease: "easeInOut" 
//           }}
//         >
//           <svg viewBox="0 0 60 60" className="w-full h-full">
//             <polygon points="30,5 55,50 5,50" fill="none" stroke="white" strokeWidth="1" />
//             <line x1="30" y1="5" x2="30" y2="50" stroke="white" strokeWidth="0.5" />
//             <line x1="5" y1="50" x2="55" y2="50" stroke="white" strokeWidth="0.5" />
//           </svg>
//         </motion.div>
//       </div>
      
//       {/* Geometric Grid Animation */}
//       <div className="absolute inset-0 opacity-20">
//         <svg width="100%" height="100%" className="animate-pulse">
//           <defs>
//             <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
//               <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>
      
//       {/* Floating Geometric Particles */}
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute opacity-30"
//           style={{
//             left: `${10 + (i * 7)}%`,
//             top: `${20 + (i * 5)}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 4 + (i % 3),
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.5,
//           }}
//         >
//           <div 
//             className={`bg-white ${i % 3 === 0 ? 'w-1 h-16' : i % 3 === 1 ? 'w-16 h-1' : 'w-4 h-4'} 
//                        transition-all duration-1000 hover:scale-150 cursor-pointer`}
//             style={{
//               transform: `rotate(${i * 15}deg) scale(${0.5 + (i % 3) * 0.3})`
//             }}
//           />
//         </motion.div>
//       ))}
      
//       {/* Interactive Light Beam */}
//       <div 
//         className="absolute w-1 opacity-50 bg-gradient-to-b from-white to-transparent transition-all duration-300"
//         style={{
//           left: `${mousePosition.x}%`,
//           height: '40%',
//           top: '0%',
//           transform: `translateX(-50%) scaleY(${0.5 + mousePosition.y * 0.01})`
//         }}
//       />
      
//       {/* Main Content */}
//       <div className="relative z-20 text-center max-w-6xl px-6">
//         {/* Main Title with Staggered Animation */}
//         <div className="overflow-hidden mb-8">
//           <motion.h1
//             className={`text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-wide transition-all duration-1000`}
//             style={{ fontFamily: "'Playfair Display', serif" }}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <span className="block mb-4 font-normal">Architectural</span>
//             <motion.span 
//               className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-light italic"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
//               key={currentWord}
//             >
//               {words[currentWord]}
//             </motion.span>
//           </motion.h1>
//         </div>
        
//         {/* Subtitle with Typewriter Effect */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
//         >
//           <p 
//             className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-loose font-light tracking-wide"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Creating spaces that <span className="text-white font-normal">inspire</span>, 
//             <span className="text-white font-normal"> function</span>, and 
//             <span className="text-white font-normal"> endure</span> through innovative design and meticulous craftsmanship.
//           </p>
//         </motion.div>
        
//         {/* CTA Button with Magnetic Effect */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
//         >
//           <motion.button
//             onClick={scrollToContact}
//             className="group relative inline-flex items-center justify-center px-12 py-5 text-base font-semibold text-black bg-white overflow-hidden transition-all duration-300 ease-out hover:bg-transparent hover:text-white border-2 border-white hover:border-white hover:shadow-2xl transform hover:-translate-y-1"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.3)'
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.boxShadow = 'none'
//             }}
//           >
//             <span 
//               className="relative z-10 tracking-wider uppercase text-sm flex items-center gap-3 font-medium" 
//               style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em' }}
//             >
//               Start Your Project
//               <svg 
//                 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </span>
            
//             {/* Button Background Animation */}
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//           </motion.button>
//         </motion.div>
//       </div>
      
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
//       `}</style>
//     </section>
//   )
// }

// export default Hero








'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  
  const words = ['Excellence', 'Innovation', 'Vision', 'Mastery']
  
  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length)
    }, 2500)
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(wordInterval)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated Geometric Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-white opacity-10"
              style={{
                width: i % 2 === 0 ? '2px' : '1px',
                height: '100vh',
                left: `${10 + i * 12}%`,
              }}
              animate={{
                scaleY: [0.5, 1.2, 0.8, 1],
                opacity: [0.05, 0.15, 0.08, 0.12],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>

        {/* Animated Blueprint Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Architectural Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`arch-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-white opacity-30 rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-12 h-20 border-2 border-white opacity-30" />
            )}
            {i % 3 === 2 && (
              <div className="w-20 h-2 bg-white opacity-30" />
            )}
          </motion.div>
        ))}

        {/* Dynamic Building Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`building-${i}`}
              className="absolute bottom-0 bg-white"
              style={{
                left: `${i * 8}%`,
                width: `${3 + (i % 3)}%`,
                height: `${40 + (i % 4) * 20}px`,
              }}
              animate={{
                height: [
                  `${40 + (i % 4) * 20}px`,
                  `${60 + (i % 4) * 20}px`,
                  `${40 + (i % 4) * 20}px`
                ],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Particle System */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 16 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 10,
            }}
          />
        ))}

        {/* Animated Compass/Technical Drawing Elements */}
        <motion.div
          className="absolute top-1/4 right-1/6 w-32 h-32 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="15" y1="15" x2="85" y2="85" stroke="white" strokeWidth="0.3" />
            <line x1="85" y1="15" x2="15" y2="85" stroke="white" strokeWidth="0.3" />
          </svg>
        </motion.div>

        {/* Blueprint Corner Elements */}
        <motion.div
          className="absolute top-8 left-8 w-20 h-20 opacity-20"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <path d="M10 10 L40 10 L40 40 L10 40 Z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M10 25 L40 25" stroke="white" strokeWidth="0.5" />
            <path d="M25 10 L25 40" stroke="white" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="3" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 w-24 h-24 opacity-20"
          animate={{ 
            rotate: [0, 45, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <polygon points="30,5 55,50 5,50" fill="none" stroke="white" strokeWidth="1" />
            <line x1="30" y1="5" x2="30" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="5" y1="50" x2="55" y2="50" stroke="white" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>
      
      {/* Geometric Grid Animation */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating Geometric Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <div 
            className={`bg-white ${i % 3 === 0 ? 'w-1 h-16' : i % 3 === 1 ? 'w-16 h-1' : 'w-4 h-4'} 
                       transition-all duration-1000 hover:scale-150 cursor-pointer`}
            style={{
              transform: `rotate(${i * 15}deg) scale(${0.5 + (i % 3) * 0.3})`
            }}
          />
        </motion.div>
      ))}
      
      {/* Interactive Light Beam */}
      <div 
        className="absolute w-1 opacity-50 bg-gradient-to-b from-white to-transparent transition-all duration-300"
        style={{
          left: `${mousePosition.x}%`,
          height: '40%',
          top: '0%',
          transform: `translateX(-50%) scaleY(${0.5 + mousePosition.y * 0.01})`
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl px-6">
        {/* Main Title with Staggered Animation */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            className={`text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-wide transition-all duration-1000`}
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block mb-4 font-normal">Architectural</span>
            <motion.span 
              className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-light italic"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              key={currentWord}
            >
              {words[currentWord]}
            </motion.span>
          </motion.h1>
        </div>
        
        {/* Subtitle with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-loose font-light tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Creating spaces that <span className="text-white font-normal">inspire</span>, 
            <span className="text-white font-normal"> function</span>, and 
            <span className="text-white font-normal"> endure</span> through innovative design and meticulous craftsmanship.
          </p>
        </motion.div>
        
        {/* CTA Button with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-base font-semibold text-black bg-white overflow-hidden transition-all duration-300 ease-out hover:bg-transparent hover:text-white border-2 border-white hover:border-white hover:shadow-2xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span 
              className="relative z-10 tracking-wider uppercase text-sm flex items-center gap-3 font-medium" 
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em' }}
            >
              Start Your Project
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  )
}

export default Hero