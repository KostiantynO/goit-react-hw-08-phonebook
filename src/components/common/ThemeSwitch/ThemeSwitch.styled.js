import styled from 'styled-components';

export const ThemeSwitchStyled = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #222;
  display: flex;
  gap: 8px;

  width: 88px;
  border-radius: 24px;
  height: 28px;

  padding: 8px;

  > span {
    position: absolute;

    transform: translateX(
      ${({ theme }) => (theme.mode === 'dark' ? '-51%' : '47%')}
    );

    transition: transform ${({ theme }) => theme.transition};

    background-color: grey;
    width: 50%;
    height: 100%;
    border-radius: 24px;
    opacity: 0.8;
  }

  > button {
    padding: 2px 10px;
    width: 40px;
    border-radius: 24px;
    cursor: pointer;
  }
`;

export const DayButton = styled.button`
  background-color: ${({ theme: { colors, mode } }) =>
    mode === 'dark' ? '#ddd' : colors.accent};
`;

export const NightButton = styled.button`
  background-color: ${({ theme: { colors, mode } }) =>
    mode === 'dark' ? colors.bg : colors.main};

  /*
  accent: '#4851f4',
  main: '#212121',
  bg: '#ffffff',
  nav: '#f8f8f8',
  border: '#deebf1',
  text: '#202224',
*/
`;
