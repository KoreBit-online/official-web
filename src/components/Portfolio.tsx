"use client"

import { useState } from "react"
import "../styles/portfolio.css"
import GBC from "../images/gbc.jpeg";
import Hewa from "../images/hewa.png";

const projects = [
  {
    id: 1,
    title: "Green Beat Ceylon",
    category: "Marketing Website",
    image: GBC,
    description: "Modern Marketing website for Green Beat Ceylon",
    link: "https://www.greenbeatceylon.com/",
  },
  {
    id: 2,
    title: "Car Dealership Management System",
    category: "Management System",
    image: Hewa,
    description: "Car dealership management system for Hewa Motors. keep track of inventory, sales, and customer data all in one place.",
    link: "https://hewa-dealership.vercel.app/",
  }
]

const categories = ["All", "Marketing Website", "Management System"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const filterProjects = (category: string) => {
    setActiveCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-badge">Our Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Discover our latest projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid-wrapper">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="portfolio-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button className="action-btn">👁️</button>
                      <button className="action-btn">🔗</button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn btn-secondary btn-sm project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-block', marginTop: '1rem' }}
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
