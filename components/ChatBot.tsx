'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── KNOWLEDGE BASE ────────────────────────────────────────────────────────────
const KB: { patterns: RegExp[]; answer: string }[] = [
  // Greetings
  {
    patterns: [/^(hi|hello|hey|yo|sup|howdy|hola|good (morning|evening|afternoon))/i],
    answer: "Hey there! 👋 I'm **ARIA** — Manasi's personal AI assistant. I can tell you all about Manasi's background, projects, skills, achievements, and how to get in touch. What would you like to know?",
  },
  // Who are you / bot identity
  {
    patterns: [/who are you|what are you|your name|about (you|yourself)/i],
    answer: "I'm **ARIA** (Adaptive Resume Intelligence Assistant) — built for Manasi Choudhari's portfolio. I can answer questions about Manasi's background, skills, projects, experience, achievements, and contact info. Try asking me something! 😊",
  },
  // Who is Manasi
  {
    patterns: [/who is manasi|about manasi|tell me about (her|manasi)/i],
    answer: "**Manasi Choudhari** is a Final Year B.Tech Computer Engineering student at **AISSMS IOIT, Pune** with a stellar GPA of **9.3/10**.\n\nShe builds AI-powered systems at the intersection of machine learning, computer vision, and real-world impact. She's a hackathon winner 🏆, IEEE published author 📄, and VP of her college's premier tech community. She's currently exploring deep learning, explainable AI, and NLP.",
  },
  // Education
  {
    patterns: [/education|college|university|degree|btech|b\.tech|gpa|cgpa|academic|study|studying|student/i],
    answer: "🎓 **Education**\n\n**B.Tech in Computer Engineering**\nAISSMS IOIT, Pune\nGPA: **9.3 / 10**\nFinal Year student\n\nHer academic focus spans AI, machine learning, computer vision, and embedded systems.",
  },
  // Skills / tech stack
  {
    patterns: [/skill|tech stack|languages|framework|tool|platform|database|programming|know|expertise|technologies/i],
    answer: "💻 **Tech Stack**\n\n**Languages:** C, C++, Python, Java\n\n**AI / ML:** Machine Learning, Deep Learning, Computer Vision, NLP, Explainable AI, YOLOv8, Neural Networks, Predictive Modeling\n\n**Frameworks:** TensorFlow, PyTorch, Scikit-learn, OpenCV, Node.js\n\n**Tools:** GitHub, Linux (Ubuntu), RoboFlow, Kaggle\n\n**Databases:** MySQL, MongoDB, SQLite",
  },
  // Projects — BugChan
  {
    patterns: [/bugchan|bug.*chan|debugging assistant|llm.*debug/i],
    answer: "🤖 **BugChan** — LLM-based Debugging Assistant\n\nAn AI layer using LLMs + contextual code analysis for automated bug resolution. It builds conversational AI workflows to analyze repositories and generate intelligent debugging suggestions.\n\n**Tags:** LLM · NLP · Python · AI Workflows",
  },
  // Projects — Pragyantra
  {
    patterns: [/pragyantra|financial|fintech|monte carlo|investment/i],
    answer: "📈 **Pragyantra** — AI Financial Decision Simulator 🏆\n\nHackathon Winner — Uses Monte Carlo simulations + LLM-based reasoning for investment risk analysis. End-to-end AI pipeline for predictive insights and financial decision support.\n\n**Won:** First Prize ₹20,000 — FinTech Category, Pragyantra Hackathon\n**Tags:** Monte Carlo · LLM · FinTech · Predictive ML",
  },
  // Projects — AI Assistive Tool
  {
    patterns: [/assistive|blind|visually impaired|navigation.*ai|ai.*navigation|accessibility|yolo/i],
    answer: "👁️ **AI Assistive Tool** — Blind Navigation System\n\nComputer vision + YOLOv8 object detection + audio navigation for real-time navigation assistance. IoT + voice-based hands-free accessibility solution for visually impaired users.\n\nAlso filed as a **design patent**! 🏅\n**Tags:** YOLOv8 · OpenCV · IoT · Accessibility",
  },
  // Projects — Emergency Traffic
  {
    patterns: [/emergency|ambulance|traffic|siren|accident|sos|corridor/i],
    answer: "🚑 **Emergency Traffic System** — AI-Powered Response Corridors 🏆\n\nHackathon Winner — AI detection of ambulance sirens, accidents & SOS signals with automated green corridors. Features hardware integration + embedded systems.\n\n**Won:** Best Solution, National Techathon 3.0 (₹10,000 prize)\n**Tags:** Computer Vision · Embedded · IoT · Real-time AI",
  },
  // Projects — CivicConnect
  {
    patterns: [/civicconnect|civic.*connect|grievance|citizen|complaint|municipal|government.*platform/i],
    answer: "🏛️ **CivicConnect** — AI-Powered Citizen Grievance Platform\n\nEnables citizens to register complaints, get a unique tracking ID, monitor status in real time, and auto-route issues to the correct government department via LLM-based classification.\n\n**Features:** AI complaint classification · Auto department routing · Multilingual NLP · Real-time dashboard · Government workflow automation\n**Tech:** Next.js · Flask · Python · LLMs · PostgreSQL · REST APIs",
  },
  // Projects — SignSpeak AI
  {
    patterns: [/signspeak|sign.*speak|sign language|bilstm|gesture.*translat|speech.*sign|text.*sign/i],
    answer: "🤟 **SignSpeak AI** — Sign Language ↔ Speech/Text Bridge\n\nAccessibility-focused platform that translates sign language into text & speech, and converts text or speech into sign language animations using a BiLSTM model with an interactive 3D avatar.\n\n**Features:** Real-time recognition · Text-to-sign · Speech-to-sign · 3D avatar · Gesture tracking · Low-latency pipeline\n**Tech:** TensorFlow · BiLSTM · MediaPipe · OpenCV · Three.js · React",
  },
  // Projects — CrowdGuard AI
  {
    patterns: [/crowdguard|crowd.*guard|surveillance|violence detect|fight detect|smart city.*safe|security.*platform/i],
    answer: "🛡️ **CrowdGuard AI** — Intelligent Surveillance & Safety Platform\n\nSmart city platform that detects fights, violent activities, and suspicious behavior in real time using YOLO-based deep learning, triggering instant alerts.\n\n**Features:** Real-time violence detection · Fight recognition · Instant alerts · Smart dashboard · Society monitoring · Live stream analysis\n**Tech:** YOLO · OpenCV · Deep Learning · Flask · Python · WebSockets",
  },
  // All projects
  {
    patterns: [/project|built|work|portfolio|what.*made|what.*created/i],
    answer: "🚀 **Manasi's 7 Featured Projects**\n\n1. 🤖 **BugChan** — LLM Debugging Assistant\n2. 📈 **Pragyantra** — AI Financial Simulator *(Hackathon Winner)*\n3. 👁️ **AI Assistive Tool** — Blind Navigation *(Design Patent Filed)*\n4. 🚑 **Emergency Traffic System** — AI Corridors *(Hackathon Winner)*\n5. 🏛️ **CivicConnect** — Citizen Grievance AI Platform\n6. 🤟 **SignSpeak AI** — Sign Language Bridge\n7. 🛡️ **CrowdGuard AI** — Surveillance & Safety Platform\n\nWant details on any specific project? Just ask!",
  },
  // Experience — Research
  {
    patterns: [/research|intern|ieee|paper|publish|intrusion|detection|sensor|patent/i],
    answer: "🔬 **Research Intern** @ AISSMS IOIT, Pune *(2023–Present)*\n\n• Published IEEE paper: *\"AI-Driven Data Intrusion Detection and Prevention\"*\n• Co-authored review on advanced sensor technologies in the food industry\n• Filed design patent for AI Vision Assisting Tool for visually impaired\n• Bridging academic rigor with real-world security systems",
  },
  // Experience — Leadership
  {
    patterns: [/vice president|vp|catalyst|leadership|community|hackathon.*organiz|organiz.*hackathon|tenet/i],
    answer: "👑 **Vice President** @ Catalyst — AISSMS IOIT *(2023–Present)*\n\nLeading the college's premier tech community:\n• Organized **TENET HACK** — national-level 12-hour hackathon with **150+ teams**\n• Driving industry mentorships and real-world project pipelines\n• Cross-college collaborations in AI, ML, and emerging tech",
  },
  // Achievements / Awards
  {
    patterns: [/achiev|award|win|hackathon|prize|medal|recognition|honor/i],
    answer: "🏆 **Achievements & Awards**\n\n🏆 **Winner** — BlackScout Category, ETH Online International Hackathon *(1000 USDC)*\n🏆 **Winner** — Best Solution, National Techathon 3.0 *(₹10,000)*\n🥇 **First Prize** — FinTech Category, Pragyantra Hackathon *(₹20,000)*\n📄 **Published IEEE Research Paper** — peer-reviewed & indexed\n🎯 **Organized TENET HACK** — 150+ teams, national level",
  },
  // IEEE paper
  {
    patterns: [/ieee|paper|research paper|published|intrusion detection/i],
    answer: "📄 **IEEE Publication**\n\nManasi authored: *\"AI-Driven Data Intrusion Detection and Prevention\"* — peer-reviewed and indexed in IEEE.\n\nShe also co-authored a review on advanced sensor technologies in the food industry. This work demonstrates her ability to bridge academic research with real-world security applications.",
  },
  // Contact — email
  {
    patterns: [/email|mail|gmail|reach.*mail|contact.*email/i],
    answer: "📧 **Email Manasi:**\n[choudharimanasi01@gmail.com](mailto:choudharimanasi01@gmail.com)\n\nShe's open to research collaborations, internships, and building things that matter!",
  },
  // Contact — phone
  {
    patterns: [/phone|call|number|mobile|whatsapp/i],
    answer: "📞 **Phone / WhatsApp:**\n+91 77418 83030\n\nFeel free to reach out for collaborations or opportunities!",
  },
  // Contact — LinkedIn
  {
    patterns: [/linkedin|professional.*network|connect.*linkedin/i],
    answer: "💼 **LinkedIn:**\n[linkedin.com/in/manasi-choudhari-887b1428a](https://www.linkedin.com/in/manasi-choudhari-887b1428a/)\n\nGreat place to connect professionally!",
  },
  // Contact — GitHub
  {
    patterns: [/github|code|repository|repo|open source/i],
    answer: "💻 **GitHub:**\n[github.com/Manasi-Choudhari](https://github.com/Manasi-Choudhari)\n\nCheck out her repositories and open-source work!",
  },
  // All contact options
  {
    patterns: [/contact|hire|reach|get in touch|connect|collaboration|collab|opportunity|opportunit/i],
    answer: "📬 **Get in Touch with Manasi**\n\n📧 **Email:** choudharimanasi01@gmail.com\n📞 **Phone:** +91 77418 83030\n💼 **LinkedIn:** [linkedin.com/in/manasi-choudhari-887b1428a](https://www.linkedin.com/in/manasi-choudhari-887b1428a/)\n💻 **GitHub:** [github.com/Manasi-Choudhari](https://github.com/Manasi-Choudhari)\n\nShe's open to research, internships, and collaborations! 🚀",
  },
  // Resume
  {
    patterns: [/resume|cv|curriculum vitae|download/i],
    answer: "📄 **Download Manasi's Resume**\n\nYou can download her full CV directly from the portfolio:\n👉 Click the **\"Download Resume\"** button on the homepage!\n\nOr scroll up and it's right there in the hero section.",
  },
  // Location
  {
    patterns: [/location|city|where|pune|india|based/i],
    answer: "📍 **Location:** Pune, Maharashtra, India 🇮🇳\n\nManasi is currently studying and working in Pune, actively participating in the tech ecosystem through hackathons, research, and community leadership.",
  },
  // Availability / hiring
  {
    patterns: [/available|availab|hiring|internship|job|looking for|open to/i],
    answer: "✅ **Currently Available for Opportunities!**\n\nManasi is open to:\n• 🔬 Research collaborations\n• 💼 Internships (AI/ML focus)\n• 🚀 Building impactful projects\n• 🤝 Industry mentorships\n\nReach her at: choudharimanasi01@gmail.com",
  },
  // Stats / numbers
  {
    patterns: [/stats|numbers|gpa|how many|how much|9\.3/i],
    answer: "📊 **Manasi by the Numbers**\n\n🎓 **9.3 / 10** — GPA\n🏆 **3** — Hackathon wins\n📄 **1** — IEEE published paper\n🎯 **150+** — Teams organized at TENET HACK",
  },
  // What she's working on / current focus
  {
    patterns: [/current|working on|focus|now|lately|these days|future|goal/i],
    answer: "🔭 **Currently Exploring:**\n\n• Deep Learning architectures\n• Explainable AI (XAI)\n• Natural Language Processing\n• AI systems that don't just compute — they *understand*\n\nShe's on a mission to build AI that sees, thinks, and acts with real-world impact! 🧠",
  },
  // Fun / personality
  {
    patterns: [/fun fact|hobby|interest|passion|outside|free time|personal/i],
    answer: "✨ **About Manasi's Drive**\n\nShe thrives where **code meets consequence** — whether that's winning hackathons, organizing 150-team events, or publishing research that bridges academia with industry.\n\nHer passion? Building AI systems that make a *real* difference — from helping the visually impaired to securing digital infrastructure. 💜",
  },
  // Goodbye
  {
    patterns: [/bye|goodbye|see you|later|take care|thanks|thank you|thx|ty/i],
    answer: "Thanks for chatting! 💜 Feel free to come back anytime — I'm always here to help. Good luck, and don't forget to connect with Manasi! 👋",
  },
]

