export const light = {
  bg:       '#F9F9F9',
  navBg:    '#F9F9F9',
  cardBg:   '#ffffff',
  border:   '#EBEBEB',
  activeBg: '#EBEBEB',
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
