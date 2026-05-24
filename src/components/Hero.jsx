import cvImage from '../assets/hero.png'

const vector1 = 'https://www.figma.com/api/mcp/asset/6c62d461-a7ad-44c1-b7f0-a941b5baa6bb'
const vector2 = 'https://www.figma.com/api/mcp/asset/a7193f65-b69c-418a-9bde-2ebb953d62d3'
const vector3 = 'https://www.figma.com/api/mcp/asset/1f5110bf-413a-4a38-a35b-d2e173c09d30'
const vector4 = 'https://www.figma.com/api/mcp/asset/a2526127-f3e2-41be-b9dc-16b877278789'
const mailIcon = 'https://www.figma.com/api/mcp/asset/c8f6d577-7c9c-41ea-860f-5b56cbf7c50b'
const phoneIcon = 'https://www.figma.com/api/mcp/asset/fc8b9b30-8aba-4482-a0ac-44f18a1a2b11'
const downloadIcon = 'https://www.figma.com/api/mcp/asset/29d900c3-1b89-4b75-adc4-dcb11eed4e93'

const cvShadow = '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)'
const cardShadow = '1px 1px 12px 0px rgba(65,65,65,0.07), -2px -2px 20px 0px rgba(117,117,117,0.08), 5px -3px 30px 0px rgba(117,117,117,0.1)'

export default function Hero() {
  return (
    <div
      style={{
        position: 'relative',
        height: '431px',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '16px',
        background: 'linear-gradient(to right, #00b0f1, #0073f2)',
        flexShrink: 0,
      }}
    >
      {/* Decorative vectors */}
      <img src={vector1} alt="" style={{ position: 'absolute', right: '5%', top: '-20%', height: '140%', width: 'auto', opacity: 0.8, pointerEvents: 'none' }} />
      <img src={vector2} alt="" style={{ position: 'absolute', bottom: '-7%', right: '5%', height: '50%', width: 'auto', opacity: 0.8, pointerEvents: 'none' }} />
      <img src={vector3} alt="" style={{ position: 'absolute', right: '-1%', top: '-20%', height: '140%', width: 'auto', opacity: 0.6, pointerEvents: 'none' }} />
      <img src={vector4} alt="" style={{ position: 'absolute', right: '-5%', top: '-24%', height: '155%', width: 'auto', opacity: 0.5, pointerEvents: 'none' }} />

      {/* CV card */}
      <div
        style={{
          position: 'absolute',
          left: '30px',
          top: '30px',
          width: '612px',
          height: '615px',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: cvShadow,
        }}
      >
        <img
          src={cvImage}
          alt="Vasil Spirov resume"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            maxWidth: 'none',
            display: 'block',
          }}
        />
      </div>

      {/* Contact card */}
      <div
        style={{
          position: 'absolute',
          left: '874px',
          top: '232px',
          width: '484px',
          overflow: 'hidden',
          borderRadius: '7px',
          backgroundColor: '#fafafa',
          boxShadow: cardShadow,
        }}
      >
        {/* Email row */}
        <div style={{ display: 'flex', height: '87px', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0 24px' }}>
          <img src={mailIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
          <span style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.35, color: '#757575' }}>
            vasilspirovdesign@gmail.com
          </span>
        </div>

        <div style={{ height: '1px', backgroundColor: '#d0d2d0' }} />

        {/* Phone + Resume row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={phoneIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
            <span style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.35, color: '#757575' }}>
              +359878517684
            </span>
          </div>
          <div style={{ width: '1px', height: '48px', backgroundColor: '#d0d2d0' }} />
          <a
            href="#"
            style={{ display: 'flex', width: '192px', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: 500, lineHeight: 1.35, color: '#757575', textDecoration: 'none' }}
          >
            <img src={downloadIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
