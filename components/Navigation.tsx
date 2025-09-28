// 'use client'

// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import Logo from './Logo'

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { href: '#home', label: 'Home' },
//     { href: '#about', label: 'About' },
//     { href: '#services', label: 'Services' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#contact', label: 'Contact' },
//   ]

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//     // Close mobile menu after clicking
//     setIsMobileMenuOpen(false)
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   return (
//     <nav 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-black/5' 
//           : 'bg-white/95 backdrop-blur-lg border-b border-black/5'
//       }`}
//     >
//       <div className="container-custom">
//         <div className="flex justify-between items-center h-20">
//           <Link 
//             href="/" 
//             className="flex items-center space-x-3 font-playfair text-3xl font-semibold tracking-tight text-primary-black hover:opacity-70 transition-opacity"
//           >
//             <Logo className="w-10 h-10" />
//             <span>Studio Inari</span>
//           </Link>
          
//           <ul className="hidden md:flex items-center space-x-12">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <button
//                   onClick={() => scrollToSection(item.href)}
//                   className="text-primary-black text-lg font-medium tracking-wide hover:opacity-70 transition-opacity relative group"
//                 >
//                   {item.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-black transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile menu button */}
//           <button 
//             onClick={toggleMobileMenu}
//             className="md:hidden text-primary-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             aria-label="Toggle mobile menu"
//           >
//             <svg 
//               className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen 
//             ? 'max-h-96 opacity-100' 
//             : 'max-h-0 opacity-0 overflow-hidden'
//         }`}>
//           <div className="bg-white/98 backdrop-blur-xl border-t border-black/5 shadow-lg">
//             {/* Mobile Logo */}
//             <div className="px-4 py-4 border-b border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <Logo className="w-8 h-8" />
//                 <span className="font-playfair text-xl font-semibold text-primary-black">Studio Inari</span>
//               </div>
//             </div>
//             <ul className="px-4 py-6 space-y-4">
//               {navItems.map((item) => (
//                 <li key={item.href}>
//                   <button
//                     onClick={() => scrollToSection(item.href)}
//                     className="block w-full text-left text-primary-black text-xl font-medium py-4 px-4 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navigation









'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Logo = ({ className }: { className?: string }) => (
  <div className={`${className} bg-primary-black rounded-full flex items-center justify-center`}>
    <span className="text-pure-white font-playfair font-bold text-sm">SI</span>
  </div>
)

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-black/5' 
            : 'bg-white/95 backdrop-blur-lg border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link 
              href="/" 
              className="flex items-center space-x-3 font-playfair text-3xl font-semibold tracking-tight text-primary-black hover:opacity-70 transition-opacity"
            >
              <Logo className="w-10 h-10" />
              <span>Studio Inari</span>
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-primary-black text-lg font-medium tracking-wide hover:opacity-70 transition-opacity relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-black transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-primary-black p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-60"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile menu panel */}
          <div className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Logo className="w-8 h-8" />
                <span className="font-playfair text-xl font-semibold text-primary-black">Studio Inari</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-primary-black text-xl font-medium py-4 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navigation