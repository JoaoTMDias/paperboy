/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useMemo, useContext, useEffect } from "react";
import { navigate } from "gatsby";
import { Meta } from "components/meta/index";
import { IGetAllNewsSources, IBasePageProps } from "data/interfaces/index";
import { NEWS_PAGE, ONBOARDING_PRELOADER } from "data/constants/index.constants";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import { filterData } from "helpers/filter-data";
import ChooseSourcesForm from "components/choose-sources/choose-sources-form";
import Layout from "components/layout";
import TopNavigation from "components/top-navigation/default";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import PreferencesContext from "../../containers/preferences/context";

export interface IChosenSource {
	name: string;
	category: string;
}

export interface ChosenSources {
	list: IChosenSource[];
}

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 */
const ChooseSourcesPage: FunctionComponent<IBasePageProps> = ({ location }) => {
	const { authenticated, chosenSources, setChosenSources } = useContext(PreferencesContext);
	const { data, error, loading } = useNewsApi<IGetAllNewsSources>({
		type: "sources",
	});

	const result = useMemo(() => filterData(data?.sources), [data]);

	useEffect(() => {
		if (chosenSources) {
			navigate(ONBOARDING_PRELOADER);
		}
	}, [chosenSources]);

	if (authenticated) {
		navigate(NEWS_PAGE, {
			replace: true,
		});
		return null;
	}

	return (
		<Layout authenticated={authenticated}>
			<Meta title="Choose your favorite sources" location={location} />
			<TopNavigation shadow="hairline">
				<TopNavigationWithTitle title="What do you fancy reading?" subtitle="Breaking news from over 30,000 sources" />
			</TopNavigation>
			<ChooseSourcesForm error={error} loading={loading} result={result} handleSubmitForm={setChosenSources} />
		</Layout>
	);
};

export default ChooseSourcesPage;
