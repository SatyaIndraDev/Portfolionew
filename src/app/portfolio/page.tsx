'use client'

import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { Moon, Sun, Github, Globe, ArrowRight, Badge } from "lucide-react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Card } from "../component/ui/card"
// import { Card } from "../component/ui/card"
// import { Badge } from "../component/ui/badge"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)   
  const [isVisible, setIsVisible] = useState(false)
  const mouse = useRef([0, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleMouseMove = (event) => {
    mouse.current = [event.clientX, event.clientY]
  }

  const skills = [
    { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "React Native", image: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
    { name: "Next.js", image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "HTML 5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS 3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "Javascript", image: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "Typescript", image: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "React Router", image: "https://reactrouter.com/_brand/react-router-mark-color.svg" },
    { name: "Redux", image: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "Chakra UI", image: "https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" },
    { name: "Node JS", image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Mongo DB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  ]

  const projects = [
    {
      id: 1,
      title: "Buy Now",
      description: "A global luxury fashion online marketplace that connects customers with a curated selection of products from a network of independent luxury boutiques and designer brands.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-11-2024_212927_buy-now01.vercel.app-waXbYy3KgRBfJfEYQsCH8vJp9wntWG.jpeg",
      logoText: "LUXURY FASHION",
      websiteUrl: "https://buy-now01.vercel.app/",
      githubUrl: "https://github.com/SatyaIndraDev/BUY-NOW",
      vercelUrl: "https://buy-now01.vercel.app/",
      tags: ["React", "Express.js", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Digital Dynamics",
      description: "Interactive data visualization tool",
      logo: "DD",
      logoText: "DIGITAL DYNAMICS",
      websiteUrl: "#",
      githubUrl: "#",
      vercelUrl: "#",
      tags: ["D3.js", "Vue", "Firebase"],
    },
    {
      id: 3,
      title: "Nova Networks",
      description: "Social networking platform for astronomers",
      logo: "NN",
      logoText: "NOVA NETWORKS",
      websiteUrl: "#",
      githubUrl: "#",
      vercelUrl: "#",
      tags: ["Angular", "Node.js", "MongoDB"],
    },
  ]

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-black' : 'bg-white'}`}
      onMouseMove={handleMouseMove}
    >
      <header className={`px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-md relative z-20`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
          <Link href="/" className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Satya Indra Dev
          </Link>
          
          <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <Link href="/about" className={`text-sm font-medium hover:text-purple-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              About
            </Link>
            <Link href="/skills" className={`text-sm font-medium hover:text-purple-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Skills
            </Link>
            <Link href="/projects" className={`text-sm font-medium hover:text-purple-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Projects
            </Link>
            <Link href="/contact" className={`text-sm font-medium hover:text-purple-600 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sid.jpg-qWOiR4DS40YgvCph6t1pfKKDvBQ0HA.jpeg"
                  alt="Software Developer Profile"
                  width={300}
                  height={300}
                  className="rounded-lg mb-8 shadow-lg mx-auto lg:mx-0"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Full Stack Web Developer
              </h2>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Hi! I Am
              </h2>
              <h1 className={`text-4xl sm:text-5xl font-bold mb-6 text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Satya Indra Dev
              </h1>
              <div className="max-w-xl mx-auto lg:mx-0">
                <p className={`text-base sm:text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  An aspiring Full Stack Web Developer. Proficient in front-end technologies like HTML, CSS, JavaScript, React, Redux, and ChakraUI. A proactive problem-solver with excellent communication skills and a strong work ethic.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h3 className={`text-2xl font-bold mb-6 text-center lg:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className={`p-8 ${isDarkMode ? 'bg-black' : 'bg-white'} min-h-screen`}>
        <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-12 text-center`}>My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className={`absolute -top-16 right-0 z-10 font-medium text-[80px] tracking-tighter opacity-30 ${isDarkMode ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
              <Card className={`group ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} border-0 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/20`}>
                <motion.div
                  className="p-6 flex flex-col h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="mb-6 relative overflow-hidden rounded-2xl">
                    <motion.div
                      className="bg-gradient-to-br from-blue-600 to-purple-600 aspect-square flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {typeof project.logo === 'string' && project.logo.startsWith('http') ? (
                        <Image
                          src={project.logo}
                          alt={project.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-5xl font-bold text-white">{project.logo}</div>
                          <div className="mt-2 text-sm font-medium tracking-wider text-white/80">
                            {project.logoText}
                          </div>
                        </div>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{project.title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>{project.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="flex-grow">
                    <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-2 transition-colors duration-300 ease-in-out group-hover:text-blue-400`}>
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-blue-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      href={project.websiteUrl}
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="flex gap-4">
                      <Link
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href={project.vercelUrl}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live deployment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function SkillCard({ skill, index, isDarkMode }) {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        y: [0, -20, 0],
        x: [-10, 10, -10],
        rotate: [-5, 5, -5],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      })
    } else {
      controls.stop()
    }
  }, [isHovered, controls])

  return (
    <motion.div 
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transform transition-all duration-300 hover:shadow-xl`}
      style={{animationDelay: `${index * 100}ms`}}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={skill.image}
          alt={skill.name}
          width={64}
          height={64}
          className="mb-2"
        />
        <h4 className={`text-sm font-semibold text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>{skill.name}</h4>
      </div>
    </motion.div>
  )
}

export default Component