'use client'

import FadeUp from './FadeUp'

const PROJECTS = [
  /* ── Existing Projects ── */
  {
    icon: '🤖',
    name: 'BugChan',
    subtitle: 'LLM-based Debugging Assistant',
    desc: 'AI layer using LLMs + contextual code analysis for automated bug resolution. Builds conversational AI workflows to analyze repositories and generate intelligent debugging suggestions.',
    features: ['LLM-powered bug detection', 'Repository code analysis', 'Conversational AI workflows', 'Intelligent fix suggestions'],
    tech: ['Python', 'LLMs', 'NLP', 'AI Workflows'],
    tags: ['LLM', 'NLP', 'Python', 'AI Workflows'],
    github: 'https://github.com/swarooppatilx/bug-chan',
    demo: '#',
    accentFrom: 'rgba(168,85,247,0.08)',
    accentTo: 'rgba(236,72,153,0.06)',
  },
  {
    icon: '📈',
    name: 'Pragyantra',
    subtitle: 'AI Financial Decision Simulator',
    desc: '🏆 Hackathon Winner — Monte Carlo simulations + LLM-based reasoning for investment risk analysis. End-to-end AI pipeline for predictive insights and financial decision support.',
    features: ['Monte Carlo risk simulation', 'LLM investment reasoning', 'Predictive portfolio insights', 'End-to-end AI pipeline'],
    tech: ['Python', 'LLMs', 'Monte Carlo', 'Predictive ML'],
    tags: ['Monte Carlo', 'LLM', 'FinTech', 'Predictive ML'],
    github: 'https://github.com/Manasi-Choudhari/ai-financial-decision-simulation',
    demo: '#',
    accentFrom: 'rgba(236,72,153,0.08)',
    accentTo: 'rgba(168,85,247,0.06)',
  },
  {
    icon: '👁️',
    name: 'AI Assistive Tool',
    subtitle: 'Blind Navigation System',
    desc: 'Computer vision + object detection + audio navigation for real-time navigation. IoT + voice-based hands-free accessibility solution for visually impaired users. Design patent filed.',
    features: ['YOLOv8 object detection', 'Real-time audio navigation', 'IoT hardware integration', 'Voice-based interaction'],
    tech: ['YOLOv8', 'OpenCV', 'Python', 'IoT'],
    tags: ['YOLOv8', 'OpenCV', 'IoT', 'Accessibility'],
    github: '#',
    demo: 'https://www.linkedin.com/posts/manasi-choudhari-887b1428a_ai-iot-embeddedsystems-activity-7463908792716460032-xvuB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEZJ1OcBcGtjmhE5fKwFYPRNgXUEulpvXu4',
    accentFrom: 'rgba(59,130,246,0.08)',
    accentTo: 'rgba(168,85,247,0.06)',
  },
  {
    icon: '🚑',
    name: 'Emergency Traffic System',
    subtitle: 'AI-Powered Response Corridors',
    desc: '🏆 Hackathon Winner — AI detection of ambulance sirens, accidents & SOS signals with automated green corridors. Hardware integration + embedded systems for life-critical response.',
    features: ['Siren & accident detection', 'Automated green corridors', 'SOS signal recognition', 'Embedded hardware integration'],
    tech: ['Computer Vision', 'OpenCV', 'Embedded', 'IoT'],
    tags: ['Computer Vision', 'Embedded', 'IoT', 'Real-time AI'],
    github: '#',
    demo: '#',
    accentFrom: 'rgba(239,68,68,0.08)',
    accentTo: 'rgba(236,72,153,0.06)',
  },

  /* ── New Projects ── */
  {
    icon: '🏛️',
    name: 'CivicConnect',
    subtitle: 'AI-Powered Citizen Grievance Platform',
    desc: 'AI-powered citizen grievance management platform that enables users to instantly register civic complaints, receive a unique tracking ID, monitor status in real time, and automatically route issues to the correct government department via LLM-based classification.',
    features: [
      'AI complaint classification',
      'Auto department routing',
      'Unique tracking ID system',
      'Real-time status dashboard',
      'Multilingual NLP support',
      'Government workflow automation',
    ],
    tech: ['Next.js', 'Flask', 'Python', 'LLMs', 'PostgreSQL', 'Multilingual NLP'],
    tags: ['AI', 'Civic Tech', 'NLP', 'LLM', 'Automation'],
    github: 'https://github.com/Suhasi123/CivicConnect',
    demo: '#',
    accentFrom: 'rgba(34,197,94,0.08)',
    accentTo: 'rgba(59,130,246,0.06)',
  },
  {
    icon: '🤟',
    name: 'SignSpeak AI',
    subtitle: 'Sign Language ↔ Speech/Text Bridge',
    desc: 'Accessibility-focused communication platform that translates sign language into text and speech, and converts text or speech into sign language animations using a BiLSTM-based recognition model with an interactive 3D avatar.',
    features: [
      'Real-time sign language recognition',
      'Text-to-sign conversion',
      'Speech-to-sign animation',
      'Interactive 3D avatar',
      'Gesture tracking pipeline',
      'Low-latency communication',
    ],
    tech: ['TensorFlow', 'BiLSTM', 'MediaPipe', 'OpenCV', 'Three.js', 'React'],
    tags: ['Accessibility', 'Computer Vision', 'Deep Learning', 'AI'],
    github: 'https://github.com/Suhasi123/SignSpeak',
    demo: '#',
    accentFrom: 'rgba(168,85,247,0.10)',
    accentTo: 'rgba(59,130,246,0.08)',
  },
  {
    icon: '🛡️',
    name: 'CrowdGuard AI',
    subtitle: 'Intelligent Surveillance & Safety Platform',
    desc: 'Intelligent surveillance platform for smart cities and residential societies. Detects fights, violent activities, and suspicious behavior in real time using YOLO-based deep learning, triggering instant alerts and preventive actions.',
    features: [
      'Real-time violence detection',
      'Fight recognition system',
      'Instant alert generation',
      'Smart surveillance dashboard',
      'Society security monitoring',
      'Live video stream analysis',
    ],
    tech: ['YOLO', 'OpenCV', 'Deep Learning', 'Flask', 'Python', 'WebSockets'],
    tags: ['Computer Vision', 'Smart City', 'Security AI', 'Real-Time'],
    github: 'https://github.com/SAINATH537/CrowdGuard-AI',
    demo: '#',
    accentFrom: 'rgba(239,68,68,0.10)',
    accentTo: 'rgba(168,85,247,0.06)',
  },
]

