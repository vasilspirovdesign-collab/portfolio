import { LightbulbOff } from 'lucide-react'
import { t } from '../theme'

const NAV_LINKS = ['Projects', 'Workflow', 'About Me']

export default function Navbar({ dark: isDark, onToggle, onNavigate, page }) {
  return (
    <nav style={{
      display: 'flex', height: '94px', alignItems: 'center',
      justifyContent: 'space-between', padding: '31px 30px',
      borderBottom: `1px solid ${t(isDark, 'border')}`,
      backgroundColor: t(isDark, 'navBg'),
      transition: 'background-color 0.3s, border-color 0.3s',
    }}>

      {/* Left: name + divider + Portfolio label */}
      <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '24px', minWidth: 0 }}>
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '22px', fontWeight: 600, lineHeight: '28px',
            color: t(isDark, 'text'),
            fontFeatureSettings: "'liga' 0",
            whiteSpace: 'nowrap',
            transition: 'color 0.3s',
          }}>
            Vasil Spirov
          </span>
        </button>
        <div style={{ width: '1px', height: '26px', backgroundColor: t(isDark, 'border'), flexShrink: 0 }} />
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px', fontWeight: 500, lineHeight: 1.2,
          letterSpacing: '-0.18px',
          color: t(isDark, 'muted'),
          whiteSpace: 'nowrap',
          transition: 'color 0.3s',
        }}>
          Portfolio
        </span>
      </div>

      {/* Center: nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '58px', flexShrink: 0 }}>
        {NAV_LINKS.map((link) => {
          const key = link.toLowerCase().replace(/\s+/g, '-')
          const isActive = page === key
          return (
            <button
              key={link}
              onClick={() => onNavigate(key)}
              style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '18px', fontWeight: 500,
                lineHeight: 1.2, letterSpacing: '-0.18px',
                color: isActive ? t(isDark, 'text') : t(isDark, 'muted'),
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = t(isDark, 'text')}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = t(isDark, 'muted') }}
            >
              {link}
            </button>
          )
        })}
      </div>

      {/* Right: theme toggle */}
      <div style={{ display: 'flex', flex: '1 0 0', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0 }}>
        <button onClick={onToggle} aria-label="Toggle theme" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
          <LightbulbOff size={24} color={t(isDark, 'text')} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  )
}
