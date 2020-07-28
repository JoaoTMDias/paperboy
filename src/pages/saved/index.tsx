// Libraries
import React, { useContext } from "react";
import {
	ArticleThumbnail,
	Container,
	TopNavigation,
	TopNavigationWithTitle,
	UISection,
} from "components/index.components";
import { List } from "./styles";
import { INewsArticleItem, IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import { EThumbnailType } from "components/thumbnails/types.d";
import PreferencesContext from "./../../containers/preferences/context";

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
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 */
	function handleRemoveItemFromList(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		event.preventDefault();
	}

	/**
	 *
	 *
	 * @returns
	 */
	function renderListOfArticles() {
		const list = saved.map((savedArticle: INewsArticleItem, index: number) => {
			const keyIndex = `thumbnail__saved--${index}`;

			return <ArticleThumbnail key={keyIndex} id={keyIndex} options={savedArticle} type={EThumbnailType.SAVED} />;
		});

		return <List role="list">{list}</List>;
	}

	const numberOfArticles = saved ? saved.length : 0;

	return (
		<PrivateRoute title="Saved Articles" location={location}>
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
