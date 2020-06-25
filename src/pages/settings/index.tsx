// Libraries
import React, { useRef } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	Container,
	TopNavigation,
	TopNavigationWithTitle,
	SectionListItem,
	UISection,
	ListItemWithSwitch,
	ListItemWithLink,
	ListItemWithButton,
	AddToHomeScreenWithInstall,
} from "components/index.components";

import { EAppThemeType } from "data/interfaces/theme";
import { setAppTheme, resetAppState } from "data/redux/actions/index.actions";
import {
	A11Y_SETTINGS_PAGE,
	PRIVACY_POLICY_SETTINGS_PAGE,
	OPEN_SOURCE_SETTINGS_PAGE
} from "data/constants/router.constants";
import { IGlobalStoreState, IBasePageProps } from "data/interfaces/index";
import { EListItemButtonType } from "components/lists/list-types";
import { PrivateRoute } from 'helpers/index.helpers';

// Interface
interface ISettingsPageProps extends IBasePageProps {
	actions: {
		setAppTheme: (theme: EAppThemeType) => {
			type: string;
			payload: {
				data: EAppThemeType;
			};
		},
		resetAppState: (status: boolean) => {
			type: string;
			payload: {
				status: boolean;
			};
		},
	}
	authenticated: boolean;
	children?: any;
	isStandalone: boolean;
	theme: EAppThemeType;
}

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISettingsPageProps>}
 */
const SettingsPage: React.FunctionComponent<ISettingsPageProps> = ({
	isStandalone,
	theme,
	actions,
	location
}) => {
	const { current: isProduction } = useRef(process.env.NODE_ENV === "production")

	/**
	 *	@description Switches between Dark/Light theme
	 */
	function handleToggleDarkTheme() {
		const themeToSet = theme && theme === EAppThemeType.LIGHT ? EAppThemeType.DARK : EAppThemeType.LIGHT;
		actions.setAppTheme(themeToSet);
	}

	function handleClickToClearPreferences() {
		actions.resetAppState(true);
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
					<SectionListItem id="about-paperboy">
						<ListItemWithLink id="about-paperboy" title="Accessibility" to={A11Y_SETTINGS_PAGE} />
					</SectionListItem>
				</UISection>
				<UISection id="settings-appearance" title="Appearance">
					<SectionListItem id="dark-theme">
						<ListItemWithSwitch
							id="dark-theme"
							title="Dark Theme"
							subtitle="Easier on the eyes on low light"
							defaultValue={EAppThemeType.DARK}
							value={theme}
							onClick={handleToggleDarkTheme}
						/>
					</SectionListItem>
				</UISection>
				<UISection id="settings-others" title="Others">
					<SectionListItem id="about-paperboy">
						<ListItemWithLink id="about-paperboy" title="About" to={A11Y_SETTINGS_PAGE} />
					</SectionListItem>
					<SectionListItem id="privacy-policy-paperboy">
						<ListItemWithLink id="privacy-policy-paperboy" title="Privacy Policy" to={PRIVACY_POLICY_SETTINGS_PAGE} />
					</SectionListItem>
					<SectionListItem id="open-source-libraries-paperboy">
						<ListItemWithLink
							id="open-source-libraries-paperboy"
							title="Open-Source Libraries"
							to={OPEN_SOURCE_SETTINGS_PAGE}
						/>
					</SectionListItem>
				</UISection>
				<UISection
					id="settings-exit"
					style={{
						marginBottom: "4rem",
					}}
				>
					<SectionListItem id="logout-paperboy">
						<ListItemWithButton
							id="reset-preferences"
							title="Reset Preferences"
							flavour={EListItemButtonType.PRIMARY}
							onClick={handleClickToClearPreferences}
						/>
					</SectionListItem>
				</UISection>
			</Container>
		</PrivateRoute>
	);
}

SettingsPage.defaultProps = {
	isStandalone: false,
};

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(
			{
				setAppTheme,
				resetAppState
			},
			dispatch,
		),
	};
}

function mapStateToProps(state: IGlobalStoreState) {
	return {
		theme: state.preferences.theme,
		isStandalone: state.general.isStandalone,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
