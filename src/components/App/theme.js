export const base = Object.freeze({
  breakpoints: ['480px', '768px', '1200px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px'],
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px'],
});

export const dark = Object.freeze({
  accent: '#2196f3',
  main: '#bbb',
  bg: '#1f2023',
  nav: '#27282b',
  border: '#303236',
  text: '#f8f8f8',
});

export const light = Object.freeze({
  accent: '#4851f4',
  main: '#212121',
  bg: '#ffffff',
  nav: '#f8f8f8',
  border: '#deebf1',
  text: '#202224',
});

export const themes = { dark, light };
