// Libraries
import * as React from "react";
import { NEWS_PAGE, SAVED_PAGE, SEARCH_PAGE, SETTINGS_PAGE } from "data/constants/index.constants";
import { withMemo } from "helpers/index.helpers";
import { TabItem } from "components/top-navigation/tab-item/index";
import { IconNews, IconSaved, IconSearch, IconSettings } from "components/icons/index";
import { Wrapper, Navigation, List } from "./styles";

/**
 * @description Main Mobile Navigation

 * @date  08/December/2018 at 15:20
 * @extends {React.FC}
 */
const BottomNavigation: React.FunctionComponent = () => (
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
				<TabItem to={SETTINGS_PAGE} label="Settings">
					<IconSettings />
				</TabItem>
			</List>
		</Navigation>
	</Wrapper>
);

export default withMemo(BottomNavigation, []);
