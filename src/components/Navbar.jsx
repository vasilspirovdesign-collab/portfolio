const shopIconAsset = 'https://www.figma.com/api/mcp/asset/e31d7205-049d-4ef4-add0-bd22c3e2146d'
const lightbulbIcon = 'https://www.figma.com/api/mcp/asset/d0d17838-9071-493d-9879-18e1a6609157'

const NAV_LINKS = ['Projects', 'Workflow', 'About Me']

function ShopIcon({ dark }) {
  return (
    <div style={{ position: 'relative', width: '48px', height: '48px', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: '27.59%', right: '30.56%', bottom: '27.59%', left: '29.86%' }}>
        <div style={{ position: 'absolute', top: '-5%', right: '-5.66%', bottom: '-5%', left: '-5.66%' }}>
          <img
            src={shopIconAsset}
            alt=""
            style={{
              display: 'block', width: '100%', height: '100%', maxWidth: 'none',
              filter: dark ? 'invert(1) brightness(2)' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Navbar({ dark, onToggle, onNavigate, page }) {
  const bg = dark ? '#16171d' : '#ffffff'
  const border = dark ? '#2e303a' : '#d0d2d0'

  return (
    <nav style={{
      display: 'flex', height: '92px', alignItems: 'center',
      justifyContent: 'space-between', padding: '31px 30px',
      borderBottom: `1px solid ${border}`,
      backgroundColor: bg, transition: 'background-color 0.3s, border-color 0.3s',
    }}>

      {/* Left: logo + name */}
      <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '24px', minWidth: 0 }}>
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ShopIcon dark={dark} />
        </button>

        {/* Vertical divider */}
        <div style={{ width: '1px', height: '26px', backgroundColor: dark ? '#2e303a' : '#d0d2d0', flexShrink: 0 }} />

        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '22px', fontWeight: 600, lineHeight: '28px',
          color: dark ? '#f3f4f6' : '#414141',
          fontFeatureSettings: "'liga' 0",
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          width: '359px', flexShrink: 0,
          transition: 'color 0.3s',
        }}>
          Vasil Spirov
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
                color: isActive ? (dark ? '#f3f4f6' : '#414141') : (dark ? '#d0d2d0' : '#757575'),
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = dark ? '#f3f4f6' : '#414141'}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = dark ? '#d0d2d0' : '#757575'
              }}
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
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '24px', height: '24px', display: 'block', position: 'relative' }}
        >
          <img
            src={lightbulbIcon}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', maxWidth: 'none', filter: dark ? 'invert(1) brightness(2)' : 'none' }}
          />
        </button>
      </div>
    </nav>
  )
}
