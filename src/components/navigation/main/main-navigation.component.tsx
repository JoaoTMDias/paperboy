import { rem } from "polished";
import React from "react";
import styled from "styled-components";

// Components
import {
  IconCategories,
  IconNews,
  IconSaved,
  IconSearch,
  IconSettings,
  TabItem,
} from "../../index";

import {
  CATEGORIES_PAGE,
  NEWS_PAGE,
  SAVED_PAGE,
  SEARCH_PAGE,
  SETTINGS_PAGE,
} from "../../../data/constants/index.constants";

// Helpers
import { media } from "../../../helpers/index.helpers";

const MainNavigation = () => (
  <Wrapper>
    <h2>Paperboy</h2>
    <Nav>
      <List>
        <TabItem to={NEWS_PAGE} label="News" layout="vertical">
          <IconNews />
        </TabItem>
        <TabItem to={SAVED_PAGE} label="Saved" layout="vertical">
          <IconSaved />
        </TabItem>
        <TabItem to={SEARCH_PAGE} label="Search" layout="vertical">
          <IconSearch />
        </TabItem>
        <TabItem to={CATEGORIES_PAGE} label="Categories" layout="vertical">
          <IconCategories />
        </TabItem>
        <TabItem to={SETTINGS_PAGE} label="Settings" layout="vertical">
          <IconSettings />
        </TabItem>
      </List>
    </Nav>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: ${rem("200px")};
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
      width: calc(100vw - ${rem("200px")});
      margin-left: ${rem("200px")};
    }

  `};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const List = styled.ul`
  margin: 0;
  margin-bottom: var(--global-margin);
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 100%;
`;

export default MainNavigation;
