import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import { t } from '../theme'
import { heading, bodyText } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'
import profilePhoto from '../assets/profile-new.jpg'
import aboutBg from '../assets/about-bg.png'
import resumePdf from '../assets/resume.pdf'


const CERTIFICATES = [
  { title: 'Artificial Intelligence Specialization', issuer: 'IBM',                logo: 'https://www.figma.com/api/mcp/asset/ab9cfaab-2982-42f5-8a85-2c8bdc3f0d98', logoW: 81,  logoH: 44  },
  { title: 'Web Accessibility',                      issuer: 'W3Cx',               logo: 'https://www.figma.com/api/mcp/asset/e41ac9bd-01c4-473d-a307-f44b37a8b0a9', logoW: 81,  logoH: 44  },
  { title: 'Google UX Design Specialization',        issuer: 'Google',             logo: 'https://www.figma.com/api/mcp/asset/667dcfb4-1353-4ed1-8a0c-ae9c378e7f85', logoW: 50,  logoH: 50  },
  { title: 'Masterclass 21st century Design',        issuer: 'IxDF',               logo: 'https://www.figma.com/api/mcp/asset/ed1bf4b3-960a-4dfa-8f91-98b2d354318e', logoW: 54,  logoH: 54, rounded: '64px' },
  { title: 'UX/UI Upskill',                          issuer: 'Telerik Academy',    logo: 'https://www.figma.com/api/mcp/asset/6a524c8c-e559-4b3c-b12d-f903bf5315c5', logoW: 54,  logoH: 54  },
  { title: 'Cursor Masterclass',                     issuer: 'Memorisely',         logo: 'https://www.figma.com/api/mcp/asset/8de4d62f-6b15-48b5-be95-4a48a32a8ad7', logoW: 54,  logoH: 54, rounded: '4px' },
  { title: 'Claude Code in Action',                  issuer: 'Anthropic Academy',  logo: 'https://www.figma.com/api/mcp/asset/8177c409-9f06-4958-b78c-0e2424cddf39', logoW: 54,  logoH: 54  },
]

const TABS = ['Introduction', 'Resume', 'Certificates', 'Contacts']

const BIO = [
  'Dedicated and experienced UX Designer with a proven impact in DeFi and Blockchain start-ups. Thriving as a holistic practitioner, I seamlessly blend product and business processes, and systems.',
  'My approach centres on crafting innovative, inclusive and sustainable solutions in the dynamic intersection of AI and user experience.',
  'I work across research, interaction design, and visual craft to turn ambiguous problems into shipped product. Equally at home defining new products from scratch and improving systems that already serve millions.',
]

export default function AboutPage({ dark, onBack, onToggle, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'Introduction')
  useEffect(() => { document.title = 'About — Vasil Spirov' }, [])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="page-enter transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Inter, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onBack}
        crumbs={[{ label: 'About me' }]}
      />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 94px)', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1004px' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Introduction' && (
            <>
              {/* 694×462 white image card */}
              <div style={{
                width: '694px', height: '462px', borderRadius: '16px',
                overflow: 'hidden', position: 'relative', flexShrink: 0,
                backgroundColor: t(dark, 'cardBg'),
              }}>
                {/* Decorative background — large negative insets, rotated+flipped */}
                <div style={{
                  position: 'absolute',
                  top: '-74.46%', right: '-29.99%', bottom: '-58.69%', left: '-24.5%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src={aboutBg}
                    alt=""
                    style={{ width: '100%', height: '100%', transform: 'rotate(180deg) scaleX(-1)', display: 'block' }}
                  />
                </div>

                {/* Profile photo — centered, 442×387 frame */}
                <div style={{
                  position: 'absolute',
                  left: '50%', top: 'calc(50% + 0.5px)',
                  transform: 'translate(-50%, -50%)',
                  width: '442px', height: '387px',
                  overflow: 'hidden', pointerEvents: 'none',
                }}>
                  <img
                    src={profilePhoto}
                    alt="Vasil Spirov"
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100.15%', height: '171.58%',
                      left: '-0.08%', top: '-22.22%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '694px' }}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>
                  Hi, I&apos;m Vasil
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {BIO.map((para, i) => (
                    <p key={i} style={{ margin: 0, ...bodyText, color: textPrimary }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'Resume' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <iframe
                src={resumePdf}
                title="Resume"
                style={{ width: '100%', flex: 1, minHeight: 'calc(100vh - 220px)', border: 'none', borderRadius: '8px', display: 'block' }}
              />
              <a
                href={resumePdf}
                download="Vasil Spirov Resume.pdf"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px',
                  textDecoration: 'none', color: textPrimary, ...bodyText,
                }}
              >
                <Download size={24} strokeWidth={1.5} />
                <span>Save PDF</span>
              </a>
            </div>
          )}

          {activeTab === 'Certificates' && (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '706px', width: '100%' }}>
              {CERTIFICATES.map((cert, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '16px 16px 16px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ ...heading, color: textPrimary, whiteSpace: 'nowrap' }}>
                        {cert.title}
                      </span>
                      <span style={{ ...bodyText, color: textPrimary }}>
                        {cert.issuer}
                      </span>
                    </div>
                    <div style={{ width: `${cert.logoW}px`, height: `${cert.logoH}px`, flexShrink: 0, position: 'relative', borderRadius: cert.rounded || 0 }}>
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        loading="lazy"
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '694px', width: '100%' }}>
              <p style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px', color: textPrimary }}>
                Contacts
              </p>
              {[
                { label: 'mobile',   value: '+359878517684',                              href: null },
                { label: 'email',    value: 'vasilspirovdesign@gmail.com',                href: null },
                { label: 'Behance',  value: 'http://behance.net/vasilspirov',             href: 'http://behance.net/vasilspirov' },
                { label: 'Linkedin', value: 'https://www.linkedin.com/in/vasil-spirov/',  href: 'https://www.linkedin.com/in/vasil-spirov/' },
              ].flatMap((row, i, arr) => [
                <div key={row.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.35, color: textPrimary }}>
                  <span style={{ width: '84px', flexShrink: 0 }}>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noopener noreferrer" style={{ color: textPrimary, textDecoration: 'underline', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {row.value}
                    </a>
                  ) : (
                    <span>{row.value}</span>
                  )}
                </div>,
                i < arr.length - 1 ? <div key={`div-${i}`} style={{ height: '1px', backgroundColor: t(dark, 'border') }} /> : null,
              ])}
            </div>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
