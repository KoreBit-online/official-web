"use client"

import { useEffect, useState } from "react"
import "../styles/about.css"
import Logo from "../images/logo.png"

export default function About() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const targets = {
      projects: 5,
      clients: 100,
      // experience: 5,
       satisfaction: 99,
    }

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
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">About KoreBit</div>
            <h2 className="section-title">Building Digital Excellence</h2>
            <p className="about-description">
              We are a forward-thinking technology company dedicated to creating innovative web solutions that drive
              business growth and digital transformation. Our team of expert developers, designers, and strategists work
              together to deliver exceptional results.
            </p>
            <p className="about-description">
              From startups to enterprise-level organizations, we've helped businesses across various industries achieve
              their digital goals through cutting-edge technology and creative solutions.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Mission-Driven</h4>
                  <p>Focused on delivering solutions that make a real impact</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h4>Innovation First</h4>
                  <p>Always staying ahead with the latest technologies</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Client Partnership</h4>
                  <p>Building long-term relationships based on trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">{counters.projects}+</div>
                <div className="stat-label">Projects Completed</div>
                <div className="stat-bar">
                  <div className="stat-fill stat-fill-100"></div>
                </div>
              </div>
              {/* <div className="stat-card">
                <div className="stat-number">{counters.clients}%</div>
                <div className="stat-label">Customer Satisfaction</div>
                <div className="stat-bar">
                  <div className="stat-fill stat-fill-85"></div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
                <div className="stat-bar">
                  <div className="stat-fill stat-fill-70"></div>
                </div>
              </div> */}
              <div className="stat-card">
                <div className="stat-number">{counters.satisfaction}%</div>
                <div className="stat-label">Client Satisfaction</div>
                <div className="stat-bar">
                  <div className="stat-fill stat-fill-99"></div>
                </div>
              </div>
            </div>

            <div className="tech-showcase">
              <div className="tech-orbit">
                <div className="tech-center">
                  <img src={Logo} alt="KoreBit" />
                </div>
                <div className="tech-planet tech-planet-1">React</div>
                <div className="tech-planet tech-planet-2">Node.js</div>
                <div className="tech-planet tech-planet-3">Python</div>
                <div className="tech-planet tech-planet-4">AWS</div>
                <div className="tech-planet tech-planet-5">Docker</div>
                <div className="tech-planet tech-planet-6">AI/ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
