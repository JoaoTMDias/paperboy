import React from "react";
import { Layout, Container } from "components/index.components";
import { PrivateRoute } from "helpers/index.helpers";

const CategoriesPage = () => (
	<PrivateRoute title="Categories">
		<Container fullwidth fullheight isFixed={false}>
			<p>Categories</p>
		</Container>
	</PrivateRoute>
);

export default CategoriesPage;
