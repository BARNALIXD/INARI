'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Residential Design",
      description: "Custom homes and residential developments that reflect your lifestyle and values while maximizing comfort and efficiency."
    },
    {
      title: "Commercial Architecture",
      description: "Innovative commercial spaces that enhance productivity and create memorable experiences for employees and visitors."
    },
    {
      title: "Urban Planning",
      description: "Comprehensive planning solutions that create vibrant, sustainable communities and thoughtful urban environments."
    },
    {
      title: "Interior Design",
      description: "Seamlessly integrated interior solutions that complement our architectural vision and enhance spatial experience."
    },
    {
      title: "Sustainable Design",
      description: "Environmentally conscious design strategies that reduce impact while creating healthy, efficient buildings."
    },
    {
      title: "Project Management",
      description: "Full-service project coordination from concept through completion, ensuring quality and timeline adherence."
    }
  ]

  return (
    <section id="services" ref={ref} className="section-padding bg-primary-black text-pure-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="heading-2 text-pure-white mb-6">
            Our Services
          </h2>
          <p className="body-large text-white/80">
            Comprehensive architectural solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <h3 className="heading-3 text-pure-white mb-4">
                {service.title}
              </h3>
              <p className="body-regular text-white/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
