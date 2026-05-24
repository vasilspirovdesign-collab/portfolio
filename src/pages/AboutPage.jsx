import { useState } from 'react'
import { Home, Moon, Sun } from 'lucide-react'
import { t } from '../theme'
import profilePhoto from '../assets/profile.png'
const contactCardAsset = 'https://www.figma.com/api/mcp/asset/a91b663e-7b87-4b4e-9ad9-687f5171fd35'

const CERTIFICATES = [
  { title: 'Artificial Intelligence Specialization', issuer: 'IBM',                logo: 'https://www.figma.com/api/mcp/asset/ab9cfaab-2982-42f5-8a85-2c8bdc3f0d98', logoW: 81,  logoH: 44  },
  { title: 'Web Accessibility',                      issuer: 'W3Cx',               logo: 'https://www.figma.com/api/mcp/asset/e41ac9bd-01c4-473d-a307-f44b37a8b0a9', logoW: 81,  logoH: 44  },
  { title: 'Google UX Design Specialization',        issuer: 'Google',             logo: 'https://www.figma.com/api/mcp/asset/667dcfb4-1353-4ed1-8a0c-ae9c378e7f85', logoW: 50,  logoH: 50  },
  { title: 'Masterclass 21st century Design',        issuer: 'IxDF',               logo: 'https://www.figma.com/api/mcp/asset/ed1bf4b3-960a-4dfa-8f91-98b2d354318e', logoW: 54,  logoH: 54, rounded: '64px' },
  { title: 'UX/UI Upskill',                          issuer: 'Telerik Academy',    logo: 'https://www.figma.com/api/mcp/asset/6a524c8c-e559-4b3c-b12d-f903bf5315c5', logoW: 54,  logoH: 54  },
  { title: 'Cursor Masterclass',                     issuer: 'Memorisely',         logo: 'https://www.figma.com/api/mcp/asset/8de4d62f-6b15-48b5-be95-4a48a32a8ad7', logoW: 54,  logoH: 54, rounded: '4px' },
  { title: 'Claude Code in Action',                  issuer: 'Anthropic Academy',  logo: 'https://www.figma.com/api/mcp/asset/8177c409-9f06-4958-b78c-0e2424cddf39', logoW: 54,  logoH: 54  },
]

const TABS = ['Introduction', 'Certificates', 'Contacts']

const BIO = [
  'Dedicated and experienced UX Designer with a proven impact in DeFi and Blockchain start-ups. Thriving as a holistic practitioner, I seamlessly blend product and business processes, and systems.',
  'My approach centres on crafting innovative, inclusive and sustainable solutions in the dynamic intersection of AI and user experience.',
  'I work across research, interaction design, and visual craft to turn ambiguous problems into shipped product. Equally at home defining new products from scratch and improving systems that already serve millions.',
]