/* ── Icon components ── */
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 4%', background: 'var(--bg2)' }}>
      <div className="section-label">What I&apos;ve built</div>
      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          marginBottom: '12px',
          lineHeight: 1.1,
        }}
      >
        Featured <span className="grad-text">Projects</span>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '48px', maxWidth: '540px' }}>
        {PROJECTS.length} projects spanning AI, accessibility, civic tech, and real-time systems.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {PROJECTS.map((p, i) => (
          <FadeUp key={p.name} delay={i * 0.07}>
            <div
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(168,85,247,0.18), inset 0 0 0 1px rgba(168,85,247,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Accent glow — unique per project */}
              <div
                style={{
                  position: 'absolute', inset: 0, borderRadius: '20px', pointerEvents: 'none',
                  background: `radial-gradient(ellipse at 100% 0%, ${p.accentFrom}, transparent 55%), radial-gradient(ellipse at 0% 100%, ${p.accentTo}, transparent 55%)`,
                }}
              />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px', position: 'relative' }}>
                <div style={{
                  fontSize: '26px', lineHeight: 1,
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {p.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '17px', fontWeight: 700, color: 'var(--white)', marginBottom: '3px' }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--violet)', letterSpacing: '0.05em', fontWeight: 500 }}>
                    {p.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: 1.75, marginBottom: '18px', position: 'relative' }}>
                {p.desc}
              </p>

              {/* Key Features */}
              <div style={{ marginBottom: '18px', position: 'relative' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-syne)' }}>
                  Key Features
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#b8b4d0' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--violet)', flexShrink: 0, boxShadow: '0 0 6px rgba(168,85,247,0.6)' }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div style={{ marginBottom: '20px', position: 'relative' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-syne)' }}>
                  Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '11px', padding: '3px 10px', borderRadius: '100px',
                        background: 'rgba(168,85,247,0.08)', color: '#c4b5fd',
                        border: '1px solid rgba(168,85,247,0.18)',
                        fontFamily: 'var(--font-dm)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px', position: 'relative' }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '10px', padding: '3px 9px', borderRadius: '100px',
                      background: 'rgba(236,72,153,0.07)', color: 'var(--pink)',
                      border: '1px solid rgba(236,72,153,0.18)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Spacer pushes footer to bottom */}
              <div style={{ flex: 1 }} />

              {/* Action footer — GitHub only */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(168,85,247,0.10)', position: 'relative' }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none',
                    padding: '7px 14px', borderRadius: '9px',
                    border: '1px solid rgba(255,255,255,0.09)',
                    background: 'rgba(255,255,255,0.03)',
                    transition: 'all 0.2s',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.40)'
                    e.currentTarget.style.color = '#d8b4fe'
                    e.currentTarget.style.background = 'rgba(168,85,247,0.09)'
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(168,85,247,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <GithubIcon /> View on GitHub
                </a>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
