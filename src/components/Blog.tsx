"use client"

import "../styles/blog.css"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: AI Integration",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build web applications and user experiences.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architecture",
    excerpt: "Learn best practices for designing and implementing cloud solutions that grow with your business needs.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Alex Johnson",
    date: "Dec 12, 2024",
    category: "Cloud",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mobile-First Design Principles",
    excerpt: "Discover the key principles for creating mobile-first designs that deliver exceptional user experiences.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Mike Rodriguez",
    date: "Dec 10, 2024",
    category: "Design",
    readTime: "4 min read",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Latest Insights</div>
          <h2 className="section-title">From Our Blog</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, insights, and best practices in technology
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="blog-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Read More
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="btn btn-secondary">View All Posts</button>
        </div>
      </div>
    </section>
  )
}
