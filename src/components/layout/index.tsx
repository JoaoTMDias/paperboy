// Libraries
import React, { useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import { isIOS } from "react-device-detect";
import { Audit, BottomNavigation, ViewportHeight, AddToHomeScreen, Modal, ChangeAppTheme } from "../index.components";
import TopNavigation from "../top-navigation/default/index";
import { Provider } from "./theme-provider";
import { AppLayout } from "./styles";
import { ILayoutProps } from "./types";

// Styling
import "./layout.scss";

// Layout Component
const Layout: React.FunctionComponent<ILayoutProps> = ({ children, authenticated, header, bottomNavigation }) => {
	const isStandalone = useRef(window.matchMedia("(display-mode: standalone)").matches);

	/**
	 *
	 *
	 * @returns
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

	const renderAddToHomescren = () => {
		if (isIOS) {
			return (
				<Modal delay={600000}>
					<AddToHomeScreen isStandalone={isStandalone.current} />
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
