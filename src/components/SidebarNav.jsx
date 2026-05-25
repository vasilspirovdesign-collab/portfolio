import { t } from '../theme'
import { navLabel } from '../styles'

export default function SidebarNav({ dark, tabs, activeTab, onTabChange }) {
  const textSecondary = dark ? '#a2a3a5' : '#757575'

  return (
    <aside style={{ width: '436px', flexShrink: 0, padding: '30px', display: 'flex', flexDirection: 'column' }}>
      {tabs.map((tab, i) => {
        const isActive = tab === activeTab
        return (
          <div
            key={`${tab}-${i}`}
            onClick={() => onTabChange?.(tab)}
            style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              height: '72px', padding: '0 16px', borderRadius: '8px', cursor: 'pointer',
              backgroundColor: isActive ? t(dark, 'border') : 'transparent',
              transition: 'background-color 0.2s',
            }}
          >
            <span style={{
              ...navLabel,
              color: isActive ? (dark ? '#d0d2d0' : '#171717') : textSecondary,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              width: '279px',
              transition: 'color 0.2s',
            }}>
              {tab}
            </span>
          </div>
        )
      })}
    </aside>
  )
}
