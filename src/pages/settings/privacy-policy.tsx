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
 * @returns {React.FunctionComponent<IPrivacyPolicyPageProps>}
 */
const PrivacyPolicyPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	return (
		<PrivateRoute title="Privacy Policy page" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="Privacy Policy" subtitle="We respect your privacy" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<p>content here</p>
			</Container>
		</PrivateRoute>
	);
};

export default PrivacyPolicyPage;
