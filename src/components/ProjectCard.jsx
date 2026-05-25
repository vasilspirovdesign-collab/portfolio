import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { t } from '../theme'
import opusEduCover from '../assets/opus-edu-cover.png'

const checkerboard = {
  backgroundImage: `linear-gradient(45deg, #e8e8e8 25%, transparent 25%),
    linear-gradient(-45deg, #e8e8e8 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e8e8e8 75%),
    linear-gradient(-45deg, transparent 75%, #e8e8e8 75%)`,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
  backgroundColor: '#f5f5f5',
}

export default function ProjectCard({ title = 'Opus Edu', description, dark: isDark, onClick, empty }) {
  const [hovered, setHovered] = useState(false)
  const skeletonColor = isDark ? '#555555' : '#e0e0e0'

  if (empty) {
    return (
      <div
        className="transition-colors duration-300"
        style={{
          width: '329px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden',
          backgroundColor: t(isDark, 'cardBg'),
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}
      >
        {/* Empty image area */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '329 / 219', ...checkerboard }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, ${t(isDark, 'cardBg')}, transparent)`,
          }} />
        </div>

        {/* Skeleton text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', height: '136px' }}>
          <div style={{ height: '38px', borderRadius: '4px', backgroundColor: skeletonColor, width: '305px' }} />
          <div style={{ height: '16px', borderRadius: '4px', backgroundColor: skeletonColor, width: '305px' }} />
          <div style={{ height: '16px', borderRadius: '4px', backgroundColor: skeletonColor, width: '266px' }} />
          <div style={{ height: '16px', borderRadius: '4px', backgroundColor: skeletonColor, width: '266px' }} />
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        width: '329px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden',
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
        <img src={opusEduCover} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            margin: 0, fontFamily: 'Geist, system-ui, sans-serif',
            fontSize: '14px', fontWeight: 400, lineHeight: 1.2,
            color: t(isDark, 'muted'),
            height: '70px', overflow: 'hidden',
          }}>
            {description}
          </p>
        )}

        {/* Arrow button — visible on hover */}
        <div style={{
          position: 'absolute', left: '261px', top: '68px',
          width: '56px', height: '56px', borderRadius: '38.5px',
          backgroundColor: 'rgba(250, 250, 250, 0.88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)',
        }}>
          <ArrowRight size={26.5} color={t(isDark, 'text')} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
