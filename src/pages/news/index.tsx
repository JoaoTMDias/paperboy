import { Redirect } from "@reach/router";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Layout, NewsTabs, ContentSpinner } from "components/index.components";
import { LatestNewsTab, LatestNewsCategoryTab } from "components/news/index";
import { IGlobalStoreState } from "data/interfaces/index";
import { NEWS_PAGE, ONBOARDING_PAGE } from "data/constants/index.constants";
import { INewsPageProps, INewsPageHeaderItems } from "./types";
import { usePrevious } from "react-use";

const defaultTabs: INewsPageHeaderItems[] = [
	{
		id: "latest",
		label: "Latest",
	},
];

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
const NewsPage: React.FC<INewsPageProps> = ({ platform, authenticated, sources }) => {
	const [hasData, setHasData] = useState(false);
	const [tabsHeaderItems, setTabsHeaderItems] = useState<INewsPageHeaderItems[] | null>(null);
	const previousSources = usePrevious(sources);

	useEffect(() => {
		if (checkIfHasSources()) {
			setupNewsTabsHeader(sources.tabs);
		}
	}, []);

	useEffect(() => {
		if (previousSources?.quantity !== sources.quantity) {
			setupNewsTabsHeader(sources.tabs);
		}
	}, [sources]);

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-04
	 * @param {IChosenSource[]} items
	 * @memberof NewsPage
	 */
	function setupNewsTabsHeader(tabs: INewsPageHeaderItems[]) {
		if (tabs) {
			const tabsHeaderItems = filterOutAllHeaderCategories(tabs);
			setTabsHeaderItems(tabsHeaderItems);
		}
	}

	/**
	 *
	 *
	 * @returns
	 * @memberof NewsPage
	 */
	function checkIfHasSources() {
		if (sources && sources.quantity > 0) {
			setHasData(true);

			return true;
		}

		return false;
	}

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-04
	 * @param {IChosenSource[]} items
	 * @returns
	 * @memberof NewsPage
	 */
	function filterOutAllHeaderCategories(tabs: INewsPageHeaderItems[]) {
		const list = [...defaultTabs, ...tabs];
		return list;
	}

	/**
	 * @description
	 * @date 2019-01-18
	 * @returns
	 * @memberof NewsPage
	 */
	function renderNewsTabs(tabsHeaderItems: INewsPageHeaderItems[]) {
		if (hasData && sources && tabsHeaderItems.length > 0) {
			return (
				<NewsTabs
					id="news-tabs"
					tabsHeader={tabsHeaderItems}
					style={{
						backgroundColor: "var(--body-background)",
					}}
				>
					<LatestNewsTab sources={sources.items.latest} />
					<LatestNewsCategoryTab sources={sources.items.latest} />
				</NewsTabs>
			);
		}

		return <ContentSpinner fullPage />;
	}

	if (!authenticated) {
		return <Redirect from={NEWS_PAGE} to={ONBOARDING_PAGE} noThrow />;
	}

	return (
		<Layout authenticated header={false}>
			<Container fullwidth fullheight isFixed={false} title="Current Page is: News" offsetTop="3rem">
				{tabsHeaderItems ? renderNewsTabs(tabsHeaderItems) : <ContentSpinner />}
			</Container>
		</Layout>
	);
};

const mapStateToProps = (state: IGlobalStoreState) => ({
	platform: state.general.platform,
	authenticated: state.preferences.authenticated,
	sources: state.preferences.chosenSources,
});

export default connect(mapStateToProps)(NewsPage);
