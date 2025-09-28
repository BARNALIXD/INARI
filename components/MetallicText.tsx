// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import MetallicPaint from './MetallicPaint.jsx'

// const MetallicText = ({ text, className = "" }) => {
//   const [imageData, setImageData] = useState(null)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     // Create a canvas to generate text as image data
//     const canvas = document.createElement('canvas')
//     const ctx = canvas.getContext('2d')
    
//     // Set canvas size
//     canvas.width = 1000
//     canvas.height = 300
    
//     // Set background to white
//     ctx.fillStyle = '#ffffff'
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
    
//     // Set text properties
//     ctx.fillStyle = '#000000'
//     ctx.font = 'bold 120px Playfair Display, serif'
//     ctx.textAlign = 'center'
//     ctx.textBaseline = 'middle'
    
//     // Draw text
//     ctx.fillText(text, canvas.width / 2, canvas.height / 2)
    
//     // Get image data
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//     setImageData(imageData)
//   }, [text])

//   if (!imageData) {
//     return <div className={className}>Loading...</div>
//   }

//   return (
//     <div className={`metallic-text-container ${className}`}>
//       <MetallicPaint 
//         imageData={imageData}
//         params={{
//           patternScale: 1.5,
//           refraction: 0.02,
//           edge: 1,
//           patternBlur: 0.003,
//           liquid: 0.05,
//           speed: 0.2
//         }}
//       />
//     </div>
//   )
// }

// export default MetallicText



'use client'

import { useEffect, useRef, useState } from 'react'
import MetallicPaint from './MetallicPaint.jsx'

interface MetallicTextProps {
  text: string
  className?: string
}

const MetallicText = ({ text, className = "" }: MetallicTextProps) => {
  const [imageData, setImageData] = useState<ImageData | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    // Set canvas size
    canvas.width = 1000
    canvas.height = 300

    // Set background to white
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Set text properties
    ctx.fillStyle = '#000000'
    ctx.font = 'bold 120px Playfair Display, serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // Draw text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    // Get image data
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
    setImageData(data)
  }, [text])

  if (!imageData) {
    return <div className={className}>Loading...</div>
  }

  return (
    <div className={`metallic-text-container ${className}`}>
      <MetallicPaint
        imageData={imageData}
        params={{
          patternScale: 1.5,
          refraction: 0.02,
          edge: 1,
          patternBlur: 0.003,
          liquid: 0.05,
          speed: 0.2,
        }}
      />
    </div>
  )
}

export default MetallicText




