// Libraries
import React from "react";
import Helmet from "react-helmet";
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
							<Helmet
								htmlAttributes={{
									lang: "en",
									prefix: "http://ogp.me/ns#",
									"userLanguage-values": "dir:textdirection",
									itemscope: undefined,
									itemtype: "http://schema.org/WebPage",
									dir: "ltr",
								}}
								title="Paperboy - Welcome"
								meta={[
									{
										name: "description",
										content: "Paperboy",
									},
									{
										name: "viewport",
										content:
											"width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover",
									},
									{
										name: "HandheldFriendly",
										content: "true",
									},
									{ name: "MobileOptimized", content: "375" },
									{
										name: "mobile-web-app-capable",
										content: "yes",
									},
									{
										name: "apple-mobile-web-app-capable",
										content: "yes",
									},
									{
										name: "msapplication-TileColor",
										content: "#E74D3C",
									},
									{
										name: "apple-mobile-web-app-status-bar-style",
										content: "default",
									},
								]}
							/>
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
