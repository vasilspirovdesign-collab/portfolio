const projectScreenshot = 'https://www.figma.com/api/mcp/asset/401e34a9-9d64-4b33-bab9-80d43ba7e6d5'

const imgShadow = '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)'

const TABS = ['The Solution', 'Challenge', 'Feature', 'Feature', 'Feature', 'Feature']

export default function ProjectDetailPage({ dark, onBack, project = 'Opus Edu' }) {
  const activeTab = 'Challenge'

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
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke={textPrimary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ width: '1px', height: '26px', backgroundColor: border }} />
        <span style={{ fontSize: '22px', fontWeight: 600, color: textPrimary, lineHeight: '28px' }}>
          {project}
        </span>
      </div>

      {/* Body: sidebar + content */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)' }}>

        {/* Left sidebar nav */}
        <aside style={{
          width: '436px', flexShrink: 0,
          padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px',
          borderRight: `1px solid ${border}`,
        }}>
          {TABS.map((tab, i) => {
            const isActive = tab === activeTab
            return (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '16px', borderRadius: '8px', cursor: 'pointer',
                  backgroundColor: isActive ? activeBg : 'transparent',
                  transition: 'background-color 0.2s',
                }}
              >
                <span style={{
                  fontSize: '22px', fontWeight: 600, lineHeight: '28px',
                  color: isActive ? textPrimary : textSecondary,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  width: '279px',
                }}>
                  {tab}
                </span>
              </div>
            )
          })}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '32px 32px 32px 32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1004px' }}>

          {/* Screenshot card */}
          <div style={{
            backgroundColor: dark ? '#1e1f26' : '#ffffff',
            borderRadius: '16px', height: '462px', width: '694px',
            overflow: 'hidden', position: 'relative', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '634px', height: '400px', borderRadius: '8px',
              overflow: 'hidden', boxShadow: imgShadow, flexShrink: 0,
            }}>
              <img
                src={projectScreenshot}
                alt="Project screenshot"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Challenge heading */}
          <h1 style={{
            margin: 0, fontSize: '28px', fontWeight: 700,
            lineHeight: '40px', letterSpacing: '0.28px',
            color: textPrimary,
          }}>
            Challenge
          </h1>

          {/* Body text */}
          <div style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.35, color: textPrimary, maxWidth: '694px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
