/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { useContext } from "react";
import TopNavigation from "components/top-navigation/default";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import Container from "components/container";
import { INewsArticleItem, IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import { EThumbnailType } from "components/thumbnails/types.d";
import ArticleThumbnail from "components/thumbnails/thumbnails-large.component";
import UISection from "components/section";
import PreferencesContext from "../../containers/preferences/context";
import { List } from "./styles";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISavedPageProps>}
 */
const SavedPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	const { saved } = useContext(PreferencesContext);

	/**
	 *
	 *
	 * @returns
	 */
	function renderListOfArticles() {
		const list = saved?.map((savedArticle: INewsArticleItem, index: number) => {
			const keyIndex = `thumbnail__saved--${index}`;

			return (
				<ArticleThumbnail
					location={location}
					key={keyIndex}
					id={keyIndex}
					options={savedArticle}
					type={EThumbnailType.SAVED}
				/>
			);
		});

		return list && list.length > 0 ? <List role="list">{list}</List> : <div />;
	}

	const numberOfArticles = saved ? saved.length : 0;

	return (
		<PrivateRoute title="Saved Articles page" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="Saved" subtitle="Read the news anytime" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<UISection id="saved-list" title={`Inbox (${numberOfArticles})`}>
					{renderListOfArticles()}
				</UISection>
			</Container>
		</PrivateRoute>
	);
};

export default SavedPage;
