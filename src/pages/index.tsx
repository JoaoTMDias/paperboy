// eslint-disable-next-line import/no-extraneous-dependencies
import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import {
	Container,
	Layout,
	UIAnchor,
	UICallToAction,
	UIDisplay,
	UILead,
	UISubtitle,
} from "components/index.components";
import { IconBrandingLarge } from "components/icons/index";

import { NEWS_PAGE, ONBOARDING_CHOOSE_SOURCES_PAGE, ONBOARDING_PAGE } from "data/constants/index.constants";
import Meta from "components/meta/index";
import { IBasePageProps } from "data/interfaces";

interface IIndexPageProps extends IBasePageProps {
	authenticated: boolean;
}

const IndexPage: React.FunctionComponent<IIndexPageProps> = ({ authenticated, location }) => {
	if (!authenticated) {
		return (
			<Layout authenticated={authenticated}>
				<Meta title="Welcome" location={location} />
				<UICallToAction float>
					<UIAnchor
						to={ONBOARDING_CHOOSE_SOURCES_PAGE}
						text="Choose your favorite sources"
						label="Click to navigate to the next screen, where you can pick your favorite sources from a wide array of options."
					/>
				</UICallToAction>
				<Container fullheight>
					<IconBrandingLarge visible />
					<UISubtitle text="This is Paperboy" />
					<UIDisplay text="Information is Power" />
					<UILead text="See the most important news of the hour, right from your favorite sources." />
				</Container>
			</Layout>
		);
	}

	return <Redirect from={ONBOARDING_PAGE} to={NEWS_PAGE} replace />;
};

const mapState2Props = (state: any) => ({
	authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(IndexPage);
