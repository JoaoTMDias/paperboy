// Libraries
import * as React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import {
	Container,
	Layout,
	TopNavigation,
	TopNavigationWithTitle,
	SectionListItem,
	ESectionListItemType,
	FormSwitch,
} from '../components/index';


// Interface
interface ISettingsPageProps {
	authenticated: boolean;
	children?: any;
}


/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISettingsPageProps>}
 */
const SettingsPage: React.FunctionComponent<ISettingsPageProps> = (props) => {
	const { authenticated } = props;

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
				<SectionListItem
					id="dark-theme"
					title="Enable Dark Theme"
					type={ESectionListItemType.BUTTON}
				>
					<FormSwitch
						id="dark-theme"
						checked={false}
						handleOnClickToChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log('click')}
					/>
				</SectionListItem>

			</Container>
		</Layout>
	);
};

// Styling
const Wrapper = styled.div`
	width: 100%;
`;

const mapState2Props = (state: any) => ({
	authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(SettingsPage);
