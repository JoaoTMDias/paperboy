import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import {
  Container,
  Layout,
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
            <li>
              <label>
                <input type="checkbox" name="lastname" />
                <div className="source__status">
                  <img className="source__status__icon" width="24" height="24" alt="Alt text" />
                </div>
                <figure className="source__cover">
                  <img
                    className="source__cover__image"
                    src="#"
                    width="105"
                    height="105"
                    alt="Alt Text"
                  />
                </figure>
                <span id="source-label-cnn" className="source__label">
                  CNN
                </span>
              </label>
            </li>
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
