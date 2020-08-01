import React from "react";
import { Container, TopNavigation, TopNavigationWithTitle } from "components/index.components";
import { PrivateRoute } from "helpers/index.helpers";
import SearchForm from "components/search/form";
import { IBasePageProps } from "data/interfaces";

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
