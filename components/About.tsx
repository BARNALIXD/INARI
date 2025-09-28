'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-padding bg-off-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="heading-2 text-pure-white mb-8">
              Design Philosophy
            </h2>
            <p className="body-regular mb-6 text-gray-medium">
              At Studio Inari, we believe architecture is the art of creating meaningful spaces that respond to human needs while respecting the environment. Our approach combines contemporary design principles with sustainable practices.
            </p>
            <p className="body-regular text-gray-medium">
              Every project begins with listening—understanding your vision, the site's unique characteristics, and the community it serves. We craft solutions that are both functionally exceptional and aesthetically compelling.
            </p>
          </motion.div>
          
          <motion.div
            className="relative aspect-[4/3] bg-primary-black overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Black spiral staircase - contemporary architecture design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-5 border-2 border-white/70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
