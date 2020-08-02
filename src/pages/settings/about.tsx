// Libraries
import React from "react";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import TopNavigation from "components/top-navigation/default";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import Container from "components/container";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAboutPageProps>}
 */
const AboutPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	return (
		<PrivateRoute title="About page" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="About" subtitle="Read the news anytime" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<p>content here</p>
			</Container>
		</PrivateRoute>
	);
};

export default AboutPage;
