import { Link, navigate } from "gatsby";
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
} from "../../components/index";

export interface IChooseSourcesPageProps {
  authenticated: boolean | null;
}

class ChooseSourcesPage extends React.Component<IChooseSourcesPageProps, any> {
  public render() {
    const { authenticated } = this.props;
    switch (authenticated) {
      case true:
        navigate("/news", { state: { authenticated: true } });
        break;

      case false:
        return (
          <Layout authenticated={authenticated}>
            <Container
              isFixed={false}
              fullheight={true}
              title="Current Page is: Choose News Sources."
            >
              <UISubtitle text="Welcome" />
              <UIDisplay text="Your news, your control." />
              <UILead text="The most important news of the hour, right from your favorite sources." />
              <UICallToAction>
                <UIAnchor
                  to="/welcome/choose-sources"
                  text="Choose your favorite sources"
                  label="Click to navigate to the next screen, where you can pick your favorite sources from a wide array of options."
                />
              </UICallToAction>
            </Container>
          </Layout>
        );
        break;

      default:
        return <p>Loading...</p>;
    }
  }
}

const mapState2Props = state => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(ChooseSourcesPage);
