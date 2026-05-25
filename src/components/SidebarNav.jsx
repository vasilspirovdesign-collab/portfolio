import { useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { t } from '../theme'
import { navLabel } from '../styles'

export default function SidebarNav({ dark, tabs, activeTab, onTabChange }) {
  const [hovered, setHovered] = useState(null)
  const textSecondary = dark ? '#a2a3a5' : '#757575'

  return (
    <aside style={{ width: '436px', flexShrink: 0, padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', boxSizing: 'border-box' }}>
      {tabs.map((tab, i) => {
        const isExternal = typeof tab === 'object' && tab.href
        const label = isExternal ? tab.label : tab
        const isActive = !isExternal && tab === activeTab

        const handleClick = () => {
          if (isExternal) {
            window.open(tab.href, '_blank', 'noopener,noreferrer')
          } else {
            onTabChange?.(tab)
          }
        }

        const isHovered = hovered === i

        return (
          <div
            key={`${label}-${i}`}
            onClick={handleClick}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              width: '376px', height: '72px', padding: '0 16px', borderRadius: '8px',
              cursor: 'pointer', backgroundColor: isActive ? t(dark, 'border') : 'transparent',
              boxSizing: 'border-box', flexShrink: 0,
              transition: 'background-color 400ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <span
              style={{
                ...navLabel,
                color: isExternal ? '#005AFF' : (isActive ? (dark ? '#d0d2d0' : '#171717') : (isHovered ? (dark ? '#d0d2d0' : '#171717') : textSecondary)),
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                flex: 1,
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'color 400ms cubic-bezier(0.22, 1, 0.36, 1)',
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
