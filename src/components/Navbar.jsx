import { Moon, Sun } from 'lucide-react'
import { t } from '../theme'

const NAV_LINKS = ['Projects', 'Workflow', 'About Me']

export default function Navbar({ dark: isDark, onToggle, onNavigate, page }) {
  return (
    <nav
      aria-label="Main navigation"
      className="transition-[background-color,border-color] duration-300"
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', height: '64px', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 30px',
        borderBottom: `1px solid ${t(isDark, 'border')}`,
        backgroundColor: t(isDark, 'navBg'),
      }}
    >
      {/* Left: name */}
      <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '8px', minWidth: 0 }}>
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span
            className="transition-colors duration-300"
            style={{
              fontFamily: 'Questrial, sans-serif',
              fontSize: '22px', fontWeight: 400, lineHeight: '28px',
              color: t(isDark, 'text'),
              fontFeatureSettings: "'liga' 0",
              whiteSpace: 'nowrap',
            }}
          >
            Vasil Spirov
          </span>
        </button>
      </div>

      {/* Center: nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '58px', flexShrink: 0 }}>
        {NAV_LINKS.map((link) => {
          const key = link.toLowerCase().replace(/\s+/g, '-')
          return (
            <button
              key={link}
              onClick={() => onNavigate(key)}
              aria-current={page === key ? 'page' : undefined}
              className="transition-colors duration-200"
              style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'Questrial, sans-serif',
                fontSize: '18px', fontWeight: 400,
                lineHeight: 1.2, letterSpacing: '-0.18px',
                color: t(isDark, 'muted'),
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = t(isDark, 'text')}
              onMouseLeave={e => e.currentTarget.style.color = t(isDark, 'muted')}
            >
              {link}
            </button>
          )
        })}
      </div>

      {/* Right: theme toggle */}
      <div style={{ display: 'flex', flex: '1 0 0', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0 }}>
        <button
          onClick={onToggle}
          aria-label="Toggle theme"
          className="icon-btn transition-opacity duration-200 hover:opacity-70"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
        >
          {isDark ? <Sun size={24} color={t(isDark, 'text')} strokeWidth={1.5} /> : <Moon size={24} color={t(isDark, 'text')} strokeWidth={1.5} />}
        </button>
      </div>
    </nav>
  )
}
