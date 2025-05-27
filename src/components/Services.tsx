"use client"

import { useState } from "react"
import "../styles/services.css"

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    color: "blue-cyan",
  },
  // {
  //   icon: "📱",
  //   title: "Mobile Apps",
  //   description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  //   features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
  //   color: "purple-pink",
  // },
  {
    icon: "☁️",
    title: "Hosting",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: ["AWS & Azure", "Docker", "CI/CD", "Auto Scaling"],
    color: "green-teal",
  },
  // {
  //   icon: "🤖",
  //   title: "AI Integration",
  //   description: "Intelligent solutions powered by artificial intelligence and machine learning.",
  //   features: ["Machine Learning", "Natural Language", "Computer Vision", "Automation"],
  //   color: "orange-red",
  // },
  // {
  //   icon: "🎨",
  //   title: "UI/UX Design",
  //   description: "Beautiful and intuitive designs that enhance user experience and engagement.",
  //   features: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
  //   color: "indigo-purple",
  // },
  // {
  //   icon: "🔒",
  //   title: "Cybersecurity",
  //   description: "Comprehensive security solutions to protect your digital assets and data.",
  //   features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
  //   color: "gray-slate",
  // },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <div className="section-badge">Our Expertise</div>
          <h2 className="section-title">Comprehensive Solutions</h2>
          <p className="section-subtitle">
            From concept to deployment, we provide end-to-end solutions that drive your business forward
          </p>
        </div>

        <div className="services-showcase">
          <div className="services-tabs">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-tab ${activeService === index ? "active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="tab-icon">{service.icon}</div>
                <div className="tab-title">{service.title}</div>
              </div>
            ))}
          </div>

          <div className="service-details">
            <div className="service-content">
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].description}</p>
              <div className="service-features">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="service-visual">
              <div className={`service-graphic gradient-${services[activeService].color}`}>
                <div className="graphic-content">
                  <div className="floating-elements">
                    <div className="element element-1"></div>
                    <div className="element element-2"></div>
                    <div className="element element-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
