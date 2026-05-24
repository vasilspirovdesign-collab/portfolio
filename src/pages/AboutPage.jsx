import { useState } from 'react'

const profilePhoto = 'https://www.figma.com/api/mcp/asset/d322dc28-516f-4de8-9f41-fb597c7e6190'

const TABS = ['Introduction', 'Certificates', 'Contacts']

const BIO = [
  'Dedicated and experienced UX Designer with a proven impact in DeFi and Blockchain start-ups. Thriving as a holistic practitioner, I seamlessly blend product and business processes, and systems.',
  'My approach centres on crafting innovative, inclusive and sustainable solutions in the dynamic intersection of AI and user experience.',
  'I work across research, interaction design, and visual craft to turn ambiguous problems into shipped product. Equally at home defining new products from scratch and improving systems that already serve millions.',
]

export default function AboutPage({ dark, onBack }) {
  const [activeTab, setActiveTab] = useState('Introduction')

  const bg = dark ? '#16171d' : '#f0f0f0'
  const border = dark ? '#2e303a' : '#d0d2d0'
  const textPrimary = dark ? '#f3f4f6' : '#414141'
  const textSecondary = dark ? '#a2a3a5' : '#757575'
  const activeBg = dark ? '#2e303a' : '#d0d2d0'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bg, transition: 'background-color 0.3s', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        display: 'flex', height: '94px', alignItems: 'center',
        padding: '31px 30px', borderBottom: `1px solid ${border}`,
        backgroundColor: bg, gap: '24px',
      }}>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke={textPrimary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ width: '1px', height: '26px', backgroundColor: border }} />
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 600, color: textPrimary, lineHeight: '28px' }}>
          About me
        </span>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)' }}>

        {/* Sidebar */}
        <aside style={{
          width: '436px', flexShrink: 0,
          padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px',
          borderRight: `1px solid ${border}`,
        }}>
          {TABS.map((tab) => {
            const isActive = tab === activeTab
            return (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '16px', borderRadius: '8px', cursor: 'pointer',
                  backgroundColor: isActive ? activeBg : 'transparent',
                  transition: 'background-color 0.2s',
                }}
              >
                <span style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '22px', fontWeight: 600, lineHeight: '28px',
                  color: isActive ? textPrimary : textSecondary,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  width: '279px',
                  transition: 'color 0.2s',
                }}>
                  {tab}
                </span>
              </div>
            )
          })}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1004px' }}>

          {activeTab === 'Introduction' && (
            <>
              {/* Profile photo */}
              <div style={{
                width: '221px', height: '229px', borderRadius: '8px',
                overflow: 'hidden', flexShrink: 0, position: 'relative',
              }}>
                <img
                  src={profilePhoto}
                  alt="Vasil Spirov"
                  style={{
                    position: 'absolute',
                    top: '-19.56%', left: '-2.24%',
                    width: '104.48%', height: '151.83%',
                    maxWidth: 'none', objectFit: 'cover',
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '694px' }}>
                <h1 style={{
                  margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '28px', fontWeight: 700, lineHeight: '40px',
                  letterSpacing: '0.28px', color: textPrimary,
                }}>
                  Hi, I&apos;m Vasil
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {BIO.map((para, i) => (
                    <p key={i} style={{
                      margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '20px', fontWeight: 500, lineHeight: 1.35,
                      color: textPrimary,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'Certificates' && (
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '20px', fontWeight: 500, color: textSecondary }}>
              Certificates coming soon.
            </p>
          )}

          {activeTab === 'Contacts' && (
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '20px', fontWeight: 500, color: textSecondary }}>
              Contacts coming soon.
            </p>
          )}

        </main>
      </div>
    </div>
  )
}
