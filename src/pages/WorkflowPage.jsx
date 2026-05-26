import { useState, useEffect } from 'react'
import { t } from '../theme'
import { heading, bodyText, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import designApproachImg from '../assets/designApproach.png'
import coreValuesImg from '../assets/coreValues.png'
import whyUxImg from '../assets/whyUx.png'
import aiWorkflowImg from '../assets/ai-workflow.png'

const TABS = ['Core Values', 'Design Approach', 'Why UX', 'AI powered']

const CORE_VALUES = [
  { title: 'User - Centered design', body: 'Every design decision starts with the user - understanding how they think, what they need, and how they behave.' },
  { title: 'Clarity', body: 'Every interface should feel effortless. Designed with clarity, stripped of noise, and built to guide users naturally.' },
  { title: 'Accessibility', body: 'Good design only counts if everyone can use it - that means building with empathy for users of all abilities, experiences, and comfort levels with technology.' },
]

const WHY_UX = [
  { title: 'Convenience', body: 'Putting digital services in the pocket of every user - accessible from anywhere, on any device.' },
  { title: 'Process-driven', body: 'Watching someone use something you built - without explaining it and the iteration that finally gets it right' },
  { title: 'Complexity', body: 'That instant when a confusing flow, a frustrating interface, or an overwhelming process gets stripped back and suddenly just works - for everyone, not just the people who already know how to use it.' },
  { title: 'Innovation', body: "Blockchain, AI, and machine learning aren't buzzwords - they're the engines behind a new generation of financial services being built right now." },
  { title: 'Problem solving', body: 'Problems are never purely visual. They sit at the intersection of psychology, behaviour, and technology - and solving them well means understanding people just as much as understanding design.' },
]

export default function WorkflowPage({ dark, onBack, onToggle }) {
  const [activeTab, setActiveTab] = useState('Core Values')
  useEffect(() => { document.title = 'Workflow - Vasil Spirov' }, [])

  const textPrimary = t(dark, 'text')

  return (
    <PageLayout
      dark={dark}
      onToggle={onToggle}
      onHome={onBack}
      crumbs={[{ label: 'Workflow' }]}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

          {activeTab === 'Core Values' && (
            <>
              <div style={photoCard(dark)}>
                <img src={coreValuesImg} alt="Core values" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
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
              <div style={photoCard(dark)}>
                <img src={designApproachImg} alt="Design approach" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Design Approach</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', ...bodyText, color: textPrimary }}>
                  <p style={{ margin: 0 }}>There&apos;s no universal playbook for UX Design - just a commitment to iteration, user understanding, and designing experiences that genuinely work for the people using them.</p>
                  <p style={{ margin: 0 }}>The best experiences aren&apos;t designed once - they&apos;re shaped through continuous iteration, deep user understanding, and the willingness to keep improving.</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc' }}>
                    <li><strong>Requirement Analysis</strong></li>
                    <li><strong>Design</strong></li>
                    <li><strong>Testing</strong></li>
                    <li><strong>Implementation</strong></li>
                    <li><strong>Maintance</strong></li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Why UX' && (
            <>
              <div style={photoCard(dark)}>
                <img src={whyUxImg} alt="Why UX" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                {WHY_UX.map((item) => (
                  <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h2 style={{ margin: 0, ...heading, color: textPrimary }}>{item.title}</h2>
                    <p style={{ margin: 0, ...bodyText, color: textPrimary }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'AI powered' && (
            <>
              <div style={photoCard(dark)}>
                <img src={aiWorkflowImg} alt="AI-augmented workflow" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>AI tools are part of my design process - not as a replacement for thinking, but as a way to think better.</p>
                {[
                  { title: 'Claude & Gemini', body: 'I use them to explore UX concepts, write and refine microcopy, map user journeys, and pressure-test design decisions before they reach a screen.' },
                  { title: 'Claude Code', body: 'Means I can build interactive prototypes independently - real components, real states, real edge cases - which changes what I can bring to usability testing.' },
                  { title: 'NotebookLM', body: 'Helps me stay on top of research without losing the threads that matter.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h2 style={{ margin: 0, ...heading, color: textPrimary }}>{item.title}</h2>
                    <p style={{ margin: 0, ...bodyText, color: textPrimary }}>{item.body}</p>
                  </div>
                ))}
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>What I&apos;ve found is that the designers who use these tools well aren&apos;t doing less design work - they&apos;re doing it at a level of depth and speed that wasn&apos;t possible before.</p>
              </div>
            </>
          )}

    </PageLayout>
  )
}
