import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import { Container, Layout, ContentSpinner } from "components/index.components";

// Redux
import { getAllLatestNewsFromSource, setUserAuthentication } from "data/redux/actions/index.actions";

import { NEWS_PAGE } from "data/constants/index.constants";
import { IGlobalStoreState, IChosenNewsSourcesItems } from "data/interfaces/index";

interface IPreloaderPageProps {
	authenticated: boolean;
	dispatch: any;
	chosenSources: IChosenNewsSourcesItems;
	articles: {};
}

interface IPreloaderPageState {
	hasData: boolean;
	delay: number;
}

/**
 * @description The Preloader Page
 *
 * @class PreloaderPage
 * @extends {React.Component<IPreloaderPageProps, IPreloaderPageState>}
 */
class PreloaderPage extends React.PureComponent<IPreloaderPageProps, IPreloaderPageState> {
	constructor(props: IPreloaderPageProps) {
		super(props);

		this.state = {
			hasData: false,
			delay: 3000,
		};
	}

	static defaultProps = {
		chosenSources: null,
		authenticated: false,
		articles: {},
	};

	public timer: any = null;

	/**
	 * @description When the Page mounts, adds an event listener for the search bar
	 * scroll event, and also fetches a list of all the available news sources to choose
	 * from
	 * @date 2018-12-29
	 * @memberof PreloaderPage
	 */
	componentDidMount() {
		const { chosenSources, dispatch } = this.props;
		const { delay } = this.state;

		if (chosenSources && Object.keys(chosenSources).length > 0) {
			const hasLatestKey = chosenSources.hasOwnProperty("latest");
			const latestSources = hasLatestKey ? chosenSources.latest : ["cnn", "bbc-news"];

			this.timer = setTimeout(() => dispatch(getAllLatestNewsFromSource(latestSources)), delay);
		}
	}

	/**
	 * @description Dispatches a number of actions depending on updated props
	 * @date 2018-12-29
	 * @param {*} prevProps
	 * @param {*} prevState
	 * @memberof PreloaderPage
	 */
	componentDidUpdate(prevProps: IPreloaderPageProps) {
		const { articles, dispatch } = this.props;

		// If there are news sources to display as a list
		if (prevProps.articles !== articles) {
			this.setState(
				{
					hasData: true,
				},
				() => {
					dispatch(setUserAuthentication(true));
				},
			);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	public render() {
		const { authenticated } = this.props;

		if (authenticated) {
			return <Redirect to={NEWS_PAGE} noThrow />;
		}

		return (
			<Layout authenticated={authenticated}>
				<Container fullwidth fullheight isFixed title="Current Page is: Preloader screen.">
					<ContentSpinner fullPage />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
	chosenSources: state.preferences.chosenSources.items,
	articles: state.news.articles.latest.articles,
});

export default connect(mapStateToProps)(PreloaderPage);
