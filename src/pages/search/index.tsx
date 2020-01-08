import React from "react";
import { Layout, Container } from "../../components/index.components";

const SearchPage = () => (
	<Layout header={false}>
		<Container fullwidth fullheight isFixed={false} title="Current Page is: Search Page">
			<h1>Search</h1>
		</Container>
	</Layout>
);

export default SearchPage;
