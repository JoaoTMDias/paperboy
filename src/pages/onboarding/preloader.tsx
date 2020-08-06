/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useEffect, useContext } from "react";
import { Redirect } from "@reach/router";
import Container from "components/container";
import { NEWS_PAGE } from "data/constants/index.constants";
import { PrivateRoute } from "helpers/index.helpers";
import { IBasePageProps } from "data/interfaces";
import ContentSpinner from "components/content-spinner";
import PreferencesContext from "../../containers/preferences/context";

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
