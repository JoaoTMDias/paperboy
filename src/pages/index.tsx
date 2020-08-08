/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useContext, Suspense, lazy } from "react";
import { IBasePageProps } from "data/interfaces/index";
import ContentSpinner from 'components/content-spinner';
import PreferencesContext from "../containers/preferences/context";

const NewsPage = lazy(() => import("components/news"));
const WelcomeScreen = lazy(() => import("components/welcome"));

/**
 * News Page Tab
 * @date 2019-01-17
 * @class IndexPage
 * @extends {React.Component<IIndexPageProps, any>}
 */
const IndexPage: React.FC<IBasePageProps> = ({ location }) => {
	const { authenticated } = useContext(PreferencesContext);

	function renderContent() {
		return authenticated ? <NewsPage location={location} /> : <WelcomeScreen />
	}

	return (
		<Suspense fallback={<ContentSpinner fullPage center />}>
			{renderContent()}
		</Suspense>
	);
};

export default IndexPage;
