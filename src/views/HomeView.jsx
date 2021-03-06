// import PropTypes from 'prop-types';
import { useLang } from 'hooks';

import styled from 'styled-components';
import { Section } from 'components/common';

const HomeViewStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const HomeView = () => {
  const lang = useLang();

  return (
    <HomeViewStyled className="HomeView">
      <Section>{lang.welcomeMessage}</Section>
    </HomeViewStyled>
  );
};

HomeView.propTypes = {};

export default HomeView;
