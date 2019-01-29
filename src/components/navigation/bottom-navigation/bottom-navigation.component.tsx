// Libraries
import * as React from "react";
import styled from "styled-components";

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

// Component Props
interface IBottomNavigationProps {
  theme?: any;
}

/**
 * @description Main Mobile Navigation
 * @author  João Dias
 * @date  08/December/2018 at 15:20
 * @extends {React.SFC}
 */
const BottomNavigation: React.FunctionComponent<
  IBottomNavigationProps
> = props => (
  <Wrapper>
    <Navigation>
      <List>
        <TabItem to={NEWS_PAGE} label="News">
          <IconNews />
        </TabItem>
        <TabItem to={SAVED_PAGE} label="Saved">
          <IconSaved />
        </TabItem>
        <TabItem to={SEARCH_PAGE} label="Search">
          <IconSearch />
        </TabItem>
        <TabItem to={CATEGORIES_PAGE} label="Categories">
          <IconCategories />
        </TabItem>
        <TabItem to={SETTINGS_PAGE} label="Settings">
          <IconSettings />
        </TabItem>
      </List>
    </Navigation>
  </Wrapper>
);

// Styling
const Wrapper = styled.footer`
  width: 100%;
  max-width: 100vw;
  height: var(--bottom-navigation-bar-height);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 0;
`;

const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default React.memo(BottomNavigation);
