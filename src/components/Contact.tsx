"use client"

import type React from "react"

import { useState } from "react"
import "../styles/contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>korebit@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <p>+94 703911990</p>

              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  {/* <option value="mobile-apps">Mobile Apps</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="cybersecurity">Cybersecurity</option> */}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, and requirements..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg submit">
              <span>Send Message</span>
              <div className="btn-glow"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
