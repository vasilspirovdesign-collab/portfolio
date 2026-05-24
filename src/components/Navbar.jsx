const shopIcon = 'https://www.figma.com/api/mcp/asset/66b10c40-2e8f-4b1c-be20-0569e5a0799b'
const lightbulbIcon = 'https://www.figma.com/api/mcp/asset/e6d73aa0-b379-4a8d-a7a6-a320b1de7cb9'

const NAV_LINKS = ['Projects', 'Workflow', 'About Me']

export default function Navbar() {
  return (
    <nav className="flex h-[92px] items-center justify-between border-b border-[#d0d2d0] bg-white px-[30px]">
      <div className="flex flex-1 items-center gap-[24px]">
        <img src={shopIcon} alt="" className="size-[48px] shrink-0" />
        <div className="h-[26px] w-px bg-[#d0d2d0]" />
        <span
          className="text-[22px] font-semibold leading-[28px] text-[#414141]"
          style={{ fontFeatureSettings: "'liga' 0" }}
        >
          Vasil Spirov
        </span>
      </div>

      <div className="flex items-center gap-[58px]">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[22px] font-semibold leading-[28px] text-[#757575] transition-colors hover:text-[#414141]"
            style={{ fontFeatureSettings: "'liga' 0" }}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex flex-1 justify-end">
        <button className="size-[24px] cursor-pointer border-none bg-transparent p-0">
          <img src={lightbulbIcon} alt="Toggle theme" className="size-full" />
        </button>
      </div>
    </nav>
  )
}
