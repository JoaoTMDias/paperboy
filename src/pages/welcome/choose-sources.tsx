import { Redirect } from '@reach/router'
import * as React from 'react'
import { connect } from 'react-redux'
import {
  Confirm,
  Container,
  Layout,
  Modal,
  SourcesList,
  UIAnchor,
  UICallToAction,
  UIContentSpinner,
  UINavigationBar,
  UINavigationBarBarWithTitle,
  UISearchForm,
  UISection,
} from '../../components/index'

// Redux
import { NewsSourcesCategories } from '../../data/interfaces/index.interface'
import {
  getAllAvailableNewsSources,
  getAvailableNewSourcesFromLanguage,
  getUserCountryCodeByCoordinates,
} from '../../data/redux/actions/index.actions'

// Data
import Top20EditorSuggestions from '../../data/dummy/news-sources-suggestions.js'

interface LanguageSupport {
  hasLocation: boolean
  data: any
}

interface IChooseSourcesPageProps {
  authenticated: boolean
  getAllAvailableNewsSources: () => Promise<void>
  dispatch: any;
  sources: NewsSourcesCategories | null;
  geoLocation: boolean;
  userLanguage: LanguageSupport | null;
}

interface IChooseSourcesPageState {
  searchBarIsVisible: boolean;
  hasData: boolean;
  askForLocation: boolean;
}

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 * @date 2019-01-06
 * @class ChooseSourcesPage
 * @extends {React.Component<IChooseSourcesPageProps, IChooseSourcesPageState>}
 */
class ChooseSourcesPage extends React.Component<
  IChooseSourcesPageProps,
  IChooseSourcesPageState
> {
  constructor(props: IChooseSourcesPageProps) {
    super(props);

    this.showSearchBar = this.showSearchBar.bind(this);

    this.state = {
      searchBarIsVisible: false,
      hasData: false,
      askForLocation: false,
    };
  }

  static defaultProps = {
    sources: null,
    authenticated: false,
  };

  /**
   * @description When the Page mounts, adds an event listener for the search bar
   * scroll event, and also fetches a list of all the available news sources to choose
   * from
   * @date 2018-12-29
   * @memberof ChooseSourcesPage
   */
  componentDidMount() {
    document.addEventListener("scroll", this.showSearchBar);
    this.props.dispatch(getAllAvailableNewsSources());
  }

  /**
   * @description Dispatches a number of actions depending on updated props
   * @date 2018-12-29
   * @param {*} prevProps
   * @param {*} prevState
   * @memberof ChooseSourcesPage
   */
  componentDidUpdate(prevProps: any, prevState: any) {
    // If there are news sources to display as a list
    if (prevProps.sources !== this.props.sources) {
      this.setState({
        hasData: true,
      });
    }

    // If there is a userLanguage found
    if (prevProps.userLanguage !== this.props.userLanguage) {
      this.getUserSourcesByLanguage(this.props.userLanguage);
    }

    // If the user's device supports geoLocation features
    if (prevProps.geoLocation !== this.props.geoLocation) {
      this.setState({
        askForLocation: true,
      });
    }
  }

  /**
   * @description When leaving the page, removes the scroll event listener.
   * @date 2018-12-29
   * @memberof ChooseSourcesPage
   */
  componentWillUnmount() {
    document.removeEventListener("scroll", this.showSearchBar);
  }

  showSearchBar(event: Event) {}

  /**
   * @description Attemps to find the user's location using the HTML5 GeoLocation API.
   * The important info needed are the latitude and longitude.
   * If they are present, then dispatches an action to try to find the user's country code.
   * @date 2019-01-07
   * @memberof ChooseSourcesPage
   */
  getUserCountry() {
    /**
     * @description The getCurrentPosition request treated as a Promise.
     * On first attempt, the browser will ask the user for permission to
     * use the GPS or other location features on the device.
     * @date 2019-01-07
     */
    const getPosition = () =>
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

    if (this.state.askForLocation) {
      getPosition()
        .then((position: any) => {
          if (position.coords) {
            const latitude: number = position.coords.latitude;
            const longitude: number = position.coords.longitude;

            this.props.dispatch(
              getUserCountryCodeByCoordinates(latitude, longitude)
            );
          }
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }

  getUserSourcesByLanguage(content: any) {
    if (content.hasLocation && content.data.countryCode) {
      const language: string = `${content.data.countryCode}`.toLowerCase();
      this.props.dispatch(getAvailableNewSourcesFromLanguage(language));
    }
  }

  renderNewsSources() {
    const { hasData } = this.state;
    const { sources } = this.props;

    const hasLanguage: boolean =
      sources && sources.language.length > 0 ? true : false;
    console.log("sources:", sources);
    let categories;

    if (sources && hasLanguage) {
      const { language, ...filteredSources } = sources;
      console.log("filteredSources: ", filteredSources);

      categories = Object.keys(filteredSources).map((category, index) => {
        console.log("key: ", category);

        return (
          <UISection
            key={`sources-${category}-${index}`}
            id={`sources-${category}`}
            title={`${category}`}
            grouped={true}
          >
            <SourcesList
              layout="vertical"
              label="Language Specific News Sources"
              data={category}
            />
          </UISection>
        );
      });
    }

    if (hasData) {
      return (
        <React.Fragment>
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
            <UISection
              id="sources-editors-suggestions"
              title="Editor's Suggestions"
            >
              <SourcesList
                layout="horizontal"
                label="The Top 20 Editor's Suggestions for news sources."
                data={Top20EditorSuggestions}
              />
            </UISection>
            {hasLanguage && (
              <UISection id="sources-language" title="In Your Language">
                <SourcesList
                  layout="horizontal"
                  label="Language Specific News Sources"
                  data={sources.language}
                />
              </UISection>
            )}
            <UISection id="sources-general" title="General" grouped={true}>
              <SourcesList
                layout="vertical"
                label="Language Specific News Sources"
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
    } else {
      return <UIContentSpinner isFullPage={true} />;
    }
  }

  public render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to="/news" noThrow={true} />;
    }
    return (
      <Layout authenticated={authenticated}>
        <UINavigationBar shadow="hairline">
          <UINavigationBarBarWithTitle
            title="What do you fancy reading?"
            subtitle="Breaking news from over 30,000 sources"
          />
        </UINavigationBar>
        <Modal delay={1000}>
          <Confirm
            title="Add some in your language"
            description="We can use your devices' location to find any news sources related to your country/language. Can we?"
            onCancel={() => console.log("canceled")}
            onConfirm={() => this.getUserCountry()}
          />
        </Modal>
        {this.renderNewsSources()}
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
  sources: state.news.sources,
  geoLocation: state.general.supports.geoLocation,
  userLanguage: state.general.userLanguage,
});

export default connect(mapStateToProps)(ChooseSourcesPage);
