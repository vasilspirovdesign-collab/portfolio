import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'

const PROJECT = 'Hedera Transaction Tool'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
]

export default function HederaPage({ dark, onBack, onHome, onToggle }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${PROJECT} — Vasil Spirov` }, [])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Geist, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onHome || onBack}
        crumbs={[{ label: 'Projects', onClick: onBack }, { label: PROJECT }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="page-enter" style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Introduction' && (
            <>
              <div style={photoCard(dark)} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Hedera Transaction Tool</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', ...bodyText, color: textPrimary }}>
                  <p style={{ margin: 0 }}>Role: UX Designer</p>
                  <p style={{ margin: 0 }}>Content coming soon.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Challenge' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'My Role' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'Process' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
