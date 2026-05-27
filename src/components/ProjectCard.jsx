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

const THUMBNAILS = {
  'Opus Edu': opusEduCover,
  'Opus Edu AI': opusAICover,
  'Hedera Transaction Tool': hederaThumb,
  'Rowan Carbon Chain': carbonchainThumb,
  'Explore Abu Dhabi': abuDhabiThumb,
  'Binomial': bnbThumb,
  'Metawin': metawinThumb,
  'Limechain Design System': limechainThumb,
}

export default function ProjectCard({ title = 'Opus Edu', description, dark: isDark, onClick, empty }) {
  const [hovered, setHovered] = useState(false)

  if (empty) {
    return <div aria-hidden="true" style={{ width: '340px', flexShrink: 0 }} />
  }

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.() } }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View ${title} project` : undefined}
      className="transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        width: '340px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden',
        backgroundColor: t(isDark, 'cardBg'),
        cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px',
        boxShadow: hovered
          ? '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '329 / 219', overflow: 'hidden' }}>
        <img src={THUMBNAILS[title] || opusEduCover} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Text */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', height: '136px' }}>
        <div style={{ height: '38px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <p style={{
            margin: 0, fontFamily: 'Questrial, sans-serif',
            fontSize: '18px', fontWeight: 400, lineHeight: 1.2,
            letterSpacing: '-0.18px',
            color: t(isDark, 'text'),
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
          width: '40px', height: '40px', borderRadius: '38.5px',
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
