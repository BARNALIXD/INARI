'use client'

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="100" height="100" fill="white"/>
      
      {/* Main building structures */}
      {/* Left building - darker gray */}
      <path 
        d="M15 70 L15 35 L25 25 L25 60 L15 70 Z" 
        fill="#666666"
      />
      
      {/* Right building - lighter gray */}
      <path 
        d="M30 75 L30 20 L40 10 L40 65 L30 75 Z" 
        fill="#CCCCCC"
      />
      
      {/* Windows - left building */}
      <rect x="17" y="45" width="6" height="6" fill="black"/>
      <rect x="17" y="55" width="6" height="6" fill="black"/>
      
      {/* Windows - right building */}
      <rect x="32" y="30" width="6" height="6" fill="black"/>
      <rect x="32" y="40" width="6" height="6" fill="black"/>
      <rect x="32" y="50" width="6" height="6" fill="black"/>
      
      {/* Abstract architectural lines */}
      {/* Vertical lines */}
      <line x1="45" y1="80" x2="45" y2="15" stroke="black" strokeWidth="3"/>
      <line x1="55" y1="85" x2="55" y2="10" stroke="black" strokeWidth="3"/>
      <line x1="65" y1="75" x2="65" y2="20" stroke="black" strokeWidth="3"/>
      
      {/* Diagonal lines */}
      <line x1="10" y1="20" x2="85" y2="15" stroke="black" strokeWidth="4"/>
      <line x1="5" y1="60" x2="70" y2="80" stroke="black" strokeWidth="3"/>
      
      {/* Additional architectural elements */}
      <line x1="75" y1="70" x2="90" y2="25" stroke="black" strokeWidth="2"/>
      <line x1="80" y1="85" x2="95" y2="40" stroke="black" strokeWidth="2"/>
      
      {/* Light gray architectural elements */}
      <path d="M70 60 L75 55 L80 60 L75 65 Z" fill="#E5E5E5"/>
      <path d="M85 45 L90 40 L95 45 L90 50 Z" fill="#E5E5E5"/>
    </svg>
  )
}

export default Logo




