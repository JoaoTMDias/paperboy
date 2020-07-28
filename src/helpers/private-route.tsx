import React, { useContext } from "react";
import isNil from "lodash/isNil";
import { navigate } from "gatsby";
import { useState, useEffect, PropsWithChildren } from "react";
import { IBasePageProps } from "data/interfaces";
import { ONBOARDING_PAGE } from "data/constants/router.constants";
import ContentSpinner from "components/content-spinner";
import Layout from "components/layout";
import Meta from "components/meta";
import PreferencesContext from "./../containers/preferences/context";

interface IWithAuthenticationProps extends IBasePageProps {
	header?: boolean;
	redirectTo?: string;
	bottomNavigation?: boolean;
	title: string;
}

const PrivateRoute: React.FunctionComponent<PropsWithChildren<IWithAuthenticationProps>> = ({
	children,
	header,
	bottomNavigation,
	title,
	location,
	redirectTo,
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
			redirectTo &&
				navigate(redirectTo, {
					replace: true,
				});
			return null;
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
	redirectTo: ONBOARDING_PAGE,
	bottomNavigation: true,
};

export default PrivateRoute;
