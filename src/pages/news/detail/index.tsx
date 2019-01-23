import { Link } from "gatsby";
import { rem } from "polished";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import {
  Container,
  Layout,
  LazyLoadingImage,
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
          <Article>
            <Hero>
              <Copy>
                <h2 id={`hero-cover-title--id`} className="title">
                  TSA: Callouts more than tripled from last year - CNN Video
                </h2>
                <div className="metadata">
                  <h3 className="metadata__source">CNN</h3>
                  <time className="metadata__time">About 1 hour ago</time>
                </div>
              </Copy>
              <LazyLoadingImage
                src="https://cdn.cnn.com/cnnnext/dam/assets/190122080450-john-avlon-tuesday-super-tease.jpg"
                alt="Image"
              />
            </Hero>
          </Article>
        </Container>
      </Layout>
    );
  }
}

const Article = styled.article``;

const Hero = styled.div`
  width: 100%;
  height: 72vh;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;

    z-index: -1;
  }
`;

const Copy = styled.div`
  --number-of-lines: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0 ${rem("32px")} ${rem("16px")} ${rem("16px")};

  .title {
    width: 100%;
    font-family: var(--body-font-family);
    font-size: ${rem("20px")};
    color: var(--color-white);
    letter-spacing: 0;
    text-align: left;
    line-height: ${rem("28px")};
    margin-bottom: var(--global-margin);

    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;
    text-overflow: ellipsis;
    display: flex;
    /* autoprefixer: off */
    display: -webkit-box;
    -webkit-line-clamp: var(--number-of-lines);
    -webkit-box-orient: vertical;
    max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1rem);
  }

  .metadata {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;

    &__source,
    &__time {
      color: var(--color-white);
      font-size: ${rem("11px")};
    }

    &__source {
      font-family: var(--heading-font-family);
      letter-spacing: 0;
      margin-bottom: 0;
      text-transform: uppercase;
    }

    &__time {
      font-family: var(--body-font-family);
      text-transform: capitalize;
    }
  }
`;

const mapStateToProps = (state: any) => ({
  authenticated: state.preferences.authenticated,
});

export default connect(mapStateToProps)(ArticleDetailPage);
