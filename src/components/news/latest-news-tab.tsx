import * as React from "react";
import { connect } from "react-redux";
import { ArticleThumbnail, ContentSpinner } from "components/index.components";
import { VirtualizedList, Item } from "./styles";
import { IGlobalStoreState } from "data/interfaces/index";
import { getAllLatestNewsFromSource } from "data/redux/actions/index.actions";
import { EThumbnailType } from "components/thumbnails/types.d.ts";
import { INewsArticleTabProps, IVirtualListProps } from "./types";

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export class LatestNewsTab extends React.PureComponent<INewsArticleTabProps, any> {
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
	componentDidUpdate(nextProps: INewsArticleTabProps): boolean {
		const { sources, dispatch } = this.props;

		if (nextProps.sources !== sources && sources.length > 0) {
			dispatch(getAllLatestNewsFromSource(sources));

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
		const id = `${index}`;

		return (
			<Item key={key} id={`latest-news__article__${index}`} style={style}>
				<ArticleThumbnail id={id} options={article} type={EThumbnailType.LARGE} />
			</Item>
		);
	};

	render() {
		const { latest } = this.props;

		if (latest && latest.totalResults > 0) {
			return (
				<VirtualizedList
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
				</VirtualizedList>
			);
		}
		return <ContentSpinner fullPage />;
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	latest: state.news.articles.latest,
});

export default connect(mapStateToProps)(LatestNewsTab);
