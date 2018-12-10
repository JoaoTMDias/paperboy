import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainNavigation = () => (
  <Nav>
    <div>MainNavigation</div>
  </Nav>
);

const Nav = styled.nav`
  width: 100%;
  border: 1px solid red;
`;

MainNavigation.propTypes = {};

export default MainNavigation;
