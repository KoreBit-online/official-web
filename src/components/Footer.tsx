"use client"

import type React from "react"

import { useState } from "react"
import "../styles/footer.css"
import Logo from "../images/logo-dark.png"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src={Logo} alt="KoreBit" />
              </div>
              <p className="footer-description">
                Transforming businesses through innovative web solutions and cutting-edge technology. Building the
                future, one line of code at a time.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link">
                  <span>💻</span>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Mobile Apps</a>
                </li>
                <li>
                  <a href="#services">Cloud Solutions</a>
                </li>
                <li>
                  <a href="#services">AI Integration</a>
                </li>
                <li>
                  <a href="#services">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services">Cybersecurity</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">API Reference</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>

            {/* No newsletter section: layout auto-balances columns */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2025 KoreBit. All rights reserved.</p>
            </div>
            {/* <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-shape decoration-1"></div>
        <div className="decoration-shape decoration-2"></div>
        <div className="decoration-shape decoration-3"></div>
      </div>
    </footer>
  )
}
