import React from "react";
import { Container } from "components/index.components";
import { PrivateRoute } from "helpers/index.helpers";
import { IBasePageProps } from "data/interfaces";

const SearchPage: React.FC<IBasePageProps> = ({ location }) => (
	<PrivateRoute title="Search Article" location={location}>
		<Container fullwidth fullheight isFixed={false}>
			<h1>Search</h1>
		</Container>
	</PrivateRoute>
);

export default SearchPage;
