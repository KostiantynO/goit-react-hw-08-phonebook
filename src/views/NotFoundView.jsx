import { Section, Container } from 'components/common';
import React from 'react';
// import PropTypes from 'prop-types';

const NotFoundView = () => {
  return (
    <div>
      <Section>
        <Container>
          <h1 style={{ textAlign: 'center' }}>Page not found</h1>
        </Container>
      </Section>
    </div>
  );
};

NotFoundView.propTypes = {};

export default NotFoundView;
