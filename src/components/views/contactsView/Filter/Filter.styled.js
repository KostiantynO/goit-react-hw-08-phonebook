import { LoadingIcon } from 'components/common';
import { ButtonStyled } from 'components/common/Button';
import styled from 'styled-components';

export const FilterStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 280px;
`;

export const FilterInput = styled.input`
  width: 100%;
  font-size: inherit;
  padding: 4px;
  color: ${({ theme }) => theme.colors.input.fg};
  background-color: ${({ theme }) => theme.colors.input.bg};
`;

export const ClearFilterButton = styled(ButtonStyled)`
  color: ${({ theme: { colors } }) => colors.button.secondary.fg};
  background-color: ${({ theme: { colors } }) => colors.button.secondary.bg};
`;

export const LoadingIconAbsolute = styled(LoadingIcon).attrs({
  width: 30,
  height: 20,
})`
  position: absolute;
  right: -38px;
`;

export const FilterDescription = styled.p`
  margin-bottom: 20px;
`;
