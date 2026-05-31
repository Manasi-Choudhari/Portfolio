'use client'

import FadeUp from './FadeUp'

const SKILL_GROUPS = [
  {
    title: 'Languages',
    chips: ['C', 'C++', 'Python', 'Java'],
  },
  {
    title: 'AI / ML',
    chips: [
      'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
      'Explainable AI (XAI)', 'Neural Networks', 'YOLOv8',
      'Model Optimization', 'Predictive Modeling',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    chips: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Node.js', 'HTML/CSS'],
  },
  {
    title: 'Tools & Platforms',
    chips: ['GitHub', 'Linux (Ubuntu)', 'RoboFlow', 'Kaggle'],
  },
  {
    title: 'Databases',
    chips: ['MySQL', 'MongoDB', 'SQLite'],
  },
]

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: '7px 16px',
        borderRadius: '100px',
        fontSize: '13px',
        border: '1px solid var(--border)',
        color: 'var(--muted)',
        background: 'var(--card)',
        transition: 'all 0.2s',
        cursor: 'default',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--violet)'
        e.currentTarget.style.color = 'var(--violet)'
        e.currentTarget.style.background = 'rgba(168,85,247,0.08)'
        e.currentTarget.style.boxShadow = '0 0 16px rgba(168,85,247,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--muted)'
        e.currentTarget.style.background = 'var(--card)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 4%' }}>
      <div className="section-label">Capabilities</div>
      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          marginBottom: '48px',
          lineHeight: 1.1,
        }}
      >
        Tech <span className="grad-text">Stack</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {SKILL_GROUPS.map((group, gi) => (
          <FadeUp key={group.title} delay={gi * 0.08}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                marginBottom: '14px',
                fontFamily: 'var(--font-syne)',
              }}
            >
              {group.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.chips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
