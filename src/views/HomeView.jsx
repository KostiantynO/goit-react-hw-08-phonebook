// import PropTypes from 'prop-types';

import { useLang } from 'hooks';
import styled from 'styled-components';
const HomeViewStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const HomeView = () => {
  const lang = useLang();

  return <HomeViewStyled>{lang.welcomeMessage}</HomeViewStyled>;
};

HomeView.propTypes = {};

export default HomeView;
