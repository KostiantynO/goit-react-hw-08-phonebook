export const base = {
  breakpoints: ['320px', '768px', '1200px', '1440px', '1600px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px'],
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px'],
  transition: '210ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const common = {
  shadowMiddle:
    '0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12)',
  shadowDrawer:
    '0 4px 8px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.16)',
  shadowHeroBtn: 'shadow-hero-btn: 0 4px 4px rgba(0, 0, 0, 0.15)',
  white: '#ffffff',
  black: '#000000',
  devtools: '#202124',
  secondary: '#757575',
  accent: '#2196f3',
  bgHeroBtn: '#188ce8',
  bgBtnSecondary: '#f5f4fa',
  bgProjectCard: '#eeeeee',
  icon: '#afb1b8',
  grey: {
    700: '#707070',
  },
};

export const light = {
  main: '#212121',
  bg: '#ffffff',
  // bgHero: ,
  ...common,

  app: {
    bg: '#FFFFFF',
    fg: '',
  },

  appBar: {
    bg: '',
    fg: '',
  },

  layout: {
    bg: '#FFFFFF',
    fg: '',
  },

  content: {
    bg: '#f5f4fa',
    fg: '',
  },

  drawer: {
    bg: '#FFFFFF',
    fg: '',
  },

  modal: {
    bg: '#ffffff',
    fg: '',
  },

  button: {
    primary: {
      bg: '',
      fg: '',
    },

    secondary: {
      bg: '',
      fg: '',
    },
  },

  contact: {
    bg: '#212121',
    fg: '',
  },
};

export const dark = {
  main: '#f5f4fa',
  bg: '#2f303a',
  // bgHero: ,
  ...common,

  app: {
    bg: '#212121',
    fg: '',
  },

  appBar: {
    bg: '',
    fg: '',
  },

  layout: {
    bg: '#2f303a',
    fg: '',
  },

  content: {
    bg: '#2a2a2a',
    fg: '',
  },

  drawer: {
    bg: '#2f303a',
    fg: '',
  },

  modal: {
    bg: '#2f303a',
    fg: '',
  },

  button: {
    primary: {
      bg: '',
      fg: '',
    },

    secondary: {
      bg: '#888888',
      fg: '#eee',
    },
  },

  contact: {
    bg: '#eaeaea',
    fg: '',
  },
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
