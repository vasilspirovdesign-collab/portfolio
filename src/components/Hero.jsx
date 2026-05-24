import cvImage from '../assets/hero.png'
const vector1 = 'https://www.figma.com/api/mcp/asset/6c62d461-a7ad-44c1-b7f0-a941b5baa6bb'
const vector2 = 'https://www.figma.com/api/mcp/asset/a7193f65-b69c-418a-9bde-2ebb953d62d3'
const vector3 = 'https://www.figma.com/api/mcp/asset/1f5110bf-413a-4a38-a35b-d2e173c09d30'
const vector4 = 'https://www.figma.com/api/mcp/asset/a2526127-f3e2-41be-b9dc-16b877278789'
const mailIcon = 'https://www.figma.com/api/mcp/asset/c8f6d577-7c9c-41ea-860f-5b56cbf7c50b'
const phoneIcon = 'https://www.figma.com/api/mcp/asset/fc8b9b30-8aba-4482-a0ac-44f18a1a2b11'
const downloadIcon = 'https://www.figma.com/api/mcp/asset/29d900c3-1b89-4b75-adc4-dcb11eed4e93'

const cardShadow = {
  boxShadow:
    '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)',
}

const contactCardShadow = {
  boxShadow:
    '1px 1px 12px 0px rgba(65,65,65,0.07), -2px -2px 20px 0px rgba(117,117,117,0.08), 5px -3px 30px 0px rgba(117,117,117,0.1)',
}

export default function Hero() {
  return (
    <div
      className="relative h-[431px] w-full overflow-hidden rounded-[16px]"
      style={{ background: 'linear-gradient(to right, #00b0f1, #0073f2)' }}
    >
      {/* Decorative background vectors */}
      <div className="pointer-events-none absolute inset-0">
        <img src={vector1} alt="" className="absolute right-[5%] top-[-20%] h-[140%] w-auto opacity-80" />
        <img src={vector2} alt="" className="absolute bottom-[-7%] right-[5%] h-[50%] w-auto opacity-80" />
        <img src={vector3} alt="" className="absolute right-[-1%] top-[-20%] h-[140%] w-auto opacity-60" />
        <img src={vector4} alt="" className="absolute right-[-5%] top-[-24%] h-[155%] w-auto opacity-50" />
      </div>

      {/* CV / Resume card */}
      <div
        className="absolute left-[30px] top-[30px] w-[612px] overflow-hidden rounded-[8px]"
        style={{ height: '615px', ...cardShadow }}
      >
        <img
          src={cvImage}
          alt="Vasil Spirov resume"
          className="absolute left-0 top-0 w-full"
          style={{ height: '128.78%', maxWidth: 'none', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      {/* Contact info card */}
      <div
        className="absolute overflow-hidden rounded-[7px] bg-[#fafafa]"
        style={{ left: '874px', top: '232px', width: '484px', ...contactCardShadow }}
      >
        {/* Email row */}
        <div className="flex h-[87px] items-center justify-center gap-[8px] px-[24px]">
          <img src={mailIcon} alt="" className="size-[24px] shrink-0" />
          <span className="text-[20px] font-medium leading-[1.35] text-[#757575]">
            vasilspirovdesign@gmail.com
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d0d2d0]" />

        {/* Phone + Resume row */}
        <div className="flex items-center justify-center gap-[22px] px-[24px] py-[20px]">
          <div className="flex items-center gap-[8px]">
            <img src={phoneIcon} alt="" className="size-[24px] shrink-0" />
            <span className="text-[20px] font-medium leading-[1.35] text-[#757575]">
              +359878517684
            </span>
          </div>

          <div className="h-[48px] w-px bg-[#d0d2d0]" />

          <a
            href="#"
            className="flex w-[192px] items-center gap-[8px] text-[20px] font-medium leading-[1.35] text-[#757575] no-underline transition-colors hover:text-[#414141]"
          >
            <img src={downloadIcon} alt="" className="size-[24px] shrink-0" />
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
