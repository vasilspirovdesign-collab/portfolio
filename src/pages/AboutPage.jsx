import { useState, useEffect, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'
import { t } from '../theme'
import { heading, bodyText, photoCard, photoImg } from '../styles'
import PageLayout from '../components/PageLayout'
import profilePhoto from '../assets/smallerVasko.png'
import resumePdf from '../assets/resume.pdf'
import logoIbm from '../assets/logo-ibm.png'
import logoW3cx from '../assets/logo-w3cx.png'
import logoGoogle from '../assets/logo-google.png'
import logoIxdf from '../assets/logo-ixdf.png'
import logoTelerik from '../assets/logo-telerik.png'
import logoMemorisely from '../assets/logo-memorisely.png'
import logoAnthropic from '../assets/logo-anthropic.png'

const CERTIFICATES = [
  { title: 'Artificial Intelligence Specialization', issuer: 'IBM',                logo: logoIbm,        logoW: 81,  logoH: 44  },
  { title: 'Web Accessibility',                      issuer: 'W3Cx',               logo: logoW3cx,       logoW: 81,  logoH: 44  },
  { title: 'Google UX Design Specialization',        issuer: 'Google',             logo: logoGoogle,     logoW: 50,  logoH: 50  },
  { title: 'Masterclass 21st century Design',        issuer: 'IxDF',               logo: logoIxdf,       logoW: 54,  logoH: 54, rounded: '64px' },
  { title: 'UX/UI Upskill',                          issuer: 'Telerik Academy',    logo: logoTelerik,    logoW: 54,  logoH: 54  },
  { title: 'Cursor Masterclass',                     issuer: 'Memorisely',         logo: logoMemorisely, logoW: 54,  logoH: 54, rounded: '4px' },
  { title: 'Claude Code in Action',                  issuer: 'Anthropic Academy',  logo: logoAnthropic,  logoW: 54,  logoH: 54, invert: true  },
]

const TABS = ['Introduction', 'Resume', 'Certificates', 'Contacts']

const BIO = [
  'Dedicated and experienced UX Designer with a proven impact in DeFi and Blockchain start-ups. Thriving as a holistic practitioner, I seamlessly blend product and business processes, and systems.',
  'My approach centres on crafting innovative, inclusive and sustainable solutions in the dynamic intersection of AI and user experience.',
  'I work across research, interaction design, and visual craft to turn ambiguous problems into shipped product. Equally at home defining new products from scratch and improving systems that already serve millions.',
]

export default function AboutPage({ dark, onBack, onToggle, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'Introduction')
  const [copied, setCopied] = useState(null)
  useEffect(() => { document.title = 'About - Vasil Spirov' }, [])

  const copyToClipboard = useCallback((value) => {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 2000)
  }, [])

  const textPrimary = t(dark, 'text')

  return (
    <PageLayout
      dark={dark}
      onToggle={onToggle}
      onHome={onBack}
      crumbs={[{ label: 'About me' }]}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      mainStyle={{ maxWidth: '1004px' }}
    >

          {activeTab === 'Introduction' && (
            <>
              <div style={photoCard(dark)}>
                <img src={profilePhoto} alt="Vasil Spirov" loading="eager" style={photoImg} />
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '694px', maxWidth: '694px', flex: 1 }}>
              <iframe
                src={resumePdf}
                title="Resume"
                style={{ width: '100%', height: '900px', border: 'none', borderRadius: '8px', display: 'block' }}
              />
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
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', borderRadius: cert.rounded || 0, filter: cert.invert && dark ? 'invert(1)' : 'none' }}
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
              <p style={{ margin: 0, fontFamily: 'Questrial, sans-serif', fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px', color: textPrimary }}>
                Contacts
              </p>
              {[
                { label: 'mobile',   value: '+359878517684',                              href: null,  copyable: true },
                { label: 'email',    value: 'vasilspirovdesign@gmail.com',                href: null,  copyable: true },
                { label: 'Behance',  value: 'http://behance.net/vasilspirov',             href: 'http://behance.net/vasilspirov' },
                { label: 'Linkedin', value: 'https://www.linkedin.com/in/vasil-spirov/',  href: 'https://www.linkedin.com/in/vasil-spirov/' },
              ].flatMap((row, i, arr) => [
                <div key={row.label} style={{ display: 'flex', gap: '16px', alignItems: 'center', ...bodyText, color: textPrimary }}>
                  <span style={{ width: '84px', flexShrink: 0 }}>{row.label}</span>
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noopener noreferrer" style={{ color: '#005AFF', textDecoration: 'underline', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {row.value}
                    </a>
                  ) : (
                    <span>{row.value}</span>
                  )}
                  {row.copyable && (
                    <button
                      onClick={() => copyToClipboard(row.value)}
                      className={copied === row.value ? '' : 'icon-btn'}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', color: copied === row.value ? '#3BAA6E' : (dark ? '#a2a3a5' : '#757575'), transition: 'color 200ms', flexShrink: 0 }}
                    >
                      {copied === row.value ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={1.75} />}
                    </button>
                  )}
                </div>,
                i < arr.length - 1 ? <div key={`div-${i}`} style={{ height: '1px', backgroundColor: t(dark, 'border') }} /> : null,
              ])}
            </div>
          )}

    </PageLayout>
  )
}
