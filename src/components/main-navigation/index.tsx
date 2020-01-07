import React from "react";
import { Wrapper, List, Nav } from "./styles";

// Components
import { IconCategories, IconNews, IconSaved, IconSearch, IconSettings, TabItem } from "../index.components";

import {
	CATEGORIES_PAGE,
	NEWS_PAGE,
	SAVED_PAGE,
	SEARCH_PAGE,
	SETTINGS_PAGE,
} from "../../data/constants/index.constants";

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

export default MainNavigation;
