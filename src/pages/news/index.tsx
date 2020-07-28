import React, { useState, useEffect, useContext } from "react";
import { Container, NewsTabs, ContentSpinner } from "components/index.components";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import PreferencesContext from "./../../containers/preferences/context";
import AuditContext from "./../../containers/audit/context";

/**
 * News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
const NewsPage: React.FC<IBasePageProps> = ({ location }) => {
	const [hasData, setHasData] = useState(false);
	const { chosenSources: sources } = useContext(PreferencesContext);
	const { platform } = useContext(AuditContext);

	useEffect(() => {
		if (sources?.quantity > 0 && sources.items.tabs.length > 0) {
			setHasData(true);
		}
	}, []);

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
