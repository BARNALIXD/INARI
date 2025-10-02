'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 relative overflow-hidden border-t border-black/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-black"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              width: `${40 + i * 8}px`,
              height: `${40 + i * 8}px`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-black/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            &copy; 2025 Studio Inari. All rights reserved. | Crafted with precision and passion.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer










