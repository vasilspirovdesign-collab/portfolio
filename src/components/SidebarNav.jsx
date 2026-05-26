import { useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { t } from '../theme'
import { navLabel } from '../styles'

export default function SidebarNav({ dark, tabs, activeTab, onTabChange }) {
  const [hovered, setHovered] = useState(null)
  const textSecondary = dark ? '#a2a3a5' : '#757575'

  return (
    <aside aria-label="Page sections" style={{ width: '436px', flexShrink: 0, padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', boxSizing: 'border-box', position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', alignSelf: 'flex-start', overflowY: 'auto' }}>
      {tabs.map((tab, i) => {
        const isExternal = typeof tab === 'object' && tab.href
        const isNavLink = typeof tab === 'object' && tab.onClick
        const label = (isExternal || isNavLink) ? tab.label : tab
        const isActive = !isExternal && !isNavLink && tab === activeTab

        const handleClick = () => {
          if (isExternal) {
            window.open(tab.href, '_blank', 'noopener,noreferrer')
          } else if (isNavLink) {
            tab.onClick()
          } else {
            onTabChange?.(tab)
          }
        }

        const isHovered = hovered === i

        return (
          <button
            key={`${label}-${i}`}
            onClick={handleClick}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            aria-current={isActive ? 'page' : undefined}
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              width: '376px', height: '72px', padding: '0 16px', borderRadius: '8px',
              cursor: 'pointer', backgroundColor: isActive ? t(dark, 'border') : 'transparent',
              boxSizing: 'border-box', flexShrink: 0,
              border: 'none', background: isActive ? t(dark, 'border') : 'transparent',
              transition: 'background-color 400ms cubic-bezier(0.22, 1, 0.36, 1)',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                ...navLabel,
                color: (isExternal || isNavLink) ? '#005AFF' : (isActive ? (dark ? '#d0d2d0' : '#171717') : (isHovered ? (dark ? '#d0d2d0' : '#171717') : textSecondary)),
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                flex: 1,
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'color 400ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {label}
              {(isExternal || isNavLink) && <SquareArrowOutUpRight size={18} strokeWidth={1.75} style={{ flexShrink: 0 }} />}
            </span>
          </button>
        )
      })}
    </aside>
  )
}
