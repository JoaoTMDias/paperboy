// eslint-disable-next-line import/no-extraneous-dependencies
import { Redirect } from "@reach/router";
import React, { useContext } from "react";
import Container from "components/container";
import { IconBrandingLarge } from "components/icons/index";
import { NEWS_PAGE, ONBOARDING_CHOOSE_SOURCES_PAGE, ONBOARDING_PAGE } from "data/constants/index.constants";
import Meta from "components/meta/index";
import { IBasePageProps } from "data/interfaces";
import { useAddToHomescreenPrompt } from "helpers/custom-hooks/useAddToHomescreenPrompt";
import PreferencesContext from "../containers/preferences/context";
import Layout from "components/layout";
import UICallToAction from "components/call-to-action";
import { UIAnchor, UIButton } from "components/button";
import { UISubtitle, UIDisplay, UILead } from "components/general/typography/typography.theme";

const IndexPage: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	const [isready, promptToInstall] = useAddToHomescreenPrompt();
	const { authenticated } = useContext(PreferencesContext);

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
					{isready && (
						<UIButton
							id="add-to-homescreen"
							flavour="secondary"
							label="Add Paperboy to this device's desktop or homescreen"
							text="+ Add to homescreen"
							onClick={promptToInstall}
						/>
					)}
				</UICallToAction>
				<Container fullheight>
					<IconBrandingLarge visible />
					<UISubtitle text="Welcome!" />
					<UIDisplay text="Paperboy" />
					<UILead text="Hundreds of news sources and your favorite magazines and newspapers. Powered by News API and free of charge" />
				</Container>
			</Layout>
		);
	}

	return <Redirect from={ONBOARDING_PAGE} to={NEWS_PAGE} replace />;
};

export default IndexPage;
