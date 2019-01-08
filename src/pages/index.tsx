import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import {
  Container,
  IconBrandingLarge,
  Layout,
  UIAnchor,
  UICallToAction,
  UIDisplay,
  UILead,
  UISubtitle,
} from "../components/index";

interface IIndexPageProps {
  authenticated: boolean;
  children?: any;
}

const IndexPage: React.FunctionComponent<IIndexPageProps> = props => {
  const { authenticated } = props;

  if (authenticated) {
    return <Redirect to="/news" noThrow={true} />;
  }
  return (
    <Layout authenticated={authenticated}>
      <UICallToAction float={true}>
        <UIAnchor
          to="/welcome/choose-sources"
          text="Choose your favorite sources"
          label="Click to navigate to the next screen, where you can pick your favorite sources from a wide array of options."
        />
      </UICallToAction>
      <Container fullheight={true} title="Current Page is the Welcome Screen.">
        <IconBrandingLarge visible={true} />
        <UISubtitle text="This is Paperboy" />
        <UIDisplay text="Fight back the fake news" />
        <UILead text="See the most important news of the hour, right from your favorite sources." />
      </Container>
    </Layout>
  );
};

const mapState2Props = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(IndexPage);
