// Libraries
import React, { useState, useRef, useContext, useCallback, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Audit, BottomNavigation, ViewportHeight, AddToHomeScreen, Modal, ChangeAppTheme } from "../index.components";
import TopNavigation from "../top-navigation/default/index";
import { AppLayout } from "./styles";
import { ILayoutProps } from "./types";

// Styling
import "./layout.scss";
import AuditContext from "src/containers/audit/context";
import useModal from "components/general/modal";
import holdOn from "helpers/hold-on";

// Layout Component
const Layout: React.FunctionComponent<ILayoutProps> = ({ authenticated, bottomNavigation, children, header }) => {
	const isStandalone = useRef(typeof window !== "undefined" && window.matchMedia("(display-mode: standalone)").matches);
	const { platform } = useContext(AuditContext);
	const isIOS = platform && platform === "ios";
	const [Modal, open] = useModal({});

	useEffect(() => {
		async function openModal() {
			await holdOn(6000);

			open();
		}

		openModal();
	}, []);

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

	const renderAddToHomescren = () => {
		return (
			<Modal>
				<AddToHomeScreen isStandalone={isStandalone.current} />
			</Modal>
		);
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
				<AppLayout id="app-layout">
					<Audit />
					<ViewportHeight />
					<ChangeAppTheme />
					{renderNavigationElements()}
					{isIOS && renderAddToHomescren()}
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
