"use client"

import { useState, useEffect } from "react"
import "../styles/hero.css"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [counters, setCounters] = useState({
    projects: 0,
    success: 0,
    support: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const targets = { projects: 5, success: 98, support: 24 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }))
      }, stepTime)
    })
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div
          className="mouse-follower"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          
          <h1 className="hero-title">
            <span className="title-line">At the Core of</span>
            <span className="title-line highlight">Digital Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Transform your digital presence with cutting-edge technology and creative excellence. We build the future,
            one line of code at a time.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{counters.projects}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.success}%</div>
              <div className="stat-label">Success</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.support}/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="https://api.whatsapp.com/send?phone=%2B94703911990" target="_blank" className="btn btn-primary">
              <span>Get Started</span>
              <div className="btn-glow"></div>
            </a>
            {/* <button className="btn btn-secondary">
              <span>Watch Demo</span>
              <div className="play-icon">▶</div>
            </button> */}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="dashboard-title">KoreBit Dashboard</div>
            </div>
            <div className="dashboard-content">
              <div className="code-editor">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> solution</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">'innovative'</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">function</span>
                  <span className="code-function"> buildFuture</span>
                  <span className="code-bracket">()</span>
                  <span className="code-bracket"> {`{`}</span>
                </div>
                <div className="code-line">
                  <span className="code-indent"> </span>
                  <span className="code-keyword">return</span>
                  <span className="code-variable"> success</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{`}`}</span>
                </div>
              </div>
              <div className="dashboard-charts">
                <div className="chart-item">
                  <div className="chart-bar chart-bar-1"></div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar chart-bar-2"></div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar chart-bar-3"></div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar chart-bar-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#services" className="scroll-link">
            <div className="scroll-arrow"></div>
        </a>        
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
