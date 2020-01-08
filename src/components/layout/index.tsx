// Libraries
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { isIOS } from "react-device-detect";
import { Audit, BottomNavigation, ViewportHeight, AddToHomeScreen, Modal, ChangeAppTheme } from "../index.components";
import TopNavigation from "../top-navigation/default/index";
import MainNavigation from "../main-navigation";
import { Provider } from "./theme-provider";
import { AppLayout } from "./styles";
import { ILayoutProps } from "./types";

// Styling
import "./layout.scss";

// Layout Component
const Layout: React.FunctionComponent<ILayoutProps> = ({ children, authenticated, header, bottomNavigation }) => {
	/**
	 *
	 *
	 * @returns
	 */
	function renderNavigationElements() {
		const isDesktop = !!window.matchMedia("(min-width: 64rem)").matches;

		if (authenticated) {
			return (
				<>
					{header && <TopNavigation key="page-header" />}
					{isDesktop && <MainNavigation key="main-navigation" />}
					{children}
					{!isDesktop && bottomNavigation && <BottomNavigation key="bottom-navigation" />}
				</>
			);
		}

		return <>{children}</>;
	}

	const renderAddToHomescren = () => {
		if (isIOS) {
			return (
				<Modal delay={600000}>
					<AddToHomeScreen />
				</Modal>
			);
		}

		return null;
	};

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
				<Provider>
					<>
						<Audit />
						<ViewportHeight />
						<ChangeAppTheme />
						<AppLayout id="app-layout">
							{renderAddToHomescren()}
							{renderNavigationElements()}
						</AppLayout>
						<div id="portal" />
					</>
				</Provider>
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
