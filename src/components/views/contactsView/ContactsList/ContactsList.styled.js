import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 4px;
  gap: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

export const CreateContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme.colors.main};
  }
`;
