import { t } from './theme'

export const navLabel = {
  fontFamily: 'Questrial, sans-serif',
  fontSize: '18px', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.18px',
}

export const bodyText = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '18px', fontWeight: 300, lineHeight: '28.8px', letterSpacing: '0px',
}

export const heading = {
  fontFamily: 'Questrial, sans-serif',
  fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px',
}

export const breadcrumbSep = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px',
}

export const photoCard = (dark) => ({
  width: '694px', height: '462px',
  backgroundColor: t(dark, 'cardBg'),
  borderRadius: '16px', padding: '16px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexShrink: 0, boxSizing: 'border-box',
})

export const photoImg = {
  width: '623px', height: 'auto', borderRadius: '8px', display: 'block',
}

export const contentBlock = {
  display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '694px',
}
