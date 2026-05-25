import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'

import opusEduChallenge from '../assets/opus-edu-challenge.jpg'
import opusEduIntro from '../assets/opus-edu-intro.jpg'
import opusEduRole from '../assets/opus-edu-role.jpg'
import opusEduDecisions from '../assets/opus-edu-decisions.jpg'
import opusEduProblem from '../assets/opus-edu-problem.jpg'
import opusEduSolution from '../assets/opus-edu-solution.jpg'
import opusEduRoleSs1 from '../assets/opus-edu-role-ss1.jpg'
import opusEduRoleSs2 from '../assets/opus-edu-role-ss2.jpg'
import opusEduRoleSs3 from '../assets/opus-edu-role-ss3.jpg'



const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/242219669/Opus-Educational-Platform' },
]

export default function ProjectDetailPage({ dark, onBack, onHome, onToggle, project = 'Opus Edu' }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${project} — Vasil Spirov` }, [project])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="page-enter transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Inter, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onHome || onBack}
        crumbs={[{ label: 'Projects', onClick: onBack }, { label: project }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Introduction' && (
            <>
              <img
                src={opusEduIntro}
                alt="OpusEdu intro"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h1 style={{ margin: 0, ...heading, color: textPrimary }}>
                    OpusEdu
                  </h1>
                  <a
                    href="https://opusedu.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...bodyText, color: textPrimary, textDecoration: 'underline' }}
                  >
                    https://opusedu.io/
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', ...bodyText, color: textPrimary }}>
                  <p style={{ margin: 0 }}>
                    <strong>Role:</strong> Senior UX Designer · End-to-End Product Design
                  </p>
                  <p style={{ margin: 0 }}>
                    OpusEdu is a scalable learning platform where instructors create and publish courses, learners discover and purchase them, and blockchain-verified certificates serve as tamper-proof proof of completion.
                  </p>
                  <p style={{ margin: 0 }}>
                    The platform serves three distinct user types — <strong>admins, content creators,</strong> and <strong>learners</strong> — each with fundamentally different goals, mental models, and levels of technical fluency.
                  </p>
                  <p style={{ margin: 0 }}>
                    The engagement required designing a cohesive product from the ground up: information architecture, interaction patterns, a shared component library, and high-fidelity screens across six core user journeys — with no prior design system and a technically novel domain that offered no established UX conventions to reference.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Challenge' && (
            <>
              <img
                src={opusEduChallenge}
                alt={`${project} challenge`}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>
                  Challenge
                </h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>
                    Designing a <strong>multi-stakeholder platform</strong> where <strong>complexity is the product</strong>.
                  </p>
                  <p style={{ margin: 0 }}>
                    A single product had to serve three user types with opposing needs:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Admins</strong> - oversight, control, and trust signals across all content and users</li>
                    <li><strong>Content Creators</strong> - a guided but flexible multi-step creation flow with real-time feedback and draft persistence</li>
                    <li><strong>Learners</strong> - clarity and confidence at every step, especially when encountering unfamiliar interaction patterns for the first time</li>
                  </ul>
                  <p style={{ margin: 0 }}>
                    The platform covered seven interconnected use cases: course creation, video content upload, test configuration, certificate issuance, user onboarding, course discovery and purchase, and content moderation - with no pre-existing design system to build from.
                  </p>
                  <p style={{ margin: 0 }}>
                    The risk was a product that felt fragmented, technically intimidating, or cognitively overwhelming at exactly the moments users needed to feel most confident.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <img
                src={opusEduProblem}
                alt="Problem"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>
                Problem
              </h1>
              <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <p style={{ margin: 0 }}>
                  The hardest problem wasn't the interface. It was <strong>reducing invisible friction.</strong>
                </p>
                <p style={{ margin: 0 }}>
                  The platform's Web3 foundation introduced a class of UX problems that conventional design patterns do not solve. Users were required to create and secure a crypto wallet, manage seed phrases - a concept foreign to the majority of mainstream users - and complete purchases via blockchain transactions with variable fees, unpredictable confirmation times, and price volatility. The result was a steep learning curve that drove drop-off before any product value was experienced.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>The parallel challenge</strong> on the creator side was structural: instructors needed a multi-step course creation flow guided enough for first-time publishers but flexible enough for power users managing large catalogues.
                </p>
                <p style={{ margin: 0 }}>
                  Both problems were <strong>versions of the same root issue</strong> - users encountering system complexity at exactly the moment they needed to feel in control. The design had to absorb that complexity so users did not have to.
                </p>
              </div>
            </div>
            </>
          )}

          {activeTab === 'My Role' && (
            <>
              <img
                src={opusEduRole}
                alt="My role"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
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
              <div style={{
                backgroundColor: t(dark, 'cardBg'), borderRadius: '22px',
                padding: '126px 40px 40px', overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  {[opusEduRoleSs1, opusEduRoleSs2, opusEduRoleSs3].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Research document ${i + 1}`}
                      loading="lazy"
                      style={{ flex: 1, width: 0, height: 'auto', display: 'block', borderRadius: '4px' }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li>
                    <strong>Establishing an Initial Action Plan</strong> — Rather than designing top-to-bottom by product scope, I mapped user journeys against pain severity and business impact. This prioritisation directed early effort toward the highest-risk flows rather than the most visible pages.
                  </li>
                  <li>
                    <strong>Discovery Stakeholder interviews</strong> surfaced competing priorities between business goals and user needs. User group sessions with prospective learners and instructors revealed a consistent pattern: both groups were willing to engage with unfamiliar interaction models — but only if the path felt guided rather than technical.
                  </li>
                  <li>
                    <strong>Competitive Analysis Benchmarked</strong> against both conventional (Udemy, Teachable, Coursera) and Web3-native (Rabbithole, Mirror) platforms to identify gaps in onboarding clarity, content creation flow, and certificate management.
                  </li>
                  <li>
                    <strong>Information Architecture Mapped</strong> the full IA for all three user types before any UI work began. This step surfaced flow conflicts between creator and learner journeys that would have been expensive to resolve at prototype stage.
                  </li>
                  <li>
                    <strong>Wireframes and Prototype</strong> — Maintained low fidelity longer than stakeholders were comfortable with. Pressure to move to visual design came early. Holding at lo-fi through two additional structural feedback rounds prevented significant rework and kept the team focused on behaviour, not appearance.
                  </li>
                  <li>
                    <strong>Usability Testing Two rounds:</strong> the first with a wireframe prototype targeting structural comprehension, the second with the high-fidelity prototype targeting confidence and error recovery at the highest-risk interactions - wallet connection, course creation step three, and certificate issuance.
                  </li>
                  <li>
                    <strong>Dev Collaboration and QA Weekly</strong> design critique sessions with engineers were introduced mid-project. In four sessions, technically complex interactions were identified before they reached the spec stage. This became a standing practice for the remainder of the engagement and removed the most common source of late-stage rework.
                  </li>
                </ol>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <img
                src={opusEduDecisions}
                alt="Key decisions"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
              <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <p style={{ margin: 0 }}>
                  Start from the most painful page, not the most visible one. The client <strong>prioritised the homepage</strong>.
                </p>
                <p style={{ margin: 0 }}>
                  Discovery data showed that competing platforms lost the majority of new users during onboarding - before a single course was browsed. I redirected the initial effort to the onboarding and wallet connection flow, establishing trust and cognitive confidence before any monetisation touchpoint. This reframe required explicit stakeholder alignment and held through testing.
                </p>
                <p style={{ margin: 0 }}>
                  Design <strong>for the least technical user</strong>, not the median. Web3 literacy varies widely across the target audience. Rather than designing toward an assumed average, I designed the wallet connection and payment flows for a user encountering these concepts for the first time - progressive disclosure, contextual guidance, and explicit confirmation at every blockchain interaction. Experienced users lose nothing; inexperienced users gain confidence at the moments that matter most.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>One design system, three contexts.</strong> Rather than building separate component sets per user type, I built a shared library with role-specific variants. This enforced visual consistency across the admin, creator, and learner surfaces while reducing design debt and simplifying developer implementation. The component library was documented and handed over as a deliverable for future product iterations.
                </p>
                <p style={{ margin: 0 }}>
                  Treat certificate issuance as a <strong>content lifecycle</strong>, not a feature. Certificate issuance could have been a one-click action. Instead, it was designed as a full workflow: template creation, custom branding, field mapping, preview, and issuance - with an explicit status model (draft / issued / revoked). This prevented edge-case failures at scale that the client had not yet anticipated and created a foundation for the certificate management system to evolve independently of the course creation flow.
                </p>
              </div>
            </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <img
                src={opusEduSolution}
                alt="Solution"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>
                    Onboarding · Course Creation · Certificate Management · Marketing
                  </p>
                  <p style={{ margin: 0 }}>
                    The final solution was a component-driven product covering six <strong>core user journeys</strong> across three user types, built on a shared design system.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Guided Onboarding</strong> - Progressive wallet connection flow with a fallback path for users without an existing wallet, a personalisation step before any monetisation touchpoint, and contextual guidance surfaced at every friction-prone interaction.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Multi-Step Course Creation</strong><br />
                    Five-stage wizard (1. Main Information - 2. Thumbnails and Preview - 3. Pricing and Token Settings - 4. Create Certificate - 5. Custom Creation) with persistent draft-saving, inline validation, and progress state visible at all times.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Certificate Template Builder</strong><br />
                    Drag-and-place field mapping with background customisation, preview mode, font controls, and one-click issuance. Role-based access controls distinct creator and admin capabilities within the same interface.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Course Discovery and Moderation</strong><br />
                    Filterable, sortable grid with an approval workflow for admins surfaced as a contextual overlay on the learner browse experience - same component, different permission layer.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Marketing and Content Pages</strong> - Content-driven landing page and blog architecture aligned to acquisition and SEO goals, built from the same component library as the product.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                <li>
                  Think in <strong>connected strategies,</strong> not isolated screens. Early in the project I designed the course creation flow in isolation. When mapped against the learner&apos;s browsing experience, three creator-side fields emerged that were never surfaced to learners - wasted effort on both sides. Connected thinking across user types consistently saves time and prevents the kind of inconsistency that erodes trust in a product.
                </li>
                <li>
                  Low fidelity longer than feels comfortable. Stakeholders consistently push for high-fidelity design too early - it feels more concrete, more finished. Holding at lo-fi through two structural feedback rounds on this project saved significant rework. Visual design is always reversible. Structure rarely is.
                </li>
                <li>
                  Bring engineers in before the spec, not after. Weekly critique sessions with developers did not slow the project down - they accelerated handoff. Four interactions identified in those sessions were technically infeasible as designed. Catching them at whiteboard stage rather than build stage eliminated the most common and most expensive category of late-stage friction. Earlier involvement consistently produces fewer surprises and a better final product.
                </li>
              </ul>
            </div>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
