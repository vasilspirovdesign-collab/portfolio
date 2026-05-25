import { useEffect } from 'react'
import { t } from '../theme'
import { heading, bodyText } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'
import ImageContainer from '../components/ImageContainer'

import projectScreenshot from '../assets/opus-edu-screenshot.jpg'


const TABS = ['The Solution', 'Challenge', 'Feature', 'Feature', 'Feature', 'Feature']

export default function ProjectDetailPage({ dark, onBack, onHome, onToggle, project = 'Opus Edu' }) {
  const activeTab = 'Challenge'
  useEffect(() => { document.title = `${project} — Vasil Spirov` }, [project])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="page-enter" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), transition: 'background-color 0.3s', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onHome || onBack}
        crumbs={[{ label: 'Projects', onClick: onBack }, { label: project }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} />

        <main style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1004px' }}>

          <ImageContainer dark={dark}>
            <img
              src={projectScreenshot}
              alt={`${project} screenshot`}
              loading="lazy"
              style={{ position: 'absolute', top: '-13.25%', bottom: '-11.75%', left: '-7.1%', right: '-8.68%', width: 'auto', height: 'auto', maxWidth: 'none' }}
            />
          </ImageContainer>

          <h1 style={{ margin: 0, ...heading, color: textPrimary }}>
            Challenge
          </h1>

          <div style={{ ...bodyText, color: textPrimary, maxWidth: '694px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0 }}>
              Designing a <strong>multi-stakeholder platform</strong> where <strong>complexity is the product.</strong>
            </p>
            <p style={{ margin: 0 }}>
              A single product had to serve three user types with opposing needs:
            </p>
            <ul style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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

        </main>
      </div>
    </div>
  )
}
