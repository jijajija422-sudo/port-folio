import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeMessage, setActiveMessage] = useState(0)
  const aiMessages = [
    'Designing an intelligent portfolio that stands out.',
    'Building motion-rich experiences with glassmorphism.',
    'Creating AI-enabled personal brand storytelling.',
  ]

  const portfolioData = {
    name: 'Khadija Mohamed',
    profession: 'Full Stack Developer',
    bio: 'I build immersive web experiences with code, motion, and smart design. My work blends visual contrast, AI-inspired interaction, and elegant interfaces.',
    favoriteSkill: 'React.js',
    location: 'Nairobi, KE',
    role: 'UI / Frontend Engineer',
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMessage((current) => (current + 1) % aiMessages.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [])

  const handleContactClick = () => {
    alert(
      'email: jijajija422.@gmail.com\nnumber: 0773928505\nlocation: Nairobi, Kenya'
    )
  }

  const handlePromptClick = () => {
    alert('Imagine a product landing page that feels like an AI-powered gallery for your biggest idea. Let’s build it.')
  }

  return (
    <main className="portfolio-shell">
      <div className="glow-layer"></div>
      <div className="drift-dot dot-1"></div>
      <div className="drift-dot dot-2"></div>
      <div className="drift-dot dot-3"></div>
      <section className="hero-panel">
        <div className="hero-panel__card">
          <span className="hero-badge">AI-Powered Portfolio</span>
          <div className="hero-portrait">
            <div className="portrait-ring"></div>
            <div className="portrait-face"></div>
          </div>
          <div className="hero-copy">
            <p className="title-label">Hi, I’m</p>
            <h1>{portfolioData.name}</h1>
            <p className="subtitle">{portfolioData.profession}</p>
            <p className="bio">{portfolioData.bio}</p>
          </div>
          <div className="hero-meta">
            <div>
              <span>Favorite Skill</span>
              <strong>{portfolioData.favoriteSkill}</strong>
            </div>
            <div>
              <span>Current role</span>
              <strong>{portfolioData.role}</strong>
            </div>
          </div>
          <div className="hero-actions">
            <button className="primary-btn" onClick={handleContactClick}>
              Contact Me
            </button>
            <button className="secondary-btn" onClick={handlePromptClick}>
              AI Idea Prompt
            </button>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card side-card--ai">
            <span className="side-label">AI Co-Pilot</span>
            <p>{aiMessages[activeMessage]}</p>
            <div className="ai-chip">Realtime suggestion</div>
          </div>
          <div className="side-card side-card--spark">
            <span className="side-label">Visual Spark</span>
            <ul>
              <li>Neon gradients with depth</li>
              <li>Glass layers and blur</li>
              <li>Motion that feels fluid</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default App
