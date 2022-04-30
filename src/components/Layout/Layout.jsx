import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

import styled from 'styled-components';

const Content = styled.div`
  height: calc(100% - 70px);
`;

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback="">
        <Content>
          <Outlet />
        </Content>
      </Suspense>
    </>
  );
};
