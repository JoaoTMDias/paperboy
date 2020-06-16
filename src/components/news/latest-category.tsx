import React from "react";
import { ArticleThumbnail, ContentSpinner } from "components/index.components";
import { Item, List } from "./styles";
import { INewsArticle } from "data/interfaces/index";
import { EThumbnailType } from "components/thumbnails/types.d.ts";
import { INewsArticleTabProps } from "./types";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import { KEY_PREFIX } from 'redux-persist';

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsCategoryTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export const LatestNewsCategoryTab: React.FC<INewsArticleTabProps> = ({ sources }) => {
	const { data, error, loading } = useNewsApi<INewsArticle>({
		type: "latest",
		options: sources,
	});

	/**
	 * @description
	 * @memberof LatestNewsCategoryTab
	 */
	function renderRow() {
		const sources = data?.articles.map((article, index) => {
			const key = `latest-news-category__article__${index}-key`;
			const id = `latest-news-category__article__${index}-id`;

			if (index === 0) {
				return (
					<Item className="list__item list__item--first" key={key} id={key}>
						<ArticleThumbnail id={id} options={article} type={EThumbnailType.LARGE} />
					</Item>
				);
			}

			return (
				<Item className="list__item" key={key} id={KEY_PREFIX}>
					<ArticleThumbnail id={id} options={article} type={EThumbnailType.SMALL} />
				</Item>
			);
		});

		return <List>{sources}</List>;
	}

	if (loading) {
		return <ContentSpinner fullPage />;
	}

	if (error) {
		return <p>{`${error}`}</p>;
	}

	return renderRow();
};

export default LatestNewsCategoryTab;
