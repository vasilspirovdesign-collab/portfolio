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
  bg:       '#171717',
  navBg:    '#171717',
  cardBg:   '#242424',
  border:   '#2e2e2e',
  activeBg: '#2e2e2e',
  text:     '#d0d2d0',
  muted:    '#d0d2d0',
}

export function t(isDark, key) {
  return isDark ? dark[key] : light[key]
}
