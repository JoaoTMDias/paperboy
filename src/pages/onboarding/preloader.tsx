import React, { FunctionComponent, useEffect, useContext } from "react";
import { Redirect } from "@reach/router";
import { Container, ContentSpinner } from "components/index.components";
import { NEWS_PAGE } from "data/constants/index.constants";
import PreferencesContext from "./../../containers/preferences/context";
import { PrivateRoute } from "helpers/index.helpers";

const PreloaderPage: FunctionComponent = () => {
	const { authenticated, setUserAuthentication } = useContext(PreferencesContext);

	useEffect(() => {
		if (!authenticated) {
			setUserAuthentication(true);
		}
	}, [authenticated]);

	if (authenticated) {
		return <Redirect to={NEWS_PAGE} noThrow />;
	}

	return (
		<PrivateRoute title="Fetching News" location={location}>
			<Container fullwidth fullheight isFixed>
				<ContentSpinner fullPage />
			</Container>
		</PrivateRoute>
	);
};

export default PreloaderPage;
