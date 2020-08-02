import React, { useContext, useState, useEffect, PropsWithChildren } from "react";
import isNil from "lodash/isNil";

import { IBasePageProps } from "data/interfaces";
import { ContentSpinner } from "components/content-spinner";
import WelcomeScreen from "components/welcome/index";
import Layout from "components/layout";
import { Meta } from "components/meta";
import PreferencesContext from "../containers/preferences/context";

interface IWithAuthenticationProps extends IBasePageProps {
	header?: boolean;
	bottomNavigation?: boolean;
	title: string;
}

const PrivateRoute: React.FunctionComponent<PropsWithChildren<IWithAuthenticationProps>> = ({
	children,
	header,
	bottomNavigation,
	title,
	location,
}) => {
	const [loading, setIsLoading] = useState(true);
	const [hasStatus, setHasStatus] = useState(false);
	const { authenticated } = useContext(PreferencesContext);

	useEffect(() => {
		if (!isNil(authenticated)) {
			setIsLoading(false);
			setHasStatus(true);
		}
	}, [authenticated]);

	if (!loading && hasStatus) {
		if (!authenticated) {
			return <WelcomeScreen />;
		}

		return (
			<Layout authenticated={authenticated} header={header} bottomNavigation={bottomNavigation}>
				<Meta title={title} location={location} />
				{children}
			</Layout>
		);
	}

	return <ContentSpinner fullPage />;
};

PrivateRoute.defaultProps = {
	header: false,
	bottomNavigation: true,
};

export default PrivateRoute;
