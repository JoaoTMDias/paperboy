import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import {
  Container,
  Layout,
  SourceItem,
  SourcesList,
  UIAnchor,
  UICallToAction,
  UIDisplay,
  UILead,
  UINavigationBar,
  UINavigationBarBarWithTitle,
  UISection,
  UISubtitle,
} from "../../components/index";

interface IChooseSourcesPageProps {
  authenticated: boolean;
}

const ChooseSourcesPage: React.FunctionComponent<IChooseSourcesPageProps> = (props) => {
  const { authenticated } = props;

  if (authenticated) {
    return <Redirect to="/news" noThrow={true} />;
  }
  return (
    <Layout authenticated={authenticated}>
      <UINavigationBar shadow="hairline">
        <UINavigationBarBarWithTitle
          title="What do you fancy reading?"
          subtitle="Choose at least 3 different sources."
        />
      </UINavigationBar>

      <Container isFixed={true} title="Current Page is: Choose News Sources." offsetTop="7.5rem">
        <UISection id="sources-editors-suggestions" title="Editor's Suggestions">
          <SourcesList
            layout="horizontal"
            label="The Top 20 Editor's Suggestions for news sources."
          >
            <SourceItem id="cnn" label="CNN" />
            <SourceItem id="cnn" label="CNN" />
            <SourceItem id="cnn" label="CNN" />
            <SourceItem id="cnn" label="CNN" />
          </SourcesList>
        </UISection>

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
};

const mapState2Props = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(ChooseSourcesPage);
