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
  UINavigationBar,
  UINavigationBarBarWithTitle,
  UISearchForm,
  UISection,
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

      <Container fullwidth={true} isFixed={true} title="Current Page is: Choose News Sources." offsetTop="1rem">
        <UISearchForm
          legend="Filter News Sources"
          placeholder="Type to search and filter..."
          label="Submit filter query"
        />
        <UISection id="sources-editors-suggestions" title="Editor's Suggestions">
          <SourcesList
            layout="horizontal"
            label="The Top 20 Editor's Suggestions for news sources."
          >
            <SourceItem
              id="cnn"
              label="CNN"
              cover="https://cdn.cnn.com/cnn/.e1mo/img/4.0/logos/logo_cnn_badge_2up.png"
            />
            <SourceItem
              id="theverge"
              label="The Verge"
              cover="https://cdn.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png"
            />
            <SourceItem
              id="bbc"
              label="BBC"
              cover="https://static.bbci.co.uk/wwhp/1.132.0/responsive/img/apple-touch/apple-touch-180.jpg"
            />
            <SourceItem
              id="abc-news"
              label="ABC News"
              cover="https://s.abcnews.com/assets/images/apple-touch-icons/touch-icon-iphone-retina.png"
            />
          </SourcesList>
        </UISection>
      </Container>
      <UICallToAction>
        <UIAnchor to="/news" text="Let's Go" label="Click to set these as your news sources." disabled={true} />
      </UICallToAction>
    </Layout>
  );
};

const mapState2Props = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapState2Props)(ChooseSourcesPage);
