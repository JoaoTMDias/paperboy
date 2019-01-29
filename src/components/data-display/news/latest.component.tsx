import * as React from "react"
import { connect } from "react-redux";
import styled from "styled-components";

import { ThumbnailLarge, UIContentSpinner } from "../../index";

import {
  ILatestNews,
  ILatestNewsArticle,
} from "../../../data/interfaces/index.interface";

import { ChosenNewsSources } from "../../../data/interfaces/index.interface";
import { getAllLatestNewsFromSource } from "../../../data/redux/actions/index.actions";

interface ILatestNewsTabProps {
  sources: ChosenNewsSources;
  latest: ILatestNews;
  dispatch: any;
}

/**
 * @description Latest News Tab
 * @date 2019-01-17
 * @class LatestNewsTab
 * @extends {React.Component<ILatestNewsTabProps, any>}
 */
class LatestNewsTab extends React.Component<ILatestNewsTabProps, any> {
  constructor(props: ILatestNewsTabProps) {
    super(props);
  }

  /**
   * @description When the page mounts, checks if there are already chosen news
   * sources to pick from and update the latest news feed.
   * @date 2019-01-19
   * @memberof LatestNewsTab
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
   * @param {ILatestNewsTabProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof LatestNewsTab
   */
  shouldComponentUpdate(
    nextProps: ILatestNewsTabProps,
    nextState: any,
  ): boolean {
    const { sources, latest } = this.props;
    if (
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
   * @param {ILatestNewsTabProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof LatestNewsTab
   */
  componentDidUpdate(nextProps: ILatestNewsTabProps, nextState: any): boolean {
    const { sources } = this.props;

    if (nextProps.sources !== sources && sources.quantity > 0) {
      this.props.dispatch(getAllLatestNewsFromSource(sources.items));

      return true;
    }

    return false;
  }

  render() {
    const { latest } = this.props;

    if (latest && latest.totalResults > 0) {
      console.log("articles: ", latest.articles);
      const list = latest.articles.map(
        (article: ILatestNewsArticle, index: number) => {
          return (
            <Item key={index} id={`latest-news__article__${index}`}>
              <ThumbnailLarge id={index} options={article} />
            </Item>
          );
        },
      );

      return <List>{list}</List>;
    } else {
      return <UIContentSpinner isFullPage={true} />;
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
  transform: translateY(var(--top-navigation-bar-height));

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
  latest: state.news.latest,
});

export default connect(mapStateToProps)(LatestNewsTab);
