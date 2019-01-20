import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  Container,
  Layout,
  ThumbnailLarge,
  UIContentSpinner,
} from "../../components/index";

import {
  ILatestNews,
  ILatestNewsArticle,
} from "../../data/interfaces/index.interface";

import { ChosenNewsSources } from "../../data/interfaces/index.interface";
import { getAllLatestNewsFromSource } from "../../data/redux/actions/index.actions";

interface ISavedPageProps {
  authenticated: boolean;
  sources: ChosenNewsSources;
  latest: ILatestNews;
  dispatch: any;
}

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class SavedPage
 * @extends {React.Component<ISavedPageProps, any>}
 */
class SavedPage extends React.Component<ISavedPageProps, any> {
  constructor(props: ISavedPageProps) {
    super(props);
  }

  /**
   * @description When the page mounts, checks if there are already chosen news
   * sources to pick from and update the latest news feed.
   * @date 2019-01-19
   * @memberof SavedPage
   */
  componentDidMount() {
    const { sources } = this.props;

    if (sources && sources.quantity > 0) {
      this.props.dispatch(getAllLatestNewsFromSource(sources.items));
    }
  }

  /**
   * @description Page only re-renders if the user props change, such as:
   * - User is no longer unauthenticated/authenticated
   * - User has new sources to pick from and fetch data
   * - The data itself is new.
   * @date 2019-01-19
   * @param {ISavedPageProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof SavedPage
   */
  shouldComponentUpdate(nextProps: ISavedPageProps, nextState: any): boolean {
    const { authenticated, sources, latest } = this.props;
    if (
      nextProps.authenticated !== authenticated ||
      nextProps.sources !== sources ||
      nextProps.latest.articles !== latest.articles
    ) {
      return true;
    }

    return false;
  }

  /**
   * @description When the page updates, checks if the redux store has returned:
   * - a new list of sources.
   *
   * If so, fetches data.
   * @date 2019-01-19
   * @param {ISavedPageProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof SavedPage
   */
  componentDidUpdate(nextProps: ISavedPageProps, nextState: any): boolean {
    const { sources } = this.props;

    if (nextProps.sources !== sources && sources.quantity > 0) {
      this.props.dispatch(getAllLatestNewsFromSource(sources.items));

      return true;
    }

    return false;
  }

  /**
   * @description
   * @date 2019-01-18
   * @returns
   * @memberof SavedPage
   */
  renderLatestNewsArticles() {
    const { latest } = this.props;

    if (latest && latest.totalResults > 0) {
      const list = latest.articles.map(
        (article: ILatestNewsArticle, index: number) => {
          return (
            <List key={`latest-news__article__${index}`}>
              <Item id={`latest-news__article__${index}`}>
                <ThumbnailLarge
                  title={article.title}
                  cover={article.urlToImage}
                  url={article.url}
                  source={article.source.name}
                  published={article.publishedAt}
                />
              </Item>
            </List>
          );
        },
      );

      return list;
    } else {
      return <UIContentSpinner isFullPage={true} />;
    }
  }

  render() {
    const { authenticated } = this.props;

    if (!authenticated) {
      return <Redirect from="/news" to="/" noThrow={true} />;
    } else {
      return (
        <Layout authenticated={true} header={false}>
          <Container
            fullwidth={true}
            fullheight={true}
            isFixed={false}
            title="Current Page is: Latest News"
          >
            {this.renderLatestNewsArticles()}
          </Container>
        </Layout>
      );
    }
  }
}

// Styling
const List = styled.ol`
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.li`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
  sources: state.preferences.sources,
  latest: state.news.latest,
});

export default connect(mapStateToProps)(SavedPage);
