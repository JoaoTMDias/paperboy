import React, { useContext } from "react";
import { IBasePageProps } from "data/interfaces/index";
import NewsPage from "components/news";
import WelcomeScreen from "components/welcome";
import PreferencesContext from "../containers/preferences/context";

/**
 * News Page Tab
 * @date 2019-01-17
 * @class IndexPage
 * @extends {React.Component<IIndexPageProps, any>}
 */
const IndexPage: React.FC<IBasePageProps> = ({ location }) => {
	const { authenticated } = useContext(PreferencesContext);

	return authenticated ? <NewsPage location={location} /> : <WelcomeScreen />;
};

export default IndexPage;
