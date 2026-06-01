import { useState } from 'react'
import { t } from '../theme'
import opusEduCover from '../assets/opus-edu-cover.png'
import opusAICover from '../assets/opus-ai-cover.png'
import hederaThumb from '../assets/hedera-thumb.png'
import carbonchainThumb from '../assets/carbonchain-thumb.png'
import abuDhabiThumb from '../assets/abu-dhabi-thumb.png'
import bnbThumb from '../assets/bnb-thumb.png'
import metawinThumb from '../assets/metawin-thumb.png'
import limechainThumb from '../assets/limechain-thumb.png'
import isoqThumb from '../assets/iso-q-thumb.png'
import hederaMultisigThumb from '../assets/hedera-multisig-thumb.png'

const THUMBNAILS = {
  'Opus Edu': opusEduCover,
  'Opus Edu AI': opusAICover,
  'Hedera Transaction Tool': hederaThumb,
  'Rowan Carbon Chain': carbonchainThumb,
  'Explore Abu Dhabi': abuDhabiThumb,
  'Binomial': bnbThumb,
  'Metawin': metawinThumb,
  'LimeCN Web3 Design System': limechainThumb,
  'ISO-Q Investment Platform': isoqThumb,
  'Hedera MultiSig': hederaMultisigThumb,
}

export default function ProjectCard({ title = 'Opus Edu', description, dark: isDark, onClick, empty, visited = false }) {
  const [hovered, setHovered] = useState(false)

  if (empty) {
    return <div aria-hidden="true" style={{ width: '340px', flexShrink: 0 }} />
  }

  const borderColor = isDark ? '#414141' : hovered ? '#e0e0e0' : '#f0f0f0'

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.() } }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View ${title} project` : undefined}
      style={{
        width: '340px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden',
        backgroundColor: t(isDark, 'cardBg'),
        border: `1px solid ${borderColor}`,
        cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'border-color 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '329 / 219', overflow: 'hidden', position: 'relative' }}>
        <img src={THUMBNAILS[title] || opusEduCover} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {visited && (
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
            style={{ position: 'absolute', top: '8px', left: '8px' }}
            aria-hidden="true">
            <defs>
              <linearGradient id="vc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stopColor="#00B5F1" />
                <stop offset="1" stopColor="#0070F2" />
              </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="28" fill="none" />
            <path d="M17 28.5L24 35.5L39 20.5" stroke="url(#vc)" strokeWidth="2.52381" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px', height: '136px' }}>
        <div style={{ height: '38px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <p style={{
            margin: 0, fontFamily: 'Questrial, sans-serif',
            fontSize: '18px', fontWeight: 400, lineHeight: 1.2,
            letterSpacing: '-0.18px',
            color: visited ? (isDark ? '#a0a0a0' : '#414141') : (isDark ? '#ffffff' : t(isDark, 'text')),
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%',
          }}>
            {title}
          </p>
        </div>
        {description && (
          <p style={{
            margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: '14px', fontWeight: 400, lineHeight: 1.4,
            color: t(isDark, 'muted'),
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {description}
          </p>
        )}

        {/* Arrow button - visible on hover */}
        <div style={{
          position: 'absolute', right: '12px', bottom: '12px',
          width: '56px', height: '56px', borderRadius: '38.5px',
          backgroundColor: isDark ? '#2e2e2e' : '#f0f0f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)',
        }}>
          <svg width="26.5" height="26.5" viewBox="0 0 26.5 26.5" fill="none" overflow="visible" aria-hidden="true">
            <defs>
              <linearGradient id="cardArrow" x1="8.876" y1="12.634" x2="16.833" y2="15.833" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B5F1" />
                <stop offset="1" stopColor="#0070F2" />
              </linearGradient>
            </defs>
            <path d="M5.52083 13.25H20.9792M13.25 20.9792L20.9792 13.25L13.25 5.52083" stroke="url(#cardArrow)" strokeWidth="2.52381" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  )
}
