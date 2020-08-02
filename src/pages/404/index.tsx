// Libraries
import React from "react";
import {
	Container,
	TopNavigation,
	TopNavigationWithTitle,
	SectionListItem,
	UISection,
	ListItemWithLink,
} from "components/index.components";
import {
	ONBOARDING_PAGE,
	NEWS_PAGE,
	SAVED_PAGE,
	SEARCH_PAGE,
	SETTINGS_PAGE,
	PRIVACY_POLICY_SETTINGS_PAGE,
	ABOUT_SETTINGS_PAGE
} from "data/constants/router.constants";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";

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
					<SectionListItem id="homepage">
						<ListItemWithLink id="homepage" title="Home page" to={ONBOARDING_PAGE} />
					</SectionListItem>
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
						<ListItemWithLink id="privacy-policy-paperboy" title="Privacy Policy page" to={PRIVACY_POLICY_SETTINGS_PAGE} />
					</SectionListItem>
				</UISection>
			</Container>
		</PrivateRoute>
	);
};

export default NotFoundPage;
