import heroImage from '../assets/hero.jpg'

const mailIcon     = 'https://www.figma.com/api/mcp/asset/2fb53aaf-fbf3-421c-83ba-c6c85ea420eb'
const phoneIcon    = 'https://www.figma.com/api/mcp/asset/d682cee7-9b4f-44ed-b9a1-479512f9aa57'
const downloadIcon = 'https://www.figma.com/api/mcp/asset/260452f1-fe0b-493c-9d62-85bb175c7dff'

const cardShadow  = '1px 1px 12px 0px rgba(65,65,65,0.07), -2px -2px 20px 0px rgba(117,117,117,0.08), 5px -3px 30px 0px rgba(117,117,117,0.1)'
const innerShadow = 'inset 1px -1px 10px 0px rgba(255,255,255,0.15), inset 0px 1px 6px 0px rgba(240,240,240,0.06)'

const rowText = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: '18px', fontWeight: 400,
  lineHeight: 'normal', letterSpacing: '-0.18px',
  color: '#414141',
  whiteSpace: 'nowrap',
}

export default function Hero() {
  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
      <img src={heroImage} alt="Vasil Spirov" style={{ width: '100%', height: 'auto', display: 'block' }} />

      {/* Contact card — 874/1440 = 60.69% left, 232/431 = 53.83% top */}
      <div style={{
        position: 'absolute', left: '60.69%', top: '53.83%',
        width: '484px', borderRadius: '7px', overflow: 'hidden',
        boxShadow: cardShadow,
      }}>
        {/* Email row */}
        <div style={{
          position: 'relative',
          display: 'flex', flexDirection: 'column', height: '87px',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 24px', opacity: 0.88,
          borderBottom: '1px solid #d0d1d2',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fafafa', pointerEvents: 'none' }} />
          <a href="mailto:vasilspirovdesign@gmail.com" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src={mailIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
            <span style={rowText}>vasilspirovdesign@gmail.com</span>
          </a>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: innerShadow, pointerEvents: 'none' }} />
        </div>

        {/* Phone + Resume row */}
        <div style={{
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '22px', padding: '20px 24px', opacity: 0.88, overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fafafa', pointerEvents: 'none' }} />
          <a href="tel:+359878517684" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src={phoneIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
            <span style={rowText}>+359878517684</span>
          </a>
          <div style={{ position: 'relative', width: '1px', height: '48px', backgroundColor: '#d0d2d0', flexShrink: 0 }} />
          <a href="https://drive.google.com/file/d/1ZlRpfvm1xImduUqSnBE2k-Wq9W75dsbN/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'flex', width: '192px', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', ...rowText }}>
            <img src={downloadIcon} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
            Resume
          </a>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: innerShadow, pointerEvents: 'none' }} />
        </div>
      </div>
    </div>
  )
}
