import { Redirect } from '@reach/router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Layout, UIContentSpinner } from '../../components/index';

// Redux
import {
	getAllLatestNewsFromSource,
	setUserAuthentication,
} from '../../data/redux/actions/index.actions';

interface IPreloaderPageProps {
	authenticated: boolean;
	dispatch: any;
	chosenSources: any;
	articles: {};
}

interface IPreloaderPageState {
	hasData: boolean;
	delay: number;
}

import { NEWS_PAGE } from '../../data/constants/index.constants';
import { IGlobalStoreState } from '../../data/interfaces/index.interface';

/**
 * @description The Preloader Page
 * @date 2019-01-06
 * @class PreloaderPage
 * @extends {React.Component<IPreloaderPageProps, IPreloaderPageState>}
 */
class PreloaderPage extends React.PureComponent<
	IPreloaderPageProps,
	IPreloaderPageState
> {
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
		const { chosenSources } = this.props;
		const { delay } = this.state;
		if (chosenSources) {
			this.timer = setTimeout(
				() =>
					this.props.dispatch(
						getAllLatestNewsFromSource(chosenSources),
					),
				delay,
			);
		}
	}

	/**
	 * @description Dispatches a number of actions depending on updated props
	 * @date 2018-12-29
	 * @param {*} prevProps
	 * @param {*} prevState
	 * @memberof PreloaderPage
	 */
	componentDidUpdate(prevProps: any, prevState: any) {
		// If there are news sources to display as a list
		if (prevProps.articles !== this.props.articles) {
			this.setState(
				{
					hasData: true,
				},
				() => {
					this.props.dispatch(setUserAuthentication(true));
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
			return <Redirect to={NEWS_PAGE} noThrow={true} />;
		}

		return (
			<Layout authenticated={authenticated}>
				<Container
					fullwidth={true}
					fullheight={true}
					isFixed={true}
					title="Current Page is: Preloader screen."
				>
					<UIContentSpinner isFullPage={true} />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
	chosenSources: state.preferences.chosenSources.items,
	articles: state.news.latest,
});

export default connect(mapStateToProps)(PreloaderPage);
