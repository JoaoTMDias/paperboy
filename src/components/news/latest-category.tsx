import React from "react";
import { INewsArticle } from "data/interfaces/index";
import { EThumbnailType } from "components/thumbnails/types.d.ts";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import ArticleThumbnail from "components/thumbnails/thumbnails-large.component";
import ContentSpinner from "components/content-spinner";
import ErrorMessage from "components/errors";
import { INewsArticleTabProps } from "./types";
import { Item, List } from "./styles";

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsCategoryTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export const LatestNewsCategoryTab: React.FC<INewsArticleTabProps> = ({ id, sources }) => {
	const { data, error, loading } = useNewsApi<INewsArticle>({
		type: "latest",
		options: sources,
	});

	/**
	 * @description
	 * @memberof LatestNewsCategoryTab
	 */
	function renderRow() {
		const src = data?.articles.map((article, index) => {
			const key = `latest-news-category__article__${id}-${index}-key`;
			const identifier = `latest-news-category__article__${id}-${index}-id`;

			if (index === 0) {
				return (
					<Item className="list__item list__item--first" key={key} id={key}>
						<ArticleThumbnail id={identifier} options={article} type={EThumbnailType.LARGE} />
					</Item>
				);
			}

			return (
				<Item className="list__item" key={key} id={key}>
					<ArticleThumbnail id={id} options={article} type={EThumbnailType.SMALL} />
				</Item>
			);
		});

		return <List data-layout="category">{src}</List>;
	}

	if (loading) {
		return <ContentSpinner fullPage />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	return renderRow();
};

export default LatestNewsCategoryTab;
