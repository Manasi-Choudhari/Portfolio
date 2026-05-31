'use client'

import FadeUp from './FadeUp'

const stats = [
  { num: '9.3', label: 'GPA / 10' },
  { num: '3', label: 'Hackathon Wins' },
  { num: '1', label: 'IEEE Paper' },
  { num: '150+', label: 'Teams Organized' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '80px 4%', background: 'var(--bg2)' }}
    >
      <div className="section-label">Who I am</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Bio */}
        <FadeUp>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            About <span className="grad-text">Me</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: 1.9 }}>
            I&apos;m{' '}
            <strong style={{ color: 'var(--white)' }}>Manasi Choudhari</strong>, a Final Year
            B.Tech Computer Engineering student at{' '}
            <strong style={{ color: 'var(--white)' }}>AISSMS IOIT, Pune</strong> — GPA 9.3/10.
            I build AI-powered systems at the intersection of machine learning, computer vision,
            and real-world impact.
            <br />
            <br />
            From winning international hackathons to publishing IEEE research, I thrive where{' '}
            <strong style={{ color: 'var(--white)' }}>code meets consequence</strong>. Currently
            exploring deep learning, explainable AI, and NLP to build systems that don&apos;t
            just compute — they understand.
          </p>
        </FadeUp>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.45)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(168,85,247,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08), transparent 70%)',
                    borderRadius: '16px', pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '36px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--violet), var(--pink))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.num}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '4px' }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
