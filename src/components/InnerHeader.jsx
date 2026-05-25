import { Fragment } from 'react'
import { Home, Moon, Sun } from 'lucide-react'
import { t } from '../theme'
import { navLabel, breadcrumbSep } from '../styles'

export default function InnerHeader({ dark, onToggle, onHome, crumbs }) {
  const textPrimary = dark ? '#d0d2d0' : '#414141'
  const textSecondary = dark ? '#a2a3a5' : '#757575'
  const border = t(dark, 'border')

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', height: '94px', alignItems: 'center',
      padding: '31px 30px', gap: '24px',
      borderBottom: `1px solid ${border}`,
      backgroundColor: t(dark, 'bg'),
      transition: 'background-color 0.3s',
    }}>
      <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '16px', minWidth: 0 }}>
        <button onClick={onHome} aria-label="Go home" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}>
          <Home size={24} color={textPrimary} strokeWidth={1.5} />
        </button>
        {crumbs.map((crumb, i) => {
          const isActiveLast = !crumb.onClick && i === crumbs.length - 1 && crumbs.length > 1
          const color = crumb.onClick ? textSecondary : (isActiveLast ? (dark ? '#d0d2d0' : '#171717') : textSecondary)
          return (
            <Fragment key={i}>
              <span style={{ ...breadcrumbSep, color: border, flexShrink: 0 }}>/</span>
              {crumb.onClick ? (
                <button
                  onClick={crumb.onClick}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, ...navLabel, color, whiteSpace: 'nowrap', flexShrink: 0 }}
                >
                  {crumb.label}
                </button>
              ) : (
                <span style={{ ...navLabel, color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {crumb.label}
                </span>
              )}
            </Fragment>
          )
        })}
      </div>
      <div style={{ display: 'flex', flex: '1 0 0', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0 }}>
        <button onClick={onToggle} aria-label="Toggle theme" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
          {dark ? <Sun size={24} color={textPrimary} strokeWidth={1.5} /> : <Moon size={24} color={textPrimary} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  )
}
