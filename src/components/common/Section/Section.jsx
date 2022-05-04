import React from 'react';
import { SectionStyled } from './Section.styled';

export const Section = ({ children, ...props }) => {
  return <SectionStyled {...props}>{children}</SectionStyled>;
};