// Suggested quick questions
const SUGGESTIONS = [
  "Who is Manasi?",
  "Show me her projects",
  "What are her skills?",
  "How to contact her?",
  "Her achievements 🏆",
  "Is she available to hire?",
]

function getAnswer(input: string): string {
  const trimmed = input.trim()
  for (const entry of KB) {
    if (entry.patterns.some(p => p.test(trimmed))) {
      return entry.answer
    }
  }
  return "Hmm, I'm not sure about that! 🤔 I can help with questions about Manasi's **background, skills, projects, experience, achievements, or contact info**. Try one of the suggested questions below, or ask me something like \"What projects has she built?\" or \"How do I contact Manasi?\""
}

// Simple markdown renderer for bold & links
function renderMarkdown(text: string) {
  const lines = text.split('\n')
  return lines.map((line, li) => {
    // Replace **bold**
    const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
    const rendered = parts.map((part, pi) => {
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        return <strong key={pi} style={{ color: '#e9d5ff', fontWeight: 700 }}>{part.slice(2, -2)}</strong>
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (linkMatch) {
        return (
          <a key={pi} href={linkMatch[2]} target="_blank" rel="noopener noreferrer"
            style={{ color: '#a855f7', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            {linkMatch[1]}
          </a>
        )
      }
      return <span key={pi}>{part}</span>
    })
    return <span key={li}>{rendered}{li < lines.length - 1 && <br />}</span>
  })
}

type Msg = { role: 'user' | 'bot'; text: string; id: number }

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: 0,
      role: 'bot',
      text: "Hi! I'm **ARIA**, Manasi's personal AI assistant. 👋\n\nAsk me anything about Manasi — her skills, projects, experience, or how to get in touch. How can I help you today?",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const idRef = useRef(1)

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
      setUnread(0)
    }
  }, [open])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: Msg = { id: idRef.current++, role: 'user', text: text.trim() }
    setMsgs(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botMsg: Msg = { id: idRef.current++, role: 'bot', text: getAnswer(text) }
      setMsgs(prev => [...prev, botMsg])
      setTyping(false)
      if (!open) setUnread(n => n + 1)
    }, 650 + Math.random() * 400)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* ── FLOATING TOGGLE BUTTON ── */}
      <motion.button
        id="chat-toggle"
        className={`chat-fab${open ? ' chat-fab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.span>
          ) : (
            <motion.span key="chat"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="9" cy="10" r="1" fill="currentColor" />
                <circle cx="12" cy="10" r="1" fill="currentColor" />
                <circle cx="15" cy="10" r="1" fill="currentColor" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        {unread > 0 && !open && (
          <span className="chat-fab__badge">{unread}</span>
        )}

        {/* Pulse ring */}
        {!open && <span className="chat-fab__pulse" />}
      </motion.button>

      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header__avatar">
                <span>A</span>
                <span className="chat-header__status" />
              </div>
              <div className="chat-header__info">
                <div className="chat-header__name">ARIA</div>
                <div className="chat-header__sub">Manasi's Personal Assistant · Always online</div>
              </div>
              <button className="chat-header__close" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="chat-body">
              {msgs.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`chat-msg chat-msg--${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  {msg.role === 'bot' && (
                    <div className="chat-msg__avatar">A</div>
                  )}
                  <div className="chat-msg__bubble">
                    {renderMarkdown(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div className="chat-msg chat-msg--bot"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="chat-msg__avatar">A</div>
                  <div className="chat-msg__bubble chat-msg__bubble--typing">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="chat-suggestions">
              {SUGGESTIONS.map(s => (
                <button key={s} className="chat-suggestion" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form className="chat-input-row" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me about Manasi…"
                autoComplete="off"
              />
              <button
                className="chat-send"
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
