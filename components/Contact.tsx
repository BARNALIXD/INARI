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
    <section id="contact" ref={ref} className="section-padding bg-secondary-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="heading-2 text-pure-white mb-8">
              Let's Create Together
            </h2>
            <p className="body-regular mb-8 text-gray-medium">
              Ready to bring your vision to life? We'd love to discuss your project and explore how we can help create exceptional spaces.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:hello@studioinari.com" 
                className="block text-pure-white font-medium hover:opacity-70 transition-opacity"
              >
                hello@studioinari.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="block text-pure-white font-medium hover:opacity-70 transition-opacity"
              >
                +1 (234) 567-8900
              </a>
              <p className="text-gray-medium">
                123 Architecture Lane<br />
                Design District, NY 10001
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-light bg-gray-light text-pure-white placeholder-gray-medium focus:border-pure-white focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-light bg-gray-light text-pure-white placeholder-gray-medium focus:border-pure-white focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="projectType"
                placeholder="Project Type"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-light bg-gray-light text-pure-white placeholder-gray-medium focus:border-pure-white focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-4 border-2 border-gray-light bg-gray-light text-pure-white placeholder-gray-medium focus:border-pure-white focus:outline-none transition-colors resize-vertical"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                submitStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : submitStatus === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-pure-white text-primary-black hover:bg-gray-light hover:text-pure-white hover:-translate-y-0.5'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting 
                ? 'Sending...' 
                : submitStatus === 'success' 
                ? 'Message Sent!' 
                : submitStatus === 'error'
                ? 'Error - Try Again'
                : 'Send Message'
              }
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
