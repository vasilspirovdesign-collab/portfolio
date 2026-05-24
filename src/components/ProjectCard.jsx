import { useState } from 'react'
import projectBg from '../assets/project-bg.png'

const projectScreenshot = 'https://www.figma.com/api/mcp/asset/7e5cfbd8-a6b1-46d7-a671-58627c881835'

export default function ProjectCard({ title = 'Opus Edu', description, dark, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '329px',
        flexShrink: 0,
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: dark ? '#1e1f26' : '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s',
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: '219px', width: '100%', overflow: 'hidden' }}>
        <img src={projectBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src={projectScreenshot} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(0,115,242,0.08)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          borderRadius: '8px',
        }} />
      </div>

      {/* Text area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px' }}>
        <p style={{
          margin: 0, fontSize: '22px', fontWeight: 600, lineHeight: '28px',
          color: hovered ? '#0073f2' : (dark ? '#f3f4f6' : '#414141'),
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          transition: 'color 0.2s ease',
        }}>
          {title}
        </p>
        {description && (
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.18px', color: '#757575' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
