import { useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { t } from '../theme'
import { navLabel } from '../styles'

export default function SidebarNav({ dark, tabs, activeTab, onTabChange }) {
  const [hovered, setHovered] = useState(null)
  const textSecondary = dark ? '#a2a3a5' : '#757575'

  return (
    <aside style={{ width: '436px', flexShrink: 0, padding: '30px', display: 'flex', flexDirection: 'column' }}>
      {tabs.map((tab, i) => {
        const isExternal = typeof tab === 'object' && tab.href
        const label = isExternal ? tab.label : tab
        const isActive = !isExternal && tab === activeTab
        const isHovered = hovered === i
        const bg = isActive
          ? t(dark, 'border')
          : isHovered
            ? (dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)')
            : 'transparent'

        const handleClick = () => {
          if (isExternal) {
            window.open(tab.href, '_blank', 'noopener,noreferrer')
          } else {
            onTabChange?.(tab)
          }
        }

        return (
          <div
            key={`${label}-${i}`}
            onClick={handleClick}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="transition-colors duration-200"
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              height: '72px', padding: '0 16px', borderRadius: '8px',
              cursor: 'pointer', backgroundColor: bg,
            }}
          >
            <span
              className="transition-colors duration-200"
              style={{
                ...navLabel,
                color: isExternal ? '#005AFF' : (isActive ? (dark ? '#d0d2d0' : '#171717') : textSecondary),
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                width: '279px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}
            >
              {label}
              {isExternal && <SquareArrowOutUpRight size={18} strokeWidth={1.75} style={{ flexShrink: 0 }} />}
            </span>
          </div>
        )
      })}
    </aside>
  )
}
