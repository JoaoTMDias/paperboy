import { Redirect } from "@reach/router";
import { Link } from "gatsby";
import React from "react";
import { connect } from "react-redux";

// Components
import {
  Container,
  Layout,
  UITopNavigationBarWithClose,
} from "../../../components/index";

interface IArticleDetailPage {
  authenticated: boolean;
}

class ArticleDetailPage extends React.Component<IArticleDetailPage, any> {
  public render() {
    return (
      <Layout header={false} bottomNavigation={false}>
        <UITopNavigationBarWithClose title="Teste" source="source" />
        <Container
          fullwidth={true}
          fullheight={true}
          title="Current Page is: News Detail."
          offsetTop="0"
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapStateToProps)(ArticleDetailPage);
