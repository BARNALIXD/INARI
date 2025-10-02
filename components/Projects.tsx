// 'use client'

// import { motion, useInView } from 'framer-motion'
// import Image from 'next/image'
// import { useRef } from 'react'

// const Projects = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const projects = [
//     {
//       title: "Skyline Tower",
//       description: "Modern skyscraper with panoramic city views",
//       image: "https://images.pexels.com/photos/34006479/pexels-photo-34006479/free-photo-of-skyscraper-view-with-clear-blue-sky-in-city.jpeg?auto=compress&cs=tinysrgb&w=800"
//     },
//     {
//       title: "Urban Complex",
//       description: "Contemporary building with dramatic perspective",
//       image: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=800"
//     },
//     {
//       title: "Design Studio",
//       description: "Minimalist workspace with architectural focus",
//       image: "https://images.pexels.com/photos/6615284/pexels-photo-6615284.jpeg?auto=compress&cs=tinysrgb&w=800"
//     },
//     {
//       title: "Modern Facade",
//       description: "Elegant grayscale architectural design",
//       image: "https://images.pexels.com/photos/10632513/pexels-photo-10632513.jpeg?auto=compress&cs=tinysrgb&w=800"
//     }
//   ]

//   return (
//     <section id="projects" ref={ref} className="section-padding bg-gray-light">
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2 className="heading-2 text-pure-white mb-6">
//             Featured Projects
//           </h2>
//           <p className="body-large text-gray-medium">
//             A selection of our recent architectural achievements
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="group relative aspect-[16/10] bg-secondary-black overflow-hidden cursor-pointer"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <Image
//                 src={project.image}
//                 alt={`${project.title} - ${project.description}`}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
              
//               {/* Content overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                 <h3 className="heading-3 text-pure-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="body-regular text-white/80">
//                   {project.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects




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
      description: "Elegant architectural design",
      image: "https://images.pexels.com/photos/10632513/pexels-photo-10632513.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-black"
            style={{
              left: `${8 + i * 9}%`,
              top: `${15 + (i % 3) * 30}%`,
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="heading-2 mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="body-large text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            A selection of our recent architectural achievements
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative aspect-[16/10] overflow-hidden cursor-pointer rounded-lg shadow-2xl"
              style={{ backgroundColor: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} - ${project.description}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
             
              {/* Animated Overlay */}
              <motion.div 
                className="absolute inset-0 transition-colors duration-300"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                }}
                animate={{
                  opacity: [0.4, 0.5, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-4 border-2 border-white/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.5 }}
              />
             
              {/* Content overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{
                  background: `linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent)`
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.7 }}
              >
                <motion.h3 
                  className="heading-3 text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.9 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="body-regular text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 1.1 }}
                >
                  {project.description}
                </motion.p>
              </motion.div>

              {/* Animated corner elements */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 border border-white/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 bg-white/40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects