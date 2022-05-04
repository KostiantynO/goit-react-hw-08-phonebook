import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

import styled from 'styled-components';

const Content = styled.main`
  min-height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.content.bg};
  transition: background-color ${({ theme }) => theme.transition};
`;

const LayoutStyled = styled.div`
  min-height: inherit;
  background-color: ${({ theme }) => theme.colors.layout.bg};
  transition: background-color ${({ theme }) => theme.transition};
`;

export const Layout = () => {
  return (
    <LayoutStyled title="Layout" className="Layout">
      <AppBar />

      <Content title="Content" className="Content">
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </Content>
    </LayoutStyled>
  );
};
