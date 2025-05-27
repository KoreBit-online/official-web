"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import "./styles/globals.css"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  )
}
