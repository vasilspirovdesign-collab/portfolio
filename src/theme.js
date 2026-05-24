export const light = {
  bg:       '#f0f0f0',
  navBg:    '#f0f0f0',
  cardBg:   '#ffffff',
  border:   '#d0d2d0',
  activeBg: '#d0d2d0',
  text:     '#414141',
  muted:    '#757575',
}

export const dark = {
  bg:       '#414141',
  navBg:    '#414141',
  cardBg:   '#4d4d4d',
  border:   '#555555',
  activeBg: '#555555',
  text:     '#d0d2d0',
  muted:    '#d0d2d0',
}

export function t(isDark, key) {
  return isDark ? dark[key] : light[key]
}
