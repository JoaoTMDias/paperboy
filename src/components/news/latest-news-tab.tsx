/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
		const src = data?.articles.map((article, index) => {
			const key = `article-thumbnail-${article.publishedAt}-${id}-${index}-key`;
			const identifier = `article-thumbnail-${article.publishedAt}-${id}-${index}-thumbnail`;

			return (
				<Item key={key} id={key}>
					<ArticleThumbnail location={location} id={identifier} options={article} type={EThumbnailType.LARGE} />
				</Item>
			);
		});

		return <List>{src}</List>;
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
