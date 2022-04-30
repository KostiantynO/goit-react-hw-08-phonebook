export const base = {
  breakpoints: ['320px', '768px', '1200px', '1440px', '1600px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px'],
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px'],
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const common = {
  shadowMiddle:
    '0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12)',
  shadowDrawer:
    '0 4px 8px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.16)',
  shadowHeroBtn: 'shadow-hero-btn: 0 4px 4px rgba(0, 0, 0, 0.15)',
  white: '#ffffff',
  black: '#000000',
};

export const light = {
  main: '#212121',
  devtools: '#202124',
  secondary: '#757575',
  accent: '#2196f3',
  bgHero: '#ffffff',
  bgHeroBtn: '#188ce8',
  bgBtnSecondary: '#f5f4fa',
  bgProjectCard: '#eeeeee',
  icon: '#afb1b8',
  ...common,
};

export const dark = {
  main: '#f5f4fa',
  devtools: '#202124',
  secondary: '#757575',
  accent: '#2196f3',
  bgHero: '#2f303a',
  bgHeroBtn: '#188ce8',
  bgBtnSecondary: '#f5f4fa',
  bgProjectCard: '#eeeeee',
  icon: '#afb1b8',
  ...common,
};

const ids = {
  light: 'light',
  dark: 'dark',
};

export const themes = {
  ids,
  light,
  dark,
};
