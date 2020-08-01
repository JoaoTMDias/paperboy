// Libraries
import React, { useRef, useCallback, useContext } from "react";
import {
	Container,
	TopNavigation,
	TopNavigationWithTitle,
	SectionListItem,
	UISection,
	ListItemWithSwitch,
	ListItemWithLink,
	AddToHomeScreenWithInstall,
	UIButton,
} from "components/index.components";

import { EAppThemeType } from "data/interfaces/theme";
import { PRIVACY_POLICY_SETTINGS_PAGE, ABOUT_SETTINGS_PAGE } from "data/constants/router.constants";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import PreferencesContext from "../../containers/preferences/context";
import AuditContext from "../../containers/audit/context";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISettingsPageProps>}
 */
const SettingsPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	const { current: isProduction } = useRef(process.env.NODE_ENV === "production");
	const { theme, setAppTheme, resetAppState } = useContext(PreferencesContext);
	const { isStandalone } = useContext(AuditContext);

	/**
	 *	@description Switches between Dark/Light theme
	 */
	const handleToggleDarkTheme = useCallback(
		(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
			event.preventDefault();

			const themeToSet = theme && theme === EAppThemeType.LIGHT ? EAppThemeType.DARK : EAppThemeType.LIGHT;
			setAppTheme(themeToSet);
		},
		[theme, setAppTheme],
	);

	function handleClickToClearPreferences() {
		resetAppState();
	}

	return (
		<PrivateRoute title="Settings" location={location}>
			<TopNavigation
				shadow="hairline"
				style={{
					marginBottom: "1.25rem",
				}}
			>
				<TopNavigationWithTitle title="Settings" subtitle="Personalize the app to your taste" />
			</TopNavigation>
			<Container fullwidth fullheight isFixed={false} offsetTop="5.875rem">
				<UISection id="settings-general" title="General">
					{isProduction && (
						<AddToHomeScreenWithInstall
							id="about-paperboy"
							title="Add to Home Screen"
							subtitle="Instant Installation"
							isStandalone={isStandalone}
						/>
					)}
					<ListItemWithSwitch
						id="dark-theme"
						title="Dark Theme"
						subtitle="Easier on the eyes on low light"
						defaultValue={EAppThemeType.DARK}
						value={theme}
						onClick={handleToggleDarkTheme}
					/>
				</UISection>
				<UISection id="settings-others" title="Others">
					<SectionListItem id="about-paperboy">
						<ListItemWithLink id="about-paperboy" title="About" to={ABOUT_SETTINGS_PAGE} />
					</SectionListItem>
					<SectionListItem id="privacy-policy-paperboy">
						<ListItemWithLink id="privacy-policy-paperboy" title="Privacy Policy" to={PRIVACY_POLICY_SETTINGS_PAGE} />
					</SectionListItem>
				</UISection>
				<UISection
					id="settings-exit"
					style={{
						marginBottom: "4rem",
					}}
				>
					<SectionListItem id="logout-paperboy" center>
						<UIButton
							id="reset-preferences"
							onClick={handleClickToClearPreferences}
							type="button"
							text="Reset Preferences"
						/>
					</SectionListItem>
				</UISection>
			</Container>
		</PrivateRoute>
	);
};

export default SettingsPage;
