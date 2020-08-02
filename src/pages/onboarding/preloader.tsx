import React, { FunctionComponent, useEffect, useContext } from "react";
import { Redirect } from "@reach/router";
import Container from "components/container";
import { NEWS_PAGE } from "data/constants/index.constants";
import PreferencesContext from "./../../containers/preferences/context";
import { PrivateRoute } from "helpers/index.helpers";
import { IBasePageProps } from "data/interfaces";
import ContentSpinner from "components/content-spinner";

const PreloaderPage: FunctionComponent<IBasePageProps> = ({ location }) => {
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
