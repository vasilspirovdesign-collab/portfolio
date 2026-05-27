import { useState, useEffect, useCallback } from 'react'
import mobileBg from '../assets/mobile-bg.png'
import shape1 from '../assets/mobile-shape-1.svg'
import shape2 from '../assets/mobile-shape-2.svg'
import shape3 from '../assets/mobile-shape-3.svg'
import shape4 from '../assets/mobile-shape-4.svg'

export default function MobileModal() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const check = () => setVisible(window.innerWidth < 1200)
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-modal-title"
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding: '24px',
      }}>
      <div style={{
        width: '329px', borderRadius: '8px', overflow: 'hidden',
        backgroundColor: '#ffffff',
        border: '1px solid #d0d2d0',
        display: 'flex', flexDirection: 'column', gap: '8px',
      }}>
        {/* Image area */}
        <div style={{
          width: '100%', aspectRatio: '329 / 219', position: 'relative',
          borderBottom: '1px solid #d0d2d0', overflow: 'hidden', flexShrink: 0,
        }}>
          <img src={mobileBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', backgroundColor: '#ffffff', height: '234px', left: 0, top: 0, width: '329px', borderRadius: '8px' }} />
          {/* 3D shape */}
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '185.569px', left: '50px', top: '17px', width: '203.996px' }}>
            <div style={{ flexShrink: 0, transform: 'rotate(175.63deg)' }}>
              <div style={{ height: '171.487px', position: 'relative', width: '191.496px' }}>
                <div style={{ position: 'absolute', inset: '4.44% 13.91% 0 0' }}>
                  <img src={shape1} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', inset: '33.4% 0 3.06% 29.15%' }}>
                  <img src={shape2} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', inset: '0 55.67% 3.06% 12.68%' }}>
                  <img src={shape3} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', inset: '0 0 49.64% 26.63%' }}>
                  <img src={shape4} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text + button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px', flexShrink: 0 }}>
          <div style={{ height: '38px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <p id="mobile-modal-title" style={{
              margin: 0, fontFamily: 'Questrial, sans-serif',
              fontSize: '18px', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.18px',
              color: '#414141', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              Built for the big screen.
            </p>
          </div>
          <p style={{
            margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: '14px', fontWeight: 400, lineHeight: 1.4,
            color: '#757575',
          }}>
            Some tools need room to breathe. Open this on your desktop for the full experience.
          </p>
          <button
            onClick={copyLink}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            style={{
              marginTop: '8px', width: '100%', height: '48px', flexShrink: 0,
              backgroundColor: pressed ? '#0044CC' : '#005AFF',
              border: 'none', borderRadius: '5px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Questrial, sans-serif', fontSize: '18px', fontWeight: 400,
              lineHeight: 1.2, letterSpacing: '-0.18px', color: '#ffffff',
              transition: 'background-color 150ms, transform 150ms',
              transform: pressed ? 'scale(0.97)' : 'scale(1)',
            }}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  )
}
