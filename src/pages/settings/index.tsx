// Libraries
import * as React from "react";
import { connect } from 'react-redux';
import {
	Container,
	Layout,
	TopNavigation,
	TopNavigationWithTitle,
	SectionListItem,
	ESectionListItemType,
	FormSwitch,
	UISection,
	IconArrowRight,
} from '../../components/index';

import { EAppThemeType } from "../../data/interfaces/theme.interfaces";
import { setAppTheme } from "../../data/redux/actions/preferences.action";
import { A11Y_SETTINGS_PAGE, PRIVACY_POLICY_SETTINGS_PAGE, OPEN_SOURCE_SETTINGS_PAGE } from "../../data/constants/router.constants";


// Interface
interface ISettingsPageProps {
	dispatch?: any;
	authenticated: boolean;
	children?: any;
	theme: EAppThemeType;
}


/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISettingsPageProps>}
 */
class SettingsPage extends React.Component<ISettingsPageProps> {
	constructor (props: ISettingsPageProps) {
		super(props);
	}

	/**
	 * @description Switches between Dark/Light theme
	 * @author João Dias
	 * @date 2019-06-07
	 * @param {React.MouseEvent<HTMLLabelElement, MouseEvent>} event
	 * @memberof SettingsPage
	 */
	handleToggleDarkTheme(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
		event.preventDefault();

		const { dispatch, theme } = this.props;

		const themeToSet = theme && theme === EAppThemeType.LIGHT ? EAppThemeType.DARK : EAppThemeType.LIGHT;
		dispatch(setAppTheme(themeToSet));

	}

	render() {
		const { authenticated, theme } = this.props;

		return (
			<Layout authenticated={authenticated} header={false}>
				<TopNavigation shadow="hairline" style={{
					marginBottom: '1.25rem',
				}}>
					<TopNavigationWithTitle
						title="Settings"
						subtitle="Personalize the app to your taste"
					/>
				</TopNavigation>
				<Container
					fullwidth
					fullheight
					isFixed={false}
					title="Current Page is: Settings"
					offsetTop="5.875rem"
				>
					<UISection id="settings-general" title="General">
						<SectionListItem
							id="about-paperboy"
							title="Accessibility"
							type={ESectionListItemType.LINK}
							to={A11Y_SETTINGS_PAGE}
							onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => this.handleToggleDarkTheme(event)}
						>
							<IconArrowRight />
						</SectionListItem>
					</UISection>
					<UISection id="settings-appearance" title="Appearance">
						<SectionListItem
							id="dark-theme"
							title="Dark Theme"
							subtitle="Easier on the eyes on low light"
							type={ESectionListItemType.BUTTON}
							onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => this.handleToggleDarkTheme(event)}
						>
							<FormSwitch
								id="dark-theme"
								value={EAppThemeType.DARK}
								checked={theme === EAppThemeType.DARK}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
									event.preventDefault();
								}}
							/>
						</SectionListItem>
					</UISection>
					<UISection id="settings-others" title="Others">
						<SectionListItem
							id="about-paperboy"
							title="About"
							to={A11Y_SETTINGS_PAGE}
							type={ESectionListItemType.LINK}
							onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => this.handleToggleDarkTheme(event)}
						>
							<IconArrowRight />
						</SectionListItem>
						<SectionListItem
							id="privacy-policy-paperboy"
							title="Privacy Policy"
							to={PRIVACY_POLICY_SETTINGS_PAGE}
							type={ESectionListItemType.LINK}
							onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => this.handleToggleDarkTheme(event)}
						>
							<IconArrowRight />
						</SectionListItem>
						<SectionListItem
							id="open-source-libraries-paperboy"
							title="Open-Source Libraries"
							to={OPEN_SOURCE_SETTINGS_PAGE}
							type={ESectionListItemType.LINK}
							onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => this.handleToggleDarkTheme(event)}
						>
							<IconArrowRight />
						</SectionListItem>
					</UISection>
				</Container>
			</Layout>
		);
	}
}

const mapState2Props = (state: any) => ({
	authenticated: state.preferences.authenticated,
	theme: state.preferences.theme,
});

export default connect(mapState2Props)(SettingsPage);
