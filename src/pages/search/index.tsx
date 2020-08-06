/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import { PrivateRoute } from "helpers/index.helpers";
import SearchForm from "components/search/form";
import { IBasePageProps } from "data/interfaces";
import TopNavigation from "components/top-navigation/default";
import Container from "components/container";

const SearchPage: React.FC<IBasePageProps> = ({ location }) => {
	return (
		<PrivateRoute title="Search page" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="Search" subtitle="Find the news you want" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<SearchForm />
			</Container>
		</PrivateRoute>
	);
};

export default SearchPage;
