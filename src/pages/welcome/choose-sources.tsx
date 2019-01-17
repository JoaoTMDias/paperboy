import { Redirect } from '@reach/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import {
  Confirm,
  Container,
  Layout,
  Modal,
  SourcesList,
  UIButton,
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
  SetChosenNewsSources,
} from '../../data/redux/actions/index.actions'

// Data
import Top20EditorSuggestions from '../../data/dummy/news-sources-suggestions.js'

type ListOfCategories = Object[]

interface LanguageSupport {
  hasLocation: boolean
  data: any
}

interface ChosenSources {
  list: string[]
}

interface IChooseSourcesPageProps {
  authenticated: boolean
  dispatch: any
  sources: NewsSourcesCategories | null
  geoLocation: boolean
  userLanguage: LanguageSupport | null
  chosenSources: any
}

interface IChooseSourcesPageState {
  searchBarIsVisible: boolean
  hasData: boolean
  askForLocation: boolean
  chosen: ChosenSources
}

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 * @date 2019-01-06
 * @class ChooseSourcesPage
 * @extends {React.Component<IChooseSourcesPageProps, IChooseSourcesPageState>}
 */
class ChooseSourcesPage extends React.PureComponent<
  IChooseSourcesPageProps,
  IChooseSourcesPageState
> {
  constructor(props: IChooseSourcesPageProps) {
    super(props)

    this.showSearchBar = this.showSearchBar.bind(this)
    this.handleClickOnItem = this.handleClickOnItem.bind(this)

    this.state = {
      searchBarIsVisible: false,
      hasData: false,
      askForLocation: false,
      chosen: {
        list: [],
      },
    }
  }

  static defaultProps = {
    sources: null,
    authenticated: false,
    chosenSources: null,
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

    if (prevProps.chosenSources !== this.props.chosenSources) {
      navigate(`welcome/preloader`);
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
        navigator.geolocation.getCurrentPosition(resolve, reject)
      });

    if (this.state.askForLocation) {
      getPosition()
        .then((position: any) => {
          if (position.coords) {
            const latitude: number = position.coords.latitude
            const longitude: number = position.coords.longitude

            this.props.dispatch(
              getUserCountryCodeByCoordinates(latitude, longitude)
            )
          }
        })
        .catch(err => {
          console.error(err.message)
        });
    }
  }

  /**
   * @description Fetches a list of available news sources from a specific country code.
   * @date 2019-01-08
   * @param {*} content
   * @memberof ChooseSourcesPage
   */
  getUserSourcesByLanguage(content: any) {
    if (content.hasLocation && content.data.countryCode) {
      const language: string = `${content.data.countryCode}`.toLowerCase();
      this.props.dispatch(getAvailableNewSourcesFromLanguage(language));
    }
  }

  /**
   * @description If there are any results of available sources from a language,
   * renders them on the screen. This only happens after the user has accepted the
   * location service usage.
   * @date 2019-01-08
   * @param {*} data
   * @returns
   * @memberof ChooseSourcesPage
   */
  renderListOfSourcesFromLanguage(data: any) {
    return (
      <UISection id="sources-language" title="In your Language">
        <SourcesList
          layout="horizontal"
          label="Language Specific News Sources"
          data={data}
          selectedOptions={this.state.chosen.list}
          handleChange={this.handleClickOnItem}
        />
      </UISection>
    );
  }

  /**
   * @description Displays a list of different categories of news sources.
   * While there is no data, a spinner is shown.
   * @date 2019-01-08
   * @param {ListOfCategories} data
   * @returns
   * @memberof ChooseSourcesPage
   */
  renderListOfCategories(data: ListOfCategories) {
    const list = Object.entries(data).map((category, index) => {
      const title = category[0]
      return (
        <UISection
          key={`sources-${title}-${index}`}
          id={`sources-${title}`}
          title={`${title}`}
          grouped={true}
        >
          <SourcesList
            layout="vertical"
            label="Language Specific News Sources"
            data={category[1]}
            selectedOptions={this.state.chosen.list}
            handleChange={this.handleClickOnItem}
          />
        </UISection>
      )
    });

    return list;
  }

  /**
   * @description
   * @date 2019-01-09
   * @param {React.SyntheticEvent} event
   * @param {string} key
   * @param {number} position
   * @memberof ChooseSourcesPage
   */
  handleClickOnItem(event: React.SyntheticEvent, position: number) {
    const inputTarget = event.target as HTMLInputElement;
    const clickedItem = inputTarget.value;
    let chosenItems: string[];

    if (this.state.chosen.list.indexOf(clickedItem) > -1) {
      chosenItems = this.state.chosen.list.filter(
        (word: string) => word !== clickedItem
      );
    } else {
      chosenItems = [...this.state.chosen.list, clickedItem];
    }

    this.setState(prevState => ({
      chosen: { ...prevState.chosen, list: chosenItems },
    }));
  }

  /**
   * @description Updates the store with the new chosen sources.
   * @date 2019-01-16
   * @param {MouseEvent} event
   * @memberof ChooseSourcesPage
   */
  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    const { list } = this.state.chosen;

    if (list.length >= 3) {
      this.props.dispatch(SetChosenNewsSources(list));
    }
  }

  public render() {
    const { authenticated, sources } = this.props;
    const { hasData, chosen } = this.state;
    const disableButton = chosen.list.length < 3 ? true : false;

    const {
      available: [],
      language: [],
      ...filter // tslint:disable-line
    } = sources;

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
            title="Use location services?"
            description="Can I use your devices' location to find any news sources related to your country/language?"
            onCancel={() => console.log("canceled")}
            onConfirm={() => this.getUserCountry()}
          />
        </Modal>
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
              selectedOptions={this.state.chosen.list}
              handleChange={this.handleClickOnItem}
            />
          </UISection>
          {sources && sources.language.length > 0
            ? this.renderListOfSourcesFromLanguage(sources.language)
            : null}
          {hasData ? (
            this.renderListOfCategories({ ...filter })
          ) : (
            <UIContentSpinner isFullPage={true} />
          )}
        </Container>
        <UICallToAction>
          <UIButton
            type="submit"
            text="Let's Go"
            label="Click to set these as your news sources."
            onClick={event => this.handleSubmit(event)}
            disabled={disableButton}
          />
        </UICallToAction>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
  sources: state.news.sources,
  chosenSources: state.preferences.sources.items,
  geoLocation: state.general.supports.geoLocation,
  userLanguage: state.general.userLanguage,
});

export default connect(mapStateToProps)(ChooseSourcesPage);
