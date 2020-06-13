import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { connect } from "react-redux";
import { usePrevious } from "react-use";
import { Container, Layout, ContentSpinner } from "components/index.components";
import Meta from "components/meta/index";
import { getAllLatestNewsFromSource, setUserAuthentication } from "data/redux/actions/index.actions";
import { NEWS_PAGE } from "data/constants/index.constants";
import { IGlobalStoreState, IChosenNewsSourcesItems, IBasePageProps, INewsArticleItem } from "data/interfaces/index";

interface IPreloaderPageActions {
	getAllLatestNewsFromSource: (source: string[]) => (dispatch: Dispatch<AnyAction>) => void;
	setUserAuthentication: (
		state: boolean,
	) => {
		type: string;
		payload: {
			data: boolean;
		};
	};
}

interface IPreloaderPageProps extends IBasePageProps {
	authenticated: boolean;
	actions: IPreloaderPageActions;
	chosenSources: IChosenNewsSourcesItems;
	articles: INewsArticleItem[];
}

const PreloaderPage: React.FC<IPreloaderPageProps> = ({ authenticated, actions, chosenSources, articles }) => {
	const [hasData, setHasData] = useState(false);
	const previousArticles = usePrevious(articles);

	/**
	 * @description When the Page mounts, adds an event listener for the search bar
	 * scroll event, and also fetches a list of all the available news sources to choose
	 * from
	 * @date 2018-12-29
	 * @memberof PreloaderPage
	 */
	useEffect(() => {
		if (chosenSources && Object.keys(chosenSources).length > 0) {
			const hasLatestKey = chosenSources.hasOwnProperty("latest");
			const latestSources = hasLatestKey ? chosenSources.latest : ["cnn", "bbc-news"];

			actions.getAllLatestNewsFromSource(latestSources);
		}
	}, []);

	/**
	 * @description Dispatches a number of actions depending on updated props
	 * @date 2018-12-29
	 * @param {*} prevProps
	 * @param {*} prevState
	 * @memberof PreloaderPage
	 */
	useEffect(() => {
		if (previousArticles?.length !== articles.length) {
			setHasData(true);
			actions.setUserAuthentication(true);
		}
	}, [articles]);

	if (authenticated && hasData) {
		return <Redirect to={NEWS_PAGE} noThrow />;
	}

	return (
		<Layout authenticated={authenticated}>
			<Meta title="Fetching news..." location={location} />
			<Container fullwidth fullheight isFixed title="Current Page is: Preloader screen.">
				<ContentSpinner fullPage />
			</Container>
		</Layout>
	);
};

PreloaderPage.defaultProps = {
	chosenSources: undefined,
	authenticated: false,
	articles: [],
};

function mapStateToProps(state: IGlobalStoreState) {
	return {
		authenticated: state.preferences.authenticated,
		chosenSources: state.preferences.chosenSources.items,
		articles: state.news.articles.latest.articles,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(
			{
				getAllLatestNewsFromSource,
				setUserAuthentication,
			},
			dispatch,
		),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PreloaderPage);
