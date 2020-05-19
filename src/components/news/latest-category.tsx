import * as React from "react";
import { connect } from "react-redux";
import { IGlobalStoreState, INewsArticleItem } from "data/interfaces/index";
import { getAllLatestNewsFromSource } from "data/redux/actions/index.actions";
import { ArticleThumbnail, ContentSpinner } from "components/index.components";
import { List, Item } from "./styles";
import { EThumbnailType } from "components/thumbnails/types.d.ts";
import { INewsArticleTabProps } from "./types";

// interface IVirtualListProps extends ListChildComponentProps {
// 	key?: React.Key;
// }

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsCategoryTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export class LatestNewsCategoryTab extends React.PureComponent<INewsArticleTabProps, any> {
	/**
	 * @description When the page mounts, checks if there are already chosen news
	 * sources to pick from and update the latest news feed.
	 * @date 2019-01-19
	 * @memberof LatestNewsCategoryTab
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
	 * @memberof LatestNewsCategoryTab
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
	 * @memberof LatestNewsCategoryTab
	 */
	renderRow = (articles: INewsArticleItem[]) => {
		const list = articles.map((article: INewsArticleItem, index: number) => {
			const id = `${index}`;
			const key = `latest-news-category__article__${article.publishedAt}`;

			if (index === 0) {
				return (
					<Item className="list__item list__item--first" key={key} id={`latest-news-category__article__${index}`}>
						<ArticleThumbnail id={id} options={article} type={EThumbnailType.LARGE} />
					</Item>
				);
			}

			return (
				<Item className="list__item" key={key} id={`latest-news-category__article__${index}`}>
					<ArticleThumbnail id={id} options={article} type={EThumbnailType.SMALL} />
				</Item>
			);
		});

		return <>{list}</>;
	};

	render() {
		const { latest } = this.props;

		if (latest && latest.totalResults > 0) {
			return <List>{this.renderRow(latest.articles)}</List>;
		}
		return <ContentSpinner fullPage />;
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	latest: state.news.articles.latest,
});

export default connect(mapStateToProps)(LatestNewsCategoryTab);
