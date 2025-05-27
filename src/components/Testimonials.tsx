"use client"

import { useState, useEffect } from "react"
import "../styles/testimonials.css"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "KoreBit transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with KoreBit was a game-changer. They delivered a scalable solution that grew with our business needs.",
    rating: 5,
  },
  {
    name: "David Brown",
    role: "Founder",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80",
    content: "The team's expertise in AI integration helped us automate our processes and increase efficiency by 300%.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "CTO",
    company: "FutureFlow",
    image: "/placeholder.svg?height=80&width=80",
    content: "Exceptional quality and professional service. KoreBit delivered our project on time and within budget.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="testimonials-showcase">
          <div className="testimonial-main">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonials[currentTestimonial].content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">
                    ⭐
                  </span>
                ))}
              </div>
              <div className="testimonial-author">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">{testimonials[currentTestimonial].name}</div>
                  <div className="author-role">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentTestimonial === index ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-header">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <div className="client-info">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-role">{testimonial.role}</div>
                </div>
              </div>
              <p className="card-content">{testimonial.content}</p>
              <div className="card-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
