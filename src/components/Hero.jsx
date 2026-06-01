import { Mail, Phone, Download } from 'lucide-react'
import heroImage from '../assets/hero.jpg'
import resumeImg from '../assets/resume.png'

const cardShadow  = '1px 1px 12px 0px rgba(65,65,65,0.07), -2px -2px 20px 0px rgba(117,117,117,0.08), 5px -3px 30px 0px rgba(117,117,117,0.1)'
const innerShadow = 'inset 1px -1px 10px 0px rgba(255,255,255,0.15), inset 0px 1px 6px 0px rgba(240,240,240,0.06)'

const rowText = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '18px', fontWeight: 400,
  lineHeight: 'normal', letterSpacing: '-0.18px',
  color: '#414141',
  whiteSpace: 'nowrap',
}

export default function Hero({ onGoResume }) {
  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={heroImage}
        alt="Vasil Spirov - click to view resume"
        fetchpriority="high"
        onClick={onGoResume}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGoResume?.() } }}
        role="button"
        tabIndex={0}
        className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] cursor-pointer"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      {/* Resume preview */}
      <div
        onClick={onGoResume}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGoResume?.() } }}
        role="button"
        tabIndex={0}
        aria-label="View resume"
        style={{
          position: 'absolute', left: '30px', top: '30px', bottom: '0px',
          width: '612px', borderRadius: '4px', overflow: 'hidden',
          backgroundColor: '#ffffff', cursor: 'pointer',
        }}
      >
        <img src={resumeImg} alt="Resume" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
      </div>

      {/* Contact card */}
      <div style={{
        position: 'absolute', right: '24px', bottom: '24px',
        width: '484px', borderRadius: '7px', overflow: 'hidden',
        boxShadow: cardShadow,
      }}>
        {/* Email row */}
        <div style={{
          position: 'relative',
          display: 'flex', flexDirection: 'column', height: '87px',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 24px', opacity: 0.88,
          borderBottom: '1px solid #d0d1d2',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fafafa', pointerEvents: 'none' }} />
          <a href="mailto:vasilspirovdesign@gmail.com" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <Mail size={24} strokeWidth={1.5} color="#414141" aria-hidden="true" style={{ flexShrink: 0 }} />
            <span style={rowText}>vasilspirovdesign@gmail.com</span>
          </a>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: innerShadow, pointerEvents: 'none' }} />
        </div>

        {/* Phone + Resume row */}
        <div style={{
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '22px', padding: '20px 24px', opacity: 0.88, overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fafafa', pointerEvents: 'none' }} />
          <a href="tel:+359878517684" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <Phone size={24} strokeWidth={1.5} color="#414141" aria-hidden="true" style={{ flexShrink: 0 }} />
            <span style={rowText}>+359878517684</span>
          </a>
          <div style={{ position: 'relative', width: '1px', height: '48px', backgroundColor: '#d0d2d0', flexShrink: 0 }} />
          <a href="https://drive.google.com/file/d/1-WYoSnZLRGWSLbxg94zymQg0IVdhaKx7/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'flex', width: '192px', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', ...rowText }}>
            <Download size={24} strokeWidth={1.5} color="#414141" aria-hidden="true" style={{ flexShrink: 0 }} />
            Resume
          </a>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: innerShadow, pointerEvents: 'none' }} />
        </div>
      </div>
    </div>
  )
}
