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
 * @class LatestNewsTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export const LatestNewsTab: React.FC<INewsArticleTabProps> = ({ id, sources }) => {
	const { data, error, loading } = useNewsApi<INewsArticle>({
		type: "latest",
		options: sources,
	});

	/**
	 * @description
	 * @memberof LatestNewsTab
	 */
	function renderRow() {
		const sources = data?.articles.map((article, index) => {
			const key = `article-thumbnail-${article.publishedAt}-${id}-${index}-key`;
			const identifier = `article-thumbnail-${article.publishedAt}-${id}-${index}-thumbnail`;

			return (
				<Item key={key} id={key}>
					<ArticleThumbnail id={identifier} options={article} type={EThumbnailType.LARGE} />
				</Item>
			);
		});

		return <List>{sources}</List>;
	}

	if (loading) {
		return <ContentSpinner fullPage />;
	}

	if (error) {
		return <ErrorMessage />;
	}

	return renderRow();
};

export default LatestNewsTab;
