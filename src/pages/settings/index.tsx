// Libraries
import React, { useRef, useCallback, useContext } from "react";
import { useVibrate, useToggle } from "react-use";
import { EAppThemeType } from "data/interfaces/theme";
import { PRIVACY_POLICY_SETTINGS_PAGE, ABOUT_SETTINGS_PAGE, NEWS_PAGE } from "data/constants/router.constants";
import { IBasePageProps } from "data/interfaces/index";
import { PrivateRoute } from "helpers/index.helpers";
import { VIBRATION_PATTERNS } from "data/constants/index.constants";
import TopNavigation from "components/top-navigation/default";
import TopNavigationWithTitle from "components/top-navigation/with-title/index";
import Container from "components/container";
import UISection from "components/section";
import AddToHomeScreenWithInstall from "components/add-to-homescreen/with-install-button";
import { ListItemWithSwitch, SectionListItem, ListItemWithLink } from "components/lists";
import { UIButton } from "components/button";
import { navigate } from "gatsby";
import AuditContext from "../../containers/audit/context";
import PreferencesContext from "../../containers/preferences/context";

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISettingsPageProps>}
 */
const SettingsPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	const { current: isProduction } = useRef(process.env.NODE_ENV === "production");
	const [vibratingResetPreferences, toggleVibratingForReset] = useToggle(false);
	const [vibratingToggleTheme, toggleThemeVibration] = useToggle(false);
	const { theme, setAppTheme, resetAppState } = useContext(PreferencesContext);
	const { isStandalone } = useContext(AuditContext);

	useVibrate(vibratingResetPreferences, VIBRATION_PATTERNS.RESET_PREFERENCES, false);
	useVibrate(
		vibratingToggleTheme,
		theme === EAppThemeType.DARK ? VIBRATION_PATTERNS.IMPERIAL_MARCH : VIBRATION_PATTERNS.SUPER_MARIO,
		false,
	);

	/**
	 *	@description Switches between Dark/Light theme
	 */
	const toggleDarkTheme = useCallback(() => {
		const themeToSet = theme && theme === EAppThemeType.LIGHT ? EAppThemeType.DARK : EAppThemeType.LIGHT;
		setAppTheme(themeToSet);

		toggleThemeVibration();
	}, [theme, setAppTheme, toggleThemeVibration]);

	function handleClickToClearPreferences() {
		toggleVibratingForReset();
		resetAppState();
		navigate(NEWS_PAGE, {
			replace: true,
		});
	}

	return (
		<PrivateRoute title="Settings page" location={location}>
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
						onChange={toggleDarkTheme}
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
