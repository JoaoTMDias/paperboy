import React, { FunctionComponent, useMemo, useContext, useEffect } from "react";
import { Redirect } from "@reach/router";
import { navigate } from "gatsby";
import Meta from "components/meta/index";
import { Layout, TopNavigation, TopNavigationWithTitle } from "components/index.components";
import { IGetAllNewsSources, IBasePageProps } from "data/interfaces/index";
import { NEWS_PAGE, ONBOARDING_PRELOADER } from "data/constants/index.constants";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import { filterData } from "helpers/filter-data";
import ChooseSourcesForm from "components/choose-sources/choose-sources-form";
import PreferencesContext from "./../../containers/preferences/context";

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
const ChooseSourcesPage: FunctionComponent<IBasePageProps> = ({
	location
}) => {
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
		return <Redirect to={NEWS_PAGE} noThrow />;
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
