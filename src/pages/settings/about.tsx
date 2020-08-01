// Libraries
import React from "react";
import {
	Container,
	TopNavigation,
	TopNavigationWithTitle,
} from "components/index.components";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAboutPageProps>}
 */
const AboutPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	return (
		<PrivateRoute title="About Paperboy" location={location}>
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
