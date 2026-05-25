import { useState, useEffect } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'
import opusEduChallenge from '../assets/opus-edu-challenge.jpg'
import opusEduIntro from '../assets/opus-edu-intro.jpg'
import opusEduRole from '../assets/opus-edu-role.jpg'
import opusEduDecisions from '../assets/opus-edu-decisions.jpg'
import opusEduProblem from '../assets/opus-edu-problem.jpg'
import opusEduSolution from '../assets/opus-edu-solution.jpg'
import opusEduProcessSs from '../assets/opus-edu-process-ss.png'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/242219669/Opus-Educational-Platform' },
]

export default function ProjectDetailPage({ dark, onBack, onHome, onToggle, project = 'Opus Edu' }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${project} — Vasil Spirov` }, [project])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Geist, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onHome || onBack}
        crumbs={[{ label: 'Projects', onClick: onBack }, { label: project }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="page-enter" style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Introduction' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduIntro} alt="OpusEdu intro" loading="lazy" style={photoImg} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h1 style={{ margin: 0, ...heading, color: textPrimary }}>OpusEdu</h1>
                  <a href="https://opusedu.io/" target="_blank" rel="noopener noreferrer" style={{ ...bodyText, color: '#005AFF', textDecoration: 'underline' }}>
                    https://opusedu.io/
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', ...bodyText, color: textPrimary }}>
                  <p style={{ margin: 0 }}>Role: Senior UX Designer · End-to-End Product Design</p>
                  <p style={{ margin: 0 }}>OpusEdu is a scalable learning platform where instructors create and publish courses, learners discover and purchase them, and blockchain-verified certificates serve as tamper-proof proof of completion.</p>
                  <p style={{ margin: 0 }}>The platform serves three distinct user types — admins, content creators, and learners — each with fundamentally different goals, mental models, and levels of technical fluency.</p>
                  <p style={{ margin: 0 }}>The engagement required designing a cohesive product from the ground up: information architecture, interaction patterns, a shared component library, and high-fidelity screens across six core user journeys — with no prior design system and a technically novel domain that offered no established UX conventions to reference.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Challenge' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduChallenge} alt={`${project} challenge`} loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Designing a multi-stakeholder platform where complexity is the product.</p>
                  <p style={{ margin: 0 }}>A single product had to serve three user types with opposing needs:</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Admins - oversight, control, and trust signals across all content and users</li>
                    <li>Content Creators - a guided but flexible multi-step creation flow with real-time feedback and draft persistence</li>
                    <li>Learners - clarity and confidence at every step, especially when encountering unfamiliar interaction patterns for the first time</li>
                  </ul>
                  <p style={{ margin: 0 }}>The platform covered seven interconnected use cases: course creation, video content upload, test configuration, certificate issuance, user onboarding, course discovery and purchase, and content moderation - with no pre-existing design system to build from.</p>
                  <p style={{ margin: 0 }}>The risk was a product that felt fragmented, technically intimidating, or cognitively overwhelming at exactly the moments users needed to feel most confident.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduProblem} alt="Problem" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>The hardest problem wasn't the interface. It was reducing invisible friction.</p>
                  <p style={{ margin: 0 }}>The platform's Web3 foundation introduced a class of UX problems that conventional design patterns do not solve. Users were required to create and secure a crypto wallet, manage seed phrases - a concept foreign to the majority of mainstream users - and complete purchases via blockchain transactions with variable fees, unpredictable confirmation times, and price volatility. The result was a steep learning curve that drove drop-off before any product value was experienced.</p>
                  <p style={{ margin: 0 }}>The parallel challenge on the creator side was structural: instructors needed a multi-step course creation flow guided enough for first-time publishers but flexible enough for power users managing large catalogues.</p>
                  <p style={{ margin: 0 }}>Both problems were versions of the same root issue - users encountering system complexity at exactly the moment they needed to feel in control. The design had to absorb that complexity so users did not have to.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'My Role' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduRole} alt="My role" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My role</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Lead UX Designer — Full ownership from discovery through delivery and handoff QA.</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Stakeholder interviews and user group sessions to define objectives, goals, and constraints</li>
                    <li>Competitive benchmarking across six platforms</li>
                    <li>Information architecture and user flow mapping for all three user types</li>
                    <li>Low-fidelity and mid-fidelity wireframes</li>
                    <li>Interactive Figma prototype for stakeholder validation</li>
                    <li>Two rounds of moderated usability testing</li>
                    <li>Component library and design tokens</li>
                    <li>High-fidelity UI delivery across all core flows</li>
                    <li>Design QA and specification support during developer handoff</li>
                  </ul>
                  <p style={{ margin: 0 }}>Tools: Figma · FigJam · Maze · Notion</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Process' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduProcessSs} alt="Research summary" loading="lazy" style={photoImg} />
              </div>
              <a
                href="https://drive.google.com/drive/u/0/folders/1vKvEhL1Vl1Po8A_k6sdKo8XCUQq6VtgE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...heading, color: '#005AFF', textDecoration: 'none' }}
              >
                Research Data
                <SquareArrowOutUpRight size={18} strokeWidth={1.75} />
              </a>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li>Establishing an Initial Action Plan — Rather than designing top-to-bottom by product scope, I mapped user journeys against pain severity and business impact. This prioritisation directed early effort toward the highest-risk flows rather than the most visible pages.</li>
                  <li>Discovery Stakeholder interviews surfaced competing priorities between business goals and user needs. User group sessions with prospective learners and instructors revealed a consistent pattern: both groups were willing to engage with unfamiliar interaction models — but only if the path felt guided rather than technical.</li>
                  <li>Competitive Analysis Benchmarked against both conventional (Udemy, Teachable, Coursera) and Web3-native (Rabbithole, Mirror) platforms to identify gaps in onboarding clarity, content creation flow, and certificate management.</li>
                  <li>Information Architecture Mapped the full IA for all three user types before any UI work began. This step surfaced flow conflicts between creator and learner journeys that would have been expensive to resolve at prototype stage.</li>
                  <li>Wireframes and Prototype — Maintained low fidelity longer than stakeholders were comfortable with. Pressure to move to visual design came early. Holding at lo-fi through two additional structural feedback rounds prevented significant rework and kept the team focused on behaviour, not appearance.</li>
                  <li>Usability Testing Two rounds: the first with a wireframe prototype targeting structural comprehension, the second with the high-fidelity prototype targeting confidence and error recovery at the highest-risk interactions - wallet connection, course creation step three, and certificate issuance.</li>
                  <li>Dev Collaboration and QA Weekly design critique sessions with engineers were introduced mid-project. In four sessions, technically complex interactions were identified before they reached the spec stage. This became a standing practice for the remainder of the engagement and removed the most common source of late-stage rework.</li>
                </ol>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduDecisions} alt="Key decisions" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Start from the most painful page, not the most visible one. The client prioritised the homepage.</p>
                  <p style={{ margin: 0 }}>Discovery data showed that competing platforms lost the majority of new users during onboarding - before a single course was browsed. I redirected the initial effort to the onboarding and wallet connection flow, establishing trust and cognitive confidence before any monetisation touchpoint. This reframe required explicit stakeholder alignment and held through testing.</p>
                  <p style={{ margin: 0 }}>Design for the least technical user, not the median. Web3 literacy varies widely across the target audience. Rather than designing toward an assumed average, I designed the wallet connection and payment flows for a user encountering these concepts for the first time - progressive disclosure, contextual guidance, and explicit confirmation at every blockchain interaction. Experienced users lose nothing; inexperienced users gain confidence at the moments that matter most.</p>
                  <p style={{ margin: 0 }}>One design system, three contexts. Rather than building separate component sets per user type, I built a shared library with role-specific variants. This enforced visual consistency across the admin, creator, and learner surfaces while reducing design debt and simplifying developer implementation. The component library was documented and handed over as a deliverable for future product iterations.</p>
                  <p style={{ margin: 0 }}>Treat certificate issuance as a content lifecycle, not a feature. Certificate issuance could have been a one-click action. Instead, it was designed as a full workflow: template creation, custom branding, field mapping, preview, and issuance - with an explicit status model (draft / issued / revoked). This prevented edge-case failures at scale that the client had not yet anticipated and created a foundation for the certificate management system to evolve independently of the course creation flow.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <div style={photoCard(dark)}>
                <img src={opusEduSolution} alt="Solution" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Onboarding · Course Creation · Certificate Management · Marketing</p>
                  <p style={{ margin: 0 }}>The final solution was a component-driven product covering six core user journeys across three user types, built on a shared design system.</p>
                  <p style={{ margin: 0 }}>Guided Onboarding - Progressive wallet connection flow with a fallback path for users without an existing wallet, a personalisation step before any monetisation touchpoint, and contextual guidance surfaced at every friction-prone interaction.</p>
                  <p style={{ margin: 0 }}>Multi-Step Course Creation<br />Five-stage wizard (1. Main Information - 2. Thumbnails and Preview - 3. Pricing and Token Settings - 4. Create Certificate - 5. Custom Creation) with persistent draft-saving, inline validation, and progress state visible at all times.</p>
                  <p style={{ margin: 0 }}>Certificate Template Builder<br />Drag-and-place field mapping with background customisation, preview mode, font controls, and one-click issuance. Role-based access controls distinct creator and admin capabilities within the same interface.</p>
                  <p style={{ margin: 0 }}>Course Discovery and Moderation<br />Filterable, sortable grid with an approval workflow for admins surfaced as a contextual overlay on the learner browse experience - same component, different permission layer.</p>
                  <p style={{ margin: 0 }}>Marketing and Content Pages - Content-driven landing page and blog architecture aligned to acquisition and SEO goals, built from the same component library as the product.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <>
              <div style={photoCard(dark)}>
                <svg viewBox="0 0 662 380" width="634" height="100%" style={{ borderRadius: '8px', display: 'block' }}>
                  <rect width="662" height="380" rx="10" fill={dark ? '#3a3a3a' : '#f0f0f0'} />
                  <rect x="24" y="24" width="160" height="14" rx="4" fill={dark ? '#555' : '#c8c8c8'} />
                  <polyline points="24,110 60,95 96,105 132,88 168,100 204,92 240,108 276,118 312,130 348,142 384,150 420,155 456,158" fill="none" stroke="#E8841A" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                  <polyline points="384,158 420,165 440,170 456,162 476,172 496,155 516,165 532,150 548,158 568,144 590,148 614,135 638,140" fill="none" stroke="#3BAA6E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                  <rect x="24" y="300" width="48" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="80" y="300" width="72" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="320" y="300" width="36" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="364" y="300" width="60" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="24" y="320" width="60" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="92" y="320" width="84" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="320" y="320" width="52" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <rect x="380" y="320" width="44" height="10" rx="3" fill={dark ? '#555' : '#c8c8c8'} />
                  <circle cx="456" cy="158" r="4" fill="#E8841A" />
                  <circle cx="456" cy="162" r="4" fill="#3BAA6E" />
                </svg>
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
                <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li>Think in connected strategies, not isolated screens. Early in the project I designed the course creation flow in isolation. When mapped against the learner&apos;s browsing experience, three creator-side fields emerged that were never surfaced to learners - wasted effort on both sides. Connected thinking across user types consistently saves time and prevents the kind of inconsistency that erodes trust in a product.</li>
                  <li>Low fidelity longer than feels comfortable. Stakeholders consistently push for high-fidelity design too early - it feels more concrete, more finished. Holding at lo-fi through two structural feedback rounds on this project saved significant rework. Visual design is always reversible. Structure rarely is.</li>
                  <li>Bring engineers in before the spec, not after. Weekly critique sessions with developers did not slow the project down - they accelerated handoff. Four interactions identified in those sessions were technically infeasible as designed. Catching them at whiteboard stage rather than build stage eliminated the most common and most expensive category of late-stage friction. Earlier involvement consistently produces fewer surprises and a better final product.</li>
                </ul>
              </div>
            </>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
