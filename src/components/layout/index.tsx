// Libraries
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Audit, BottomNavigation, ViewportHeight, ChangeAppTheme } from "../index.components";
import TopNavigation from "../top-navigation/default/index";
import { AppLayout } from "./styles";
import { ILayoutProps } from "./types";

// Styling
import "./layout.scss";

// Layout Component
const Layout: React.FunctionComponent<ILayoutProps> = ({ authenticated, bottomNavigation, children, header }) => {
	/**
	 * Renders the navigation elements, such as the header and the bottom nav
	 *
	 * @returns {JSX.Element}
	 */
	function renderNavigationElements() {
		if (authenticated) {
			return (
				<>
					{header && <TopNavigation key="page-header" />}
					{children}
					{bottomNavigation && <BottomNavigation key="bottom-navigation" />}
				</>
			);
		}

		return <>{children}</>;
	}

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={() => (
				<AppLayout id="app-layout">
					<Audit />
					<ViewportHeight />
					<ChangeAppTheme />
					{renderNavigationElements()}
				</AppLayout>
			)}
		/>
	);
};

Layout.defaultProps = {
	authenticated: true,
	header: true,
	bottomNavigation: true,
};

export default Layout;