export default function AboutPage({ dark, onBack, onToggle }) {
  const [activeTab, setActiveTab] = useState('Introduction')

  const bg = t(dark, 'bg')
  const border = t(dark, 'border')
  const textPrimary = dark ? '#d0d2d0' : '#414141'
  const textSecondary = dark ? '#a2a3a5' : '#757575'
  const activeBg = t(dark, 'border')

  return (
    <div className="page-enter" style={{ minHeight: '100vh', backgroundColor: bg, transition: 'background-color 0.3s', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        display: 'flex', height: '94px', alignItems: 'center',
        padding: '31px 30px', gap: '24px',
        borderBottom: `1px solid ${border}`,
        backgroundColor: bg,
        transition: 'background-color 0.3s',
      }}>
        <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '24px', minWidth: 0 }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }} aria-label="Go home">
            <Home size={24} color={textPrimary} strokeWidth={1.5} />
          </button>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px', color: border, flexShrink: 0 }}>/</span>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.18px', color: textSecondary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>About me</span>
        </div>
        <div style={{ display: 'flex', flex: '1 0 0', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0 }}>
          <button onClick={onToggle} aria-label="Toggle theme" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            {dark ? <Sun size={24} color={textPrimary} strokeWidth={1.5} /> : <Moon size={24} color={textPrimary} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)' }}>

        {/* Sidebar */}
        <aside style={{
          width: '436px', flexShrink: 0,
          padding: '30px', display: 'flex', flexDirection: 'column',
        }}>
          {TABS.map((tab) => {
            const isActive = tab === activeTab
            return (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  height: '72px', padding: '0 16px', borderRadius: '8px', cursor: 'pointer',
                  backgroundColor: isActive ? activeBg : 'transparent',
                  transition: 'background-color 0.2s',
                }}
              >
                <span style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '18px', fontWeight: 500, lineHeight: 1.2,
                  letterSpacing: '-0.18px',
                  color: isActive ? (dark ? '#d0d2d0' : '#171717') : textSecondary,
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
                overflow: 'hidden', flexShrink: 0,
              }}>
                <img
                  src={profilePhoto}
                  alt="Vasil Spirov"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '694px' }}>
                <h1 style={{
                  margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '22px', fontWeight: 600, lineHeight: '28px',
                  letterSpacing: '0.22px', color: textPrimary,
                }}>
                  Hi, I&apos;m Vasil
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {BIO.map((para, i) => (
                    <p key={i} style={{
                      margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '18px', fontWeight: 400, lineHeight: 1.2,
                      letterSpacing: '-0.18px', color: textPrimary,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'Certificates' && (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '706px', width: '100%' }}>
              {CERTIFICATES.map((cert, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingRight: '16px', padding: '16px 16px 16px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '28px', color: textPrimary, whiteSpace: 'nowrap' }}>
                        {cert.title}
                      </span>
                      <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 'normal', letterSpacing: '-0.18px', color: textPrimary }}>
                        {cert.issuer}
                      </span>
                    </div>
                    <div style={{ width: `${cert.logoW}px`, height: `${cert.logoH}px`, flexShrink: 0, position: 'relative', borderRadius: cert.rounded || 0 }}>
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', borderRadius: cert.rounded || 0 }}
                      />
                    </div>
                  </div>
                  {i < CERTIFICATES.length - 1 && (
                    <div style={{ height: '1px', backgroundColor: t(dark, 'border') }} />
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Contacts' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px', width: '100%' }}>

              {/* Contact card */}
              <div style={{ width: '694px', height: '462px', borderRadius: '16px', overflow: 'hidden', backgroundColor: dark ? t(dark, 'cardBg') : '#ffffff', flexShrink: 0 }}>
                <img src={contactCardAsset} alt="Contact methods" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Heading */}
              <h1 style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 600, lineHeight: '28px', letterSpacing: '0.22px', color: textPrimary }}>
                Contacts
              </h1>

              {/* Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'mobile',   value: '+359878517684',                         href: null },
                  { label: 'email',    value: 'vasilspirovdesign@gmail.com',           href: null },
                  { label: 'Behance',  value: 'http://behance.net/vasilspirov',        href: 'http://behance.net/vasilspirov' },
                  { label: 'Linkedin', value: 'https://www.linkedin.com/in/vasil-spirov/', href: 'https://www.linkedin.com/in/vasil-spirov/' },
                ].map((row, i, arr) => (
                  <div key={row.label}>
                    <div style={{ display: 'flex', gap: '16px', padding: '16px 0', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.35, color: textPrimary }}>
                      <span style={{ width: '84px', flexShrink: 0 }}>{row.label}</span>
                      {row.href ? (
                        <a href={row.href} target="_blank" rel="noopener noreferrer" style={{ color: textPrimary, textDecoration: 'underline', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {row.value}
                        </a>
                      ) : (
                        <span>{row.value}</span>
                      )}
                    </div>
                    {i < arr.length - 1 && <div style={{ height: '1px', backgroundColor: t(dark, 'border') }} />}
                  </div>
                ))}
              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  )
}
