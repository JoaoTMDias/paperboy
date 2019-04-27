// Libraries
import * as React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import {
	Container,
	Layout,
	TopNavigation,
	TopNavigationWithTitle,
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
				<Wrapper>
					<p>fashion axe YOLO selfies Schlitz farm-to-table authentic polaroid master cleanse Bushwick dreamcatcher cardigan raw denim vegan Blue Bottle quinoa meh iPhone butcher distillery cray small batch cred lomo 8-bit paleo freegan Pinterest Cosby sweater organic High Life fap PBR&B yr roof party craft beer drinking vinegar XOXO mixtape Etsy salvia Brooklyn readymade leggings shabby chic narwhal wolf 3 wolf moon Godard flannel banh mi chambray food truck Marfa Pitchfork heirloom skateboard ennui fingerstache before they sold out sustainable fanny pack fixie four loko trust fund banjo selvage viral literally gluten-free keytar DIY occupy synth keffiyeh tote bag seitan pickled forage post-ironic pop-up Echo Park gastropub plaid typewriter kitsch twee Truffaut hella asymmetrical vinyl art party Helvetica gentrify messenger bag Vice locavore bitters +1 swag Tumblr American Apparel kale chips crucifix squid semiotics PBR artisan sriracha wayfarers 90's scenester tousled street art stumptown disrupt biodiesel beard Intelligentsia letterpress direct trade  kogi whatever Portland mumblecore irony next level Carles meggings pug pour-over tattooed mustache tofu Austin cliche actually Banksy umami sartorial Tonx church-key Odd Future put a bird on it McSweeney's retro</p>
				</Wrapper>
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
