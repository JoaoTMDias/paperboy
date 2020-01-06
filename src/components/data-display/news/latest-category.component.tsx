import * as React from "react";
import { connect } from "react-redux";
import { ListChildComponentProps } from "react-window";

import { ArticleThumbnail, UIContentSpinner } from "../../index.components";

import { List, Item } from "./news-tabs.styled";

import { INewsArticle, IGlobalStoreState, INewsArticleItem } from "../../../data/interfaces/index.interface";

import { getAllLatestNewsFromSource } from "../../../data/redux/actions/index.actions";
import { EThumbnailType } from "../thumbnails/thumbnails-large.component";

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
 * @class LatestNewsCategoryTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
class LatestNewsCategoryTab extends React.PureComponent<INewsArticleTabProps, any> {
	constructor(props: INewsArticleTabProps) {
		super(props);
	}

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
			if (index === 0) {
				return (
					<Item
						className="list__item list__item--first"
						key={`latest-news-category__article__${article.publishedAt}`}
						id={`latest-news-category__article__${index}`}
					>
						<ArticleThumbnail id={index} options={article} type={EThumbnailType.LARGE} />
					</Item>
				);
			}
			return (
				<Item
					className="list__item"
					key={`latest-news-category__article__${article.publishedAt}`}
					id={`latest-news-category__article__${index}`}
				>
					<ArticleThumbnail id={index} options={article} type={EThumbnailType.SMALL} />
				</Item>
			);
		});

		return <React.Fragment>{list}</React.Fragment>;
	};

	render() {
		const { latest } = this.props;

		if (latest && latest.totalResults > 0) {
			return <List>{this.renderRow(latest.articles)}</List>;
		}
		return <UIContentSpinner isFullPage />;
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	latest: state.news.articles.latest,
});

export default connect(mapStateToProps)(LatestNewsCategoryTab);
