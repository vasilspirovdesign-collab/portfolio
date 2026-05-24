const lightbulbIcon = 'https://www.figma.com/api/mcp/asset/e6d73aa0-b379-4a8d-a7a6-a320b1de7cb9'

const NAV_LINKS = ['Projects', 'Workflow', 'About Me']

function ShopIcon({ dark }) {
  const color = dark ? '#f3f4f6' : '#414141'
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 20C17.5 16.41 20.41 13.5 24 13.5C27.59 13.5 30.5 16.41 30.5 20"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"
      />
      <rect x="13" y="20" width="22" height="16" rx="2" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export default function Navbar({ dark, onToggle, onNavigate, page }) {
  return (
    <nav
      className="flex h-[92px] items-center justify-between border-b px-[30px] transition-colors duration-300"
      style={{
        backgroundColor: dark ? '#16171d' : '#ffffff',
        borderColor: dark ? '#2e303a' : '#d0d2d0',
      }}
    >
      <div className="flex flex-1 items-center gap-[24px]">
        <button
          onClick={() => onNavigate('home')}
          className="cursor-pointer border-none bg-transparent p-0"
        >
          <ShopIcon dark={dark} />
        </button>
        <div
          className="h-[26px] w-px transition-colors duration-300"
          style={{ backgroundColor: dark ? '#2e303a' : '#d0d2d0' }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '28px',
            color: dark ? '#f3f4f6' : '#414141',
            fontFeatureSettings: "'liga' 0",
            transition: 'color 0.3s',
          }}
        >
          Vasil Spirov
        </span>
      </div>

      <div className="flex items-center gap-[58px]">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link.toLowerCase().replace(/\s+/g, '-'))}
            style={{
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              padding: 0,
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '22px',
              fontWeight: 600,
              lineHeight: '28px',
              color: dark ? '#d0d2d0' : '#757575',
              fontFeatureSettings: "'liga' 0",
              letterSpacing: 0,
              textDecoration: page === link.toLowerCase().replace(' ', '-') ? 'underline' : 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex flex-1 justify-end">
        <button
          onClick={onToggle}
          className="size-[24px] cursor-pointer border-none bg-transparent p-0"
          aria-label="Toggle theme"
        >
          <img
            src={lightbulbIcon}
            alt=""
            className="size-full transition-opacity duration-300"
            style={{ filter: dark ? 'invert(1) brightness(2)' : 'none' }}
          />
        </button>
      </div>
    </nav>
  )
}
