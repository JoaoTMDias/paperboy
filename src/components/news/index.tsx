/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useState, useContext } from "react";
import { useMount } from "react-use";
import Container from "components/container";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import { NewsTabs } from "components/news/news-tabs";
import { ContentSpinner } from "components/content-spinner";
import PreferencesContext from "../../containers/preferences/context";

/**
 * News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
const NewsPage: React.FC<IBasePageProps> = ({ location }) => {
	const [hasData, setHasData] = useState(false);
	const { chosenSources: sources } = useContext(PreferencesContext);

	useMount(() => {
		if (sources && sources.quantity > 0 && sources.items.tabs.length > 0) {
			setHasData(true);
		}
	});

	/**
	 * @description
	 * @date 2019-01-18
	 * @returns
	 * @memberof NewsPage
	 */
	function renderNewsTabs() {
		if (hasData && sources?.items && location) {
			return (
				<NewsTabs
					id="news-tabs"
					items={sources.items}
					location={location}
					style={{
						backgroundColor: "var(--body-background)",
					}}
				/>
			);
		}

		return <ContentSpinner fullPage />;
	}

	return (
		<PrivateRoute title="News" location={location}>
			<Container fullwidth fullheight isFixed={false} offsetTop="3rem">
				{hasData ? renderNewsTabs() : <ContentSpinner />}
			</Container>
		</PrivateRoute>
	);
};

export default NewsPage;
