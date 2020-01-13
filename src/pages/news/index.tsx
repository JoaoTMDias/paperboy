import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import { Container, Layout, NewsTabs, ContentSpinner } from "components/index.components";
import { LatestNewsTab, LatestNewsCategoryTab } from "components/data-display/news/index.news";
import { IGlobalStoreState, ChosenNewsSources } from "data/interfaces/index";
import { NEWS_PAGE, ONBOARDING_PAGE } from "data/constants/index.constants";
import { INewsPageProps, INewsPageState, INewsPageHeaderItems } from "./types";

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
class NewsPage extends React.PureComponent<INewsPageProps, INewsPageState> {
	constructor(props: INewsPageProps) {
		super(props);

		this.state = {
			hasData: false,
			tabsHeaderItems: null,
		};
	}

	/**
	 *
	 *
	 * @memberof NewsPage
	 */
	componentDidMount() {
		const { sources } = this.props;
		const checkForData = this.checkIfHasSources(sources);

		if (checkForData) {
			this.setupNewsTabsHeader(sources.tabs);
		}
	}

	/**
	 *
	 *
	 * @param {INewsPageProps} prevProps
	 * @memberof NewsPage
	 */
	componentDidUpdate(prevProps: INewsPageProps) {
		const { sources } = this.props;
		const { hasData } = this.state;

		if (hasData) {
		}
		if (prevProps.sources !== sources && sources.quantity > 0) {
			this.setupNewsTabsHeader(sources.tabs);
		}
	}

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-04
	 * @param {IChosenSource[]} items
	 * @memberof NewsPage
	 */
	setupNewsTabsHeader(tabs: INewsPageHeaderItems[]) {
		if (tabs) {
			const tabsHeaderItems = this.filterOutAllHeaderCategories(tabs);
			this.setState({
				tabsHeaderItems,
			});
		}
	}

	/**
	 *
	 *
	 * @param {ChosenNewsSources} sources
	 * @returns
	 * @memberof NewsPage
	 */
	checkIfHasSources(sources: ChosenNewsSources) {
		if (sources && sources.quantity > 0) {
			this.setState({
				hasData: true,
			});

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
	filterOutAllHeaderCategories(tabs: INewsPageHeaderItems[]) {
		const list = [...defaultTabs, ...tabs];
		return list;
	}

	/**
	 * @description
	 * @date 2019-01-18
	 * @returns
	 * @memberof NewsPage
	 */
	renderNewsTabs(tabsHeaderItems: INewsPageHeaderItems[]) {
		const { sources } = this.props;
		const { hasData } = this.state;

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

	render() {
		const { authenticated } = this.props;
		const { tabsHeaderItems } = this.state;

		if (!authenticated) {
			return <Redirect from={NEWS_PAGE} to={ONBOARDING_PAGE} noThrow />;
		}

		return (
			<Layout authenticated header={false}>
				<Container fullwidth fullheight isFixed={false} title="Current Page is: News" offsetTop="2.75rem">
					{tabsHeaderItems ? this.renderNewsTabs(tabsHeaderItems) : <ContentSpinner />}
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
	sources: state.preferences.chosenSources,
});

export default connect(mapStateToProps)(NewsPage);
