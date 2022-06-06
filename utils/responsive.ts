export const breakpoint = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}
export const device = {
  mobileS: `(max-device-width: ${breakpoint.mobileS}px)`,
  mobileM: `(min-device-width: ${breakpoint.mobileS}px) and (max-device-width: ${breakpoint.mobileM}px)`,
  mobileL: `(min-device-width: ${breakpoint.mobileM}px) and (max-device-width: ${breakpoint.mobileL}px)`,
  tablet: `(min-device-width: ${breakpoint.mobileL}px) and (max-device-width: ${breakpoint.tablet}px)`,
  laptop: `(min-device-width: ${breakpoint.tablet}px) and (max-device-width: ${breakpoint.laptop}px)`,
  laptopL: `(min-device-width: ${breakpoint.laptop}px) and (max-device-width: ${breakpoint.laptopL}px)`,
  desktop: `(min-device-width: ${breakpoint.laptopL}px)`,
}
