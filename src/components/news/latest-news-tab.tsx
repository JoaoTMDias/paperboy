import React from "react";
import { ArticleThumbnail, ContentSpinner } from "components/index.components";
import { Item, List } from "./styles";
import { INewsArticle } from "data/interfaces/index";
import { EThumbnailType } from "components/thumbnails/types.d.ts";
import { INewsArticleTabProps } from "./types";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import Meta from "components/meta";

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsTab
 * @extends {React.Component<INewsArticleTabProps, any>}
 */
export const LatestNewsTab: React.FC<INewsArticleTabProps> = ({ id, sources, location }) => {
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
		return <p>{`${error}`}</p>;
	}

	return renderRow();
};

export default LatestNewsTab;
