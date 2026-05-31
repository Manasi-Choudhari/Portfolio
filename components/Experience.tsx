'use client'

import FadeUp from './FadeUp'

const EXPERIENCES = [
  {
    date: '2023 – Present',
    role: 'Research Intern',
    org: 'AISSMS IOIT, Pune',
    desc: 'Published IEEE paper — "AI-Driven Data Intrusion Detection and Prevention". Also co-authored a review on advanced sensor technologies in the food industry and our design patent ai vision assisting tool for visually imapaired people. Contributed to applied AI research bridging academic rigor with real-world security systems.',
  },
  {
    date: '2023 – Present',
    role: 'Vice President',
    org: 'Catalyst — AISSMS IOIT',
    desc: 'Leading the college\'s premier tech community. Drove industry mentorships, real-world project pipelines, and cross-college collaborations in AI, ML, and emerging tech.',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 4%' }}>
      <div className="section-label">My Journey</div>
      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          marginBottom: '48px',
          lineHeight: 1.1,
        }}
      >
        Experience <span className="grad-text">&</span> Leadership
      </h2>

      <div
        style={{
          position: 'relative',
          paddingLeft: '32px',
        }}
      >
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, var(--violet), var(--pink))',
          }}
        />

        {EXPERIENCES.map((exp, i) => (
          <FadeUp key={exp.role} delay={i * 0.15}>
            <div style={{ position: 'relative', marginBottom: '48px' }}>
              {/* Dot */}
              <div
                style={{
                  position: 'absolute', left: '-38px', top: '4px',
                  width: '14px', height: '14px',
                  borderRadius: '50%', background: 'var(--violet)',
                  boxShadow: '0 0 12px var(--violet), 0 0 24px rgba(168,85,247,0.4)',
                  border: '2px solid var(--bg)',
                }}
              />
              <div style={{ fontSize: '12px', color: 'var(--violet)', letterSpacing: '0.08em', marginBottom: '6px' }}>
                {exp.date}
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>
                {exp.role}
              </div>
              <div style={{ color: 'var(--pink)', fontSize: '14px', marginBottom: '12px' }}>
                {exp.org}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.8, maxWidth: '640px' }}>
                {exp.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
