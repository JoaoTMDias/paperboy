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

const IndexPage: React.FunctionComponent<IIndexPageProps> = (props) => {
  const { authenticated } = props;

  if (authenticated) {
    return <Redirect to="/news" noThrow={true} />;
  }
  return (
    <Layout authenticated={authenticated}>
      <IconBrandingLarge visible={true} />
      <Container
        isFixed={false}
        fullheight={true}
        title="Current Page is the Welcome Screen."
        style={{
          marginTop: "16rem",
          marginRight: "auto",
          marginBottom: "3.5rem",
          marginLeft: "auto",
          maxWidth: "40rem",
        }}
      >
        <UISubtitle text="Welcome" />
        <UIDisplay text="Your news, your control." />
        <UILead text="The most important news of the hour, right from your favorite sources." />
        <UICallToAction float={true}>
          <UIAnchor
            to="/welcome/choose-sources"
            text="Choose your favorite sources"
            label="Click to navigate to the next screen, where you can pick your favorite sources from a wide array of options."
          />
        </UICallToAction>
      </Container>
    </Layout>
  );
};

const mapState2Props = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(IndexPage);
