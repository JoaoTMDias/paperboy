import React, { useContext } from "react";
import Container from "components/container";
import { IconBrandingLarge } from "components/icons/branding-large.icon";
import { ONBOARDING_CHOOSE_SOURCES_PAGE } from "data/constants/index.constants";
import { Meta } from "components/meta/index";
import { IBasePageProps } from "data/interfaces";
import { useAddToHomescreenPrompt } from "helpers/custom-hooks/useAddToHomescreenPrompt";
import Layout from "components/layout";
import UICallToAction from "components/call-to-action";
import { UIAnchor, UIButton } from "components/button";
import { UISubtitle, UIDisplay, UILead } from "components/general/typography/typography.theme";
import AuditContext from "src/containers/audit/context";

const WelcomeScreen: React.FunctionComponent<IBasePageProps> = ({ location }) => {
	const [isready, promptToInstall] = useAddToHomescreenPrompt();
	const { isOnline } = useContext(AuditContext);

	if (!isOnline) {
		return (
			<Container fullheight>
				<IconBrandingLarge visible />
				<UISubtitle text="Uh-oh!" />
				<UIDisplay text="You are offline" />
				<UILead text="It seems that the connection was lost. Perhaps try in another time?" />
			</Container>
		);
	}

	return (
		<Layout authenticated={false}>
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
};

export default WelcomeScreen;
