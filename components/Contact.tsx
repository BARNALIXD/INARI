'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', projectType: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
              width: `${20 + i * 3}px`,
              height: `${20 + i * 3}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="heading-2 text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Let's Create Together
            </motion.h2>
            <motion.p 
              className="body-regular mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Ready to bring your vision to life? We'd love to discuss your project and explore how we can help create exceptional spaces.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <motion.a 
                href="mailto:hello@studioinari.com" 
                className="block text-white font-medium hover:opacity-70 transition-opacity relative group"
                whileHover={{ x: 10 }}
              >
                hello@studioinari.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="tel:+1234567890" 
                className="block text-white font-medium hover:opacity-70 transition-opacity relative group"
                whileHover={{ x: 10 }}
              >
                +91 9876543210
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              >
                123 Architecture Lane<br />
                Bhubaneswar , Odisha
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 focus:bg-white/10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 focus:bg-white/10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <input
                type="text"
                name="projectType"
                placeholder="Project Type"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 focus:bg-white/10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 focus:bg-white/10 resize-vertical"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 font-medium tracking-wider uppercase text-sm transition-all duration-300 relative overflow-hidden ${
                submitStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : submitStatus === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-transparent hover:text-white border-2 border-white hover:-translate-y-0.5'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitting 
                  ? 'Sending...' 
                  : submitStatus === 'success' 
                  ? 'Message Sent!' 
                  : submitStatus === 'error'
                  ? 'Error - Try Again'
                  : 'Send Message'
                }
              </span>
              {submitStatus === 'idle' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  whileHover={{ scaleX: 1 }}
                />
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
