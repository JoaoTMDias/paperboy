import { Redirect } from '@reach/router';
import * as React from 'react';
import { connect } from 'react-redux';

import {
	Container,
	Layout,
	NewsTabs,
	UIContentSpinner,
} from '../../components/index';

import { LatestNewsTab } from '../../components/data-display/news/index.news';

import {
	INewsArticle,
	IGlobalStoreState,
	ChosenNewsSources,
} from '../../data/interfaces/index.interface';

import {
	NEWS_PAGE,
	ONBOARDING_PAGE,
} from '../../data/constants/index.constants';
import { IChosenSource } from '../onboarding/choose-sources';

const Tabs = [
	{
		id: 'latest',
		label: 'Latest',
	},
	{
		id: 'general',
		label: 'General',
	},
	{
		id: 'sports',
		label: 'Sports',
	},
	{
		id: 'financial',
		label: 'Financial',
	},
	{
		id: 'tech',
		label: 'Tech',
	},
];

interface INewsPageProps {
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
	dispatch: any;
}

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
class NewsPage extends React.Component<INewsPageProps, any> {
	/**
	 * @description Page only re-renders if the user props change, such as:
	 * - User is no longer unauthenticated/authenticated
	 * - User has new sources to pick from and fetch data
	 * @date 2019-01-19
	 * @param {INewsPageProps} nextProps
	 * @param {*} nextState
	 * @returns {boolean}
	 * @memberof NewsPage
	 */
	shouldComponentUpdate(nextProps: INewsPageProps, nextState: any): boolean {
		const { authenticated, sources } = this.props;
		if (
			nextProps.authenticated !== authenticated ||
			nextProps.sources !== sources
		) {
			return true;
		}

		return false;
	}

	/**
	 * @description
	 * @date 2019-01-18
	 * @returns
	 * @memberof NewsPage
	 */
	renderNewsTabs() {
		const { sources } = this.props;

		if (sources && sources.quantity > 0) {
			const list = sources.items.map((source: IChosenSource) => {
				const { name } = source;

				return name;
			});
			return (
				<NewsTabs
					id="news-tabs"
					tabsHeader={Tabs}
					style={{
						backgroundColor: 'white',
					}}
				>
					<LatestNewsTab sources={list} />
					<LatestNewsTab sources={list} />
					<LatestNewsTab sources={list} />
				</NewsTabs>
			);
		}

		return <UIContentSpinner isFullPage />;
	}

	render() {
		const { authenticated } = this.props;

		if (!authenticated) {
			return <Redirect from={NEWS_PAGE} to={ONBOARDING_PAGE} noThrow />;
		}
		return (
			<Layout authenticated header={false}>
				<Container
					fullwidth
					fullheight
					isFixed={false}
					title="Current Page is: News"
					offsetTop="2.75rem"
				>
					{this.renderNewsTabs()}
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
