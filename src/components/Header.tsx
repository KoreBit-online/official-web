"use client"

import { useState, useEffect } from "react"
import "../styles/header.css"
import Logo from "../images/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrollY > 50 ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo} alt="KoreBit" className="logo" />
        </div>
        <div className={`nav-menu ${isMenuOpen ? "nav-menu-active" : ""}`}>
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          {/* <a href="#team" className="nav-link">
            Team
          </a> */}
          {/* <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a> */}
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="nav-cta">
          <a href="https://api.whatsapp.com/send?phone=%2B94703911990" target="_blank" className="btn btn-primary btn-sm">Get Quote</a>
        </div>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
