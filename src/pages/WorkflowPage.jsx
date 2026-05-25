import { useState, useEffect } from 'react'
import { t } from '../theme'
import { heading, bodyText } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'
import designApproachImg from '../assets/designApproach.png'
import coreValuesImg from '../assets/coreValues.png'
import whyUxImg from '../assets/whyUx.png'

const TABS = ['Core Values', 'Design Approach', 'Why UX']

const CORE_VALUES = [
  {
    title: 'User - Centered design',
    body: 'Every design decision starts with the user - understanding how they think, what they need, and how they behave.',
  },
  {
    title: 'Clarity',
    body: 'Every interface should feel effortless. Designed with clarity, stripped of noise, and built to guide users naturally.',
  },
  {
    title: 'Accessibility',
    body: 'Good design only counts if everyone can use it - that means building with empathy for users of all abilities, experiences, and comfort levels with technology.',
  },
]

export default function WorkflowPage({ dark, onBack, onToggle }) {
  const [activeTab, setActiveTab] = useState('Core Values')
  useEffect(() => { document.title = 'Workflow — Vasil Spirov' }, [])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="page-enter transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Geist, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onBack}
        crumbs={[{ label: 'Workflow' }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Core Values' && (
            <>
              <img
                src={coreValuesImg}
                alt="Core values"
                loading="lazy"
                style={{ width: '100%', maxWidth: '694px', height: 'auto', display: 'block', borderRadius: '16px', flexShrink: 0 }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                {CORE_VALUES.map((item) => (
                  <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h2 style={{ margin: 0, ...heading, color: textPrimary }}>{item.title}</h2>
                    <p style={{ margin: 0, ...bodyText, color: textPrimary }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'Design Approach' && (
            <>
              <img
                src={designApproachImg}
                alt="Design approach"
                loading="lazy"
                style={{ width: '100%', maxWidth: '694px', height: 'auto', display: 'block', borderRadius: '16px', flexShrink: 0 }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Design Approach</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', ...bodyText, color: textPrimary }}>
                  <p style={{ margin: 0 }}>
                    There&apos;s no universal playbook for UX Design - just a commitment to iteration, user understanding, and designing experiences that genuinely work for the people using them.
                  </p>
                  <p style={{ margin: 0 }}>
                    The best experiences aren&apos;t designed once - they&apos;re shaped through continuous iteration, deep user understanding, and the willingness to keep improving.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc' }}>
                    <li>Requirement Analysis</li>
                    <li>Design</li>
                    <li>Testing</li>
                    <li>Implementation</li>
                    <li>Maintance</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Why UX' && (
            <>
              <img
                src={whyUxImg}
                alt="Why UX"
                loading="lazy"
                style={{ width: '100%', maxWidth: '694px', height: 'auto', display: 'block', borderRadius: '16px', flexShrink: 0 }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px' }}>
                {[
                  { title: 'Convenience', body: 'Putting digital services in the pocket of every user - accessible from anywhere, on any device.' },
                  { title: 'Process-driven', body: 'Watching someone use something you built - without explaining it and the iteration that finally gets it right' },
                  { title: 'Complexity', body: 'That instant when a confusing flow, a frustrating interface, or an overwhelming process gets stripped back and suddenly just works - for everyone, not just the people who already know how to use it.' },
                  { title: 'Innovation', body: "Blockchain, AI, and machine learning aren't buzzwords - they're the engines behind a new generation of financial services being built right now." },
                  { title: 'Problem solving', body: 'Problems are never purely visual. They sit at the intersection of psychology, behaviour, and technology - and solving them well means understanding people just as much as understanding design.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h2 style={{ margin: 0, ...heading, color: textPrimary }}>{item.title}</h2>
                    <p style={{ margin: 0, ...bodyText, color: textPrimary }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
