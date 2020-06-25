import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, NewsTabs, ContentSpinner } from "components/index.components";
import { IGlobalStoreState } from "data/interfaces/index";
import { INewsPageProps } from "./types";
import { PrivateRoute } from 'helpers/index.helpers';

/**
 * News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
const NewsPage: React.FC<INewsPageProps> = ({ sources, location }) => {
	const [hasData, setHasData] = useState(false);

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

const mapStateToProps = (state: IGlobalStoreState) => ({
	platform: state.general.platform,
	sources: state.preferences.chosenSources,
});

export default connect(mapStateToProps)(NewsPage);
