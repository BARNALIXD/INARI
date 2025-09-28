'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Skyline Tower",
      description: "Modern skyscraper with panoramic city views",
      image: "https://images.pexels.com/photos/34006479/pexels-photo-34006479/free-photo-of-skyscraper-view-with-clear-blue-sky-in-city.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Urban Complex",
      description: "Contemporary building with dramatic perspective",
      image: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Design Studio",
      description: "Minimalist workspace with architectural focus",
      image: "https://images.pexels.com/photos/6615284/pexels-photo-6615284.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Modern Facade",
      description: "Elegant grayscale architectural design",
      image: "https://images.pexels.com/photos/10632513/pexels-photo-10632513.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="heading-2 text-pure-white mb-6">
            Featured Projects
          </h2>
          <p className="body-large text-gray-medium">
            A selection of our recent architectural achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative aspect-[16/10] bg-secondary-black overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} - ${project.description}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="heading-3 text-pure-white mb-2">
                  {project.title}
                </h3>
                <p className="body-regular text-white/80">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
