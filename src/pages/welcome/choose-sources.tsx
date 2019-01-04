import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import {
  Container,
  Layout,
  SourceCard,
  SourcesList,
  UIAnchor,
  UICallToAction,
  UINavigationBar,
  UINavigationBarBarWithTitle,
  UISearchForm,
  UISection,
} from "../../components/index";

// Redux
import { NewsSourcesCategories } from "../../data/interfaces/index.interface";
import { getAllAvailableNewsSources } from "../../data/redux/actions/index.actions";

// Data
import Top20EditorSuggestions from "../../data/dummy/news-sources-suggestions.js";

interface IChooseSourcesPageProps {
  authenticated: boolean;
  getAllAvailableNewsSources: () => Promise<void>;
  sources: NewsSourcesCategories | null;
}

interface IChooseSourcesPageState {
  searchBarIsVisible: boolean;
  hasData: boolean;
}

class ChooseSourcesPage extends React.Component<IChooseSourcesPageProps, IChooseSourcesPageState> {
  constructor(props: IChooseSourcesPageProps) {
    super(props);

    this.showSearchBar = this.showSearchBar.bind(this);

    this.state = {
      searchBarIsVisible: false,
      hasData: false,
    };
  }

  /**
   * @description When the Page mounts, adds an event listener for the search bar
   * scroll event, and also fetches a list of all the available news sources to choose
   * from
   * @date 2018-12-29
   * @memberof ChooseSourcesPage
   */
  componentDidMount() {
    window.addEventListener("scroll", this.showSearchBar);
    this.props.getAllAvailableNewsSources();
  }

  /**
   * @description Checks if there is data retrieved from the store.
   * @date 2018-12-29
   * @param {*} prevProps
   * @param {*} prevState
   * @memberof ChooseSourcesPage
   */
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.sources !== this.props.sources) {
      this.setState({
        hasData: true,
      });
    }
  }

  /**
   * @description When leaving the page, removes the scroll event listener.
   * @date 2018-12-29
   * @memberof ChooseSourcesPage
   */
  componentWillUnmount() {
    window.removeEventListener("scroll", this.showSearchBar);
  }

  showSearchBar(event: Event) {}

  renderNewsSources() {
    const { hasData } = this.state;

    if (hasData) {
      return (
        <React.Fragment>
          <UINavigationBar shadow="hairline">
            <UINavigationBarBarWithTitle
              title="What do you fancy reading?"
              subtitle="Choose at least 3 different sources."
            />
          </UINavigationBar>

          <Container
            fullwidth={true}
            isFixed={true}
            title="Current Page is: Choose News Sources."
            offsetTop="1rem"
          >
            <UISearchForm
              legend="Filter News Sources"
              placeholder="Type to search and filter..."
              label="Submit filter query"
            />
            <UISection id="sources-editors-suggestions" title="Editor's Suggestions">
              <SourcesList
                layout="horizontal"
                label="The Top 20 Editor's Suggestions for news sources."
                data={Top20EditorSuggestions}
              />
            </UISection>
            <UISection id="sources-editors-suggestions" title="General" grouped={true}>
              <SourcesList
                layout="vertical"
                label="Generalistic News Sources"
                data={Top20EditorSuggestions}
              />
            </UISection>
          </Container>
          <UICallToAction>
            <UIAnchor
              to="/news"
              text="Let's Go"
              label="Click to set these as your news sources."
              disabled={true}
            />
          </UICallToAction>
        </React.Fragment>
      );
    }
    return <p>Loading...</p>;
  }

  public render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to="/news" noThrow={true} />;
    }
    return <Layout authenticated={authenticated}>{this.renderNewsSources()}</Layout>;
  }
}

ChooseSourcesPage.defaultProps = {
  sources: null,
};

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
  sources: state.news.sources,
});

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getAllAvailableNewsSources: () => {
      dispatch(getAllAvailableNewsSources());
    },
  };

  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseSourcesPage);
