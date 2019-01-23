import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../../helpers/index.helpers'
media

const MainNavigation = () => (
  <Wrapper>
    <h2>Paperboy</h2>
    <Nav>
      <ul>
        <li>News</li>
        <li>Saved</li>
        <li>Categories</li>
        <li>Settings</li>
      </ul>
    </Nav>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  max-width: 12.5rem;
  min-height: 100vh;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 0;

  position: fixed;
  top: 0;
  left: 0;

  display: none;

  ${media.large`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & ~ main {
      width: calc(100vw - 12.5rem);
      margin-left: 12.5rem;
    }

  `};
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

MainNavigation.propTypes = {}

export default MainNavigation
