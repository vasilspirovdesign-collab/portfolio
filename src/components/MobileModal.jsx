import { useState, useEffect, useCallback } from 'react'
import { Check } from 'lucide-react'
import shape1 from '../assets/mobile-shape-1.png'
import shape2 from '../assets/mobile-shape-2.png'
import shape3 from '../assets/mobile-shape-3.png'
import shape4 from '../assets/mobile-shape-4.png'

export default function MobileModal() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const check = () => setVisible(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(255,255,255,0.4)',
      padding: '24px',
    }}>
      <div style={{
        width: '329px', borderRadius: '8px', overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Image area */}
        <div style={{
          width: '329px', height: '219px', position: 'relative',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #d0d2d0',
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* 3D shape — 4 overlapping group images, rotated as in Figma */}
          <div style={{ position: 'relative', width: '191px', height: '172px', transform: 'rotate(175.63deg)' }}>
            <img src={shape1} alt="" style={{ position: 'absolute', top: '4%', left: 0, right: '14%', bottom: 0, width: '86%', height: '96%', objectFit: 'contain' }} />
            <img src={shape2} alt="" style={{ position: 'absolute', top: '33%', left: '29%', right: 0, bottom: '3%', width: '71%', height: '64%', objectFit: 'contain' }} />
            <img src={shape3} alt="" style={{ position: 'absolute', top: 0, left: '13%', right: '56%', bottom: '3%', width: '32%', height: '97%', objectFit: 'contain' }} />
            <img src={shape4} alt="" style={{ position: 'absolute', top: 0, left: '27%', right: 0, bottom: '50%', width: '73%', height: '50%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Text + button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px' }}>
          <div style={{ height: '38px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <p style={{
              margin: 0, fontFamily: 'Questrial, sans-serif',
              fontSize: '18px', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.18px',
              color: '#414141', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              Built for the big screen.
            </p>
          </div>
          <p style={{
            margin: 0, fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '14px', fontWeight: 400, lineHeight: 1.4,
            color: '#757575', height: '70px', overflow: 'hidden',
          }}>
            Some tools need room to breathe. Open this on your desktop for the full experience.
          </p>
          <button
            onClick={copyLink}
            style={{
              marginTop: '8px', width: '100%', height: '48px',
              backgroundColor: copied ? '#3BAA6E' : '#005AFF',
              border: 'none', borderRadius: '5px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              fontFamily: 'Questrial, sans-serif', fontSize: '18px', fontWeight: 400,
              lineHeight: 1.2, letterSpacing: '-0.18px', color: '#ffffff',
              transition: 'background-color 200ms',
            }}
          >
            {copied ? <><Check size={18} strokeWidth={2} /> Copied!</> : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  )
}
