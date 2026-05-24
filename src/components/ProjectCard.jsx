import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { t } from '../theme'
import projectBg from '../assets/project-bg.png'

const projectScreenshot = 'https://www.figma.com/api/mcp/asset/ffdd4f66-7c5d-4d3f-9e87-14e2bd0e46c3'

export default function ProjectCard({ title = 'Opus Edu', description, dark: isDark, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '329px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden',
        backgroundColor: t(isDark, 'cardBg'),
        cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px',
        boxShadow: hovered
          ? '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, background-color 0.3s',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '329 / 219', overflow: 'hidden' }}>
        <img src={projectBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '329px', height: '234px', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={projectScreenshot} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Text */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', height: '136px' }}>
        <p style={{
          margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px', fontWeight: 500, lineHeight: 1.2,
          letterSpacing: '-0.18px',
          color: t(isDark, 'text'),
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {title}
        </p>
        {description && (
          <p style={{
            margin: 0, fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px', fontWeight: 400, lineHeight: 1.2,
            color: t(isDark, 'muted'),
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {description}
          </p>
        )}

        {/* Arrow button — visible on hover */}
        <div style={{
          position: 'absolute', left: '261px', top: '68px',
          width: '56px', height: '56px', borderRadius: '38.5px',
          backgroundColor: t(isDark, 'bg'),
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}>
          <ArrowRight size={26.5} color={t(isDark, 'text')} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
