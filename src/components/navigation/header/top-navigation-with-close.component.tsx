// Libraries
import { Link } from "gatsby";
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Components
import { LazyLoadingImage } from "../../index";

// Constants
import { NEWS_PAGE } from "../../../data/constants/index.constants";

import CNN_LOGO from "../../../assets/images/sources/icon-cnn.svg";

// Component Props
interface IUITopNavigationBarWithCloseProps {
  title: string;
  source: string;
  theme?: any;
}

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.SFC}
 */
class UITopNavigationBarWithClose extends React.Component<
  IUITopNavigationBarWithCloseProps
> {
  shouldComponentUpdate(
    nextProps: IUITopNavigationBarWithCloseProps,
    nextState,
  ): boolean {
    const { title, source } = this.props;

    if (nextProps.title !== title || nextProps.source !== source) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * render
   */
  public render() {
    const { title, source } = this.props;

    return (
      <Container>
        <Close
          className="close"
          to={NEWS_PAGE}
          aria-label="Close this window and go back to the news page"
        >
          Close
        </Close>
        <div className="center">
          <h2 className="title">{title}</h2>
          <LazyLoadingImage
            width="24"
            height="24"
            cover={CNN_LOGO}
            alt="CNN Logo"
          />
        </div>
        <Close
          className="share"
          to={NEWS_PAGE}
          aria-label="Close this window and go back to the news page"
        >
          Share
        </Close>
      </Container>
    );
  }
}

// Styling
const Container = styled.div`
  width: 100%;
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  margin: 0;
  padding: 0 ${rem("8px")};
  position: fixed;
  z-index: 1;

  .title {
    font-family: var(--heading-font-family);
    font-size: ${rem("14px")};
    color: var(--color-gray9);
    letter-spacing: 0;
    margin-bottom: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
    text-align: center;
  }

  img {
    border-radius: ${rem("24px")};
  }

  .close,
  .share {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &.is-scrolling {
    background-color: var(--color-white);

    .title {
      opacity: 1;
    }
  }
`;

const Close = styled(Link)`
  width: ${rem("44px")};
  height: ${rem("44px")};
`;

export default UITopNavigationBarWithClose;
