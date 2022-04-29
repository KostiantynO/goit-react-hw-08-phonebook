export const base = {
  breakpoints: ['480px', '768px', '1200px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px'],
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px'],
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const dark = {
  accent: '#2196f3',
  main: '#bbb',
  bg: '#1f2023',
  nav: '#27282b',
  border: '#303236',
  text: '#f8f8f8',
};

export const light = {
  accent: '#4851f4',
  main: '#212121',
  bg: '#ffffff',
  nav: '#f8f8f8',
  border: '#deebf1',
  text: '#202224',
};

const ids = {
  dark: 'dark',
  light: 'light',
};

export const themes = {
  ids,
  dark,
  light,
};
