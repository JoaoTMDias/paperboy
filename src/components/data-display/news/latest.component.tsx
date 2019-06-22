import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { ThumbnailLarge, UIContentSpinner } from '../../index';

import {
	INewsArticle,
	IGlobalStoreState,
} from '../../../data/interfaces/index.interface';

import { getAllLatestNewsFromSource } from '../../../data/redux/actions/index.actions';

interface INewsArticleTabProps {
	sources: string[];
	latest: INewsArticle;
	dispatch: any;
}

interface IVirtualListProps extends ListChildComponentProps {
	key?: React.Key;
}

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
class LatestNewsTab extends React.PureComponent<INewsArticleTabProps, any> {
	constructor(props: INewsArticleTabProps) {
		super(props);
	}

	/**
	 * @description When the page mounts, checks if there are already chosen news
	 * sources to pick from and update the latest news feed.
	 * @date 2019-01-19
	 * @memberof LatestNewsTab
	 */
	componentDidMount() {
		const { sources, dispatch } = this.props;

		if (sources && sources.length > 0) {
			dispatch(getAllLatestNewsFromSource(sources));
		}
	}

	/**
	 * @description When the page updates, checks if the redux store has returned:
	 * - a new list of sources.
	 *
	 * If so, fetches data.
	 * @date 2019-01-19
	 * @param {INewsArticleTabProps} nextProps
	 * @param {*} nextState
	 * @returns {boolean}
	 * @memberof LatestNewsTab
	 */
	componentDidUpdate(
		nextProps: INewsArticleTabProps,
		nextState: any,
	): boolean {
		const { sources } = this.props;

		if (nextProps.sources !== sources && sources.length > 0) {
			this.props.dispatch(getAllLatestNewsFromSource(sources));

			return true;
		}

		return false;
	}

	/**
	 * @description
	 * @memberof LatestNewsTab
	 */
	renderRow = ({ index, key, style }: IVirtualListProps) => {
		const { latest } = this.props;
		const article = latest.articles[index];

		return (
			<Item key={key} id={`latest-news__article__${index}`} style={style}>
				<ThumbnailLarge id={index} options={article} />
			</Item>
		);
	};

	render() {
		const { latest } = this.props;

		if (latest && latest.totalResults > 0) {
			return (
				<List
					width={window.innerWidth}
					height={window.innerHeight - (48 + 48)}
					itemCount={latest.articles.length}
					itemSize={window.innerHeight * 0.4}
					overscanCount={3}
					outerElementType="div"
					innerElementType="ol"
					layout="vertical"
				>
					{this.renderRow}
				</List>
			);
		}
		return <UIContentSpinner isFullPage />;
	}
}

// Styling
const List = styled(FixedSizeList)`
	position: relative;
	width: 100vw;
	height: calc(
		var(--viewport-height) - (var(--top-navigation-bar-height) * 2)
	);
	overflow: auto;
	will-change: transform;

	ol {
		width: 100%;
		height: 100%;
		list-style-type: none;
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;

const Item = styled.li`
	width: 100%;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const mapStateToProps = (state: IGlobalStoreState) => ({
	latest: state.news.articles.latest,
});

export default connect(mapStateToProps)(LatestNewsTab);
