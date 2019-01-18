import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  Container,
  Layout,
  ThumbnailLarge,
  UIContentSpinner,
} from "../components/index";

import {
  ILatestNews,
  ILatestNewsArticle,
} from "../data/interfaces/index.interface";
interface INewsPageProps {
  authenticated: boolean;
  latest: ILatestNews;
}

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsPage
 * @extends {React.Component<INewsPageProps, any>}
 */
class NewsPage extends React.Component<INewsPageProps, any> {
  constructor(props: INewsPageProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: INewsPageProps, nextState: any): boolean {
    const { authenticated, latest } = this.props;
    if (
      nextProps.authenticated !== authenticated ||
      nextProps.latest.articles !== latest.articles
    ) {
      return true;
    }

    return false;
  }

  /**
   * @description
   * @date 2019-01-18
   * @returns
   * @memberof NewsPage
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
        <Layout authenticated={true}>
          <Container
            fullwidth={true}
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
  latest: state.news.latest,
});

export default connect(mapStateToProps)(NewsPage);
