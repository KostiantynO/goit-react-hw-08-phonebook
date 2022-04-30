import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type ? type : 'button',
}))`
  display: flex;
  padding: ${({ primary }) => (primary ? '16px 20px' : '2px 4px')};

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme: { colors, mode }, primary }) =>
    primary
      ? colors.white
      : mode === 'dark'
      ? colors.bgBtnSecondary
      : colors.black};

  cursor: pointer;

  background-color: ${({ theme: { mode, colors }, primary }) =>
    primary
      ? colors.accent
      : mode === 'dark'
      ? 'transparent'
      : colors.bgBtnSecondary};

  border: none;
  border-radius: 4px;
  box-shadow: ${({ theme, icon }) =>
    icon ? 'none' : theme.colors.shadowDrawer};

  transition: ${({ theme }) => theme.transition};
  transition-property: color, background-color, box-shadow, transform;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.bgHeroBtn : theme.colors.accent};

    transform: scale(1.02);
  }
`;
