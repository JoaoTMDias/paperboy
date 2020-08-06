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
