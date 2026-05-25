import { t } from '../theme'

const outerShadow = '1px 1px 12px 2px rgba(65,65,65,0.07), -2px -2px 20px 8px rgba(117,117,117,0.08), 5px -3px 30px 20px rgba(117,117,117,0.1)'
const innerGlow   = 'inset 1px -1px 10px 8px rgba(255,255,255,0.15), inset 0px 1px 6px 0px rgba(240,240,240,0.06)'

export default function ImageContainer({ dark, children }) {
  return (
    <div style={{
      width: '694px', height: '462px',
      borderRadius: '16px', overflow: 'hidden', flexShrink: 0,
      backgroundColor: t(dark, 'cardBg'),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        width: '634px', height: '400px',
        borderRadius: '8px', overflow: 'hidden', flexShrink: 0,
        boxShadow: outerShadow,
      }}>
        {children}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: 'inherit',
          boxShadow: innerGlow,
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  )
}
