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
} from '../components/index';

import { EAppThemeType } from "../data/interfaces/theme.interfaces";
import { setAppTheme } from "../data/redux/actions/preferences.action";


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
				<TopNavigation shadow="hairline">
					<TopNavigationWithTitle
						title="Settings"
						subtitle="Personalize the app to your taste"
					/>
				</TopNavigation>
				<Container
					fullwidth
					fullheight
					isFixed={false}
					title="Current Page is: News"
					offsetTop="5.875rem"
				>
					<UISection id="sources-language" title="Appearance">
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
