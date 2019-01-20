import { Redirect } from "@reach/router";
import * as React from "react";
import { connect } from "react-redux";

import {
  Container,
  Layout,
  NewsTabs,
  UIContentSpinner,
} from "../../components/index";

import { ILatestNews } from "../../data/interfaces/index.interface";

import { ChosenNewsSources } from "../../data/interfaces/index.interface";

interface INewsPageProps {
  authenticated: boolean;
  sources: ChosenNewsSources;
  latest: ILatestNews;
  dispatch: any;
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

  /**
   * @description Page only re-renders if the user props change, such as:
   * - User is no longer unauthenticated/authenticated
   * - User has new sources to pick from and fetch data
   * @date 2019-01-19
   * @param {INewsPageProps} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof NewsPage
   */
  shouldComponentUpdate(nextProps: INewsPageProps, nextState: any): boolean {
    const { authenticated, sources } = this.props;
    if (
      nextProps.authenticated !== authenticated ||
      nextProps.sources !== sources
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
  renderNewsTabs() {
    const { sources } = this.props;

    if (sources && sources.quantity > 0) {
      return <NewsTabs sources={sources} />;
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
            title="Current Page is: News"
          >
            {this.renderNewsTabs()}
          </Container>
        </Layout>
      );
    }
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
  sources: state.preferences.sources,
});

export default connect(mapStateToProps)(NewsPage);
