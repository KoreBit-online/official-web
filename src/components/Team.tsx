"use client"

import "../styles/team.css"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with 10+ years in tech innovation",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack architect passionate about scalable solutions",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative mind crafting beautiful user experiences",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "AI Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Machine learning expert building intelligent solutions",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Team</div>
          <h2 className="section-title">Meet the Innovators</h2>
          <p className="section-subtitle">
            Talented individuals working together to create extraordinary digital experiences
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="member-image">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a key={platform} href={link} className="social-link">
                        {platform === "linkedin" && "💼"}
                        {platform === "twitter" && "🐦"}
                        {platform === "github" && "💻"}
                        {platform === "dribbble" && "🎨"}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <div className="cta-content">
            <h3>Join Our Team</h3>
            <p>We're always looking for talented individuals to join our mission</p>
            <button className="btn btn-primary">View Careers</button>
          </div>
        </div>
      </div>
    </section>
  )
}
