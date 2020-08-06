/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React from "react";
import TopNavigation from "components/top-navigation/default";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import Container from "components/container";
import UISection from "components/section";
import {
	NEWS_PAGE,
	SAVED_PAGE,
	SEARCH_PAGE,
	SETTINGS_PAGE,
	PRIVACY_POLICY_SETTINGS_PAGE,
	ABOUT_SETTINGS_PAGE,
} from "data/constants/router.constants";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import { SectionListItem, ListItemWithLink } from "components/lists";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<INotFoundPageProps>}
 */
const NotFoundPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	return (
		<PrivateRoute title="Page Not Found" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="Page not found" subtitle="Error code: 404" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<UISection id="not-found-others" title="Here are some suggestions:">
					<SectionListItem id="news">
						<ListItemWithLink id="news" title="News page" to={NEWS_PAGE} />
					</SectionListItem>
					<SectionListItem id="saved">
						<ListItemWithLink id="saved" title="Saved page" to={SAVED_PAGE} />
					</SectionListItem>
					<SectionListItem id="saved">
						<ListItemWithLink id="saved" title="Search for an article" to={SEARCH_PAGE} />
					</SectionListItem>
					<SectionListItem id="settings">
						<ListItemWithLink id="settings" title="Settings page" to={SETTINGS_PAGE} />
					</SectionListItem>
					<SectionListItem id="about-paperboy">
						<ListItemWithLink id="about-paperboy" title="About page" to={ABOUT_SETTINGS_PAGE} />
					</SectionListItem>
					<SectionListItem id="privacy-policy-paperboy">
						<ListItemWithLink
							id="privacy-policy-paperboy"
							title="Privacy Policy page"
							to={PRIVACY_POLICY_SETTINGS_PAGE}
						/>
					</SectionListItem>
				</UISection>
			</Container>
		</PrivateRoute>
	);
};

export default NotFoundPage;
