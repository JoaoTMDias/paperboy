// Libraries
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

// Components
import { LazyLoadingImage, IconClose, IconShare } from '../../index';

// Constants
import { NEWS_PAGE } from '../../../data/constants/index.constants';

import CNN_LOGO from '../../../assets/images/sources/icon-cnn.svg';

// Utility functions
const getScrollPosition = (el = window) => ({
  y: el.pageYOffset !== undefined ? el.pageYOffset : document.body.scrollTop,
});

const debounce = (func: any, wait: number) => {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    //@ts-ignore
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Component Props
interface IUITopNavigationBarWithCloseProps {
  title: string;
  source: string;
  theme?: any;
}

interface IUITopNavigationBarWithCloseState {
  root: HTMLElement | null;
}

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.SFC}
 */
class UITopNavigationBarWithClose extends React.Component<
  IUITopNavigationBarWithCloseProps,
  IUITopNavigationBarWithCloseState
> {
  constructor(props: IUITopNavigationBarWithCloseProps) {
    super(props);
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      root: null,
    };
  }

  private navBar = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (document !== undefined) {
      this.setState(
        {
          root: document.documentElement,
        },
        () => {
          document.addEventListener('scroll', debounce(this.handleScroll, 16));
        },
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScroll, 16));
  }

  shouldComponentUpdate(nextProps: IUITopNavigationBarWithCloseProps): boolean {
    const { title, source } = this.props;

    if (nextProps.title !== title || nextProps.source !== source) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Handles the scrolling distance and the fixed-nav functionality
   *
   * @returns
   * @memberof Header
   */
  handleScroll() {
    const nav = document.querySelector('.above-the-fold');
    const navbar: HTMLDivElement | null = this.navBar.current;
    const root = this.state.root ? this.state.root : null;
    if (nav && navbar && root) {
      const ScrollPosition = getScrollPosition();
      if (ScrollPosition.y >= 64) {
        root.style.setProperty(
          '--top-navigation-bar--detail-foreground',
          'var(--color-gray9)',
        );
        navbar.classList.add('is-scrolling');
      } else if (ScrollPosition.y < 64) {
        root.style.setProperty(
          '--top-navigation-bar--detail-foreground',
          'var(--color-white)',
        );
        navbar.classList.remove('is-scrolling');
      }
    }

    return false;
  }

  /**
   * render
   */
  public render() {
    const { title, source } = this.props;

    return (
      <Container ref={this.navBar}>
        <Close
          className="close"
          to={NEWS_PAGE}
          aria-label="Close this window and go back to the news page"
        >
          <IconClose />
        </Close>
        <div className="center">
          <h2 className="title">{title}</h2>
          <LazyLoadingImage
            width="24"
            height="24"
            src={CNN_LOGO}
            alt="CNN Logo"
          />
        </div>
        <Close
          className="share"
          to={NEWS_PAGE}
          aria-label="Close this window and go back to the news page"
        >
          <IconShare platform="ios" />
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

  background-color: var(--top-navigation-bar--detail-background);
  margin: 0;
  padding: 0 ${rem('8px')};
  position: fixed;
  z-index: 10;
  transition: all 200ms ease-in-out;

  .center {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    .title {
      font-family: var(--heading-font-family);
      font-size: ${rem('14px')};
      color: var(--color-gray9);
      letter-spacing: 0;
      margin-bottom: 0;
      position: absolute;
      z-index: -1;
      opacity: 0;
      text-align: center;
      text-overflow: ellipsis;
      max-height: ${rem('25px')};
      width: 0;
    }
  }

  img {
    border-radius: ${rem('24px')};
    transform: translate3d(0, 0, 0);
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
      width: calc(100% - ${rem('24px')});
    }

    img {
      transform: translate3d(-30vw, 0, 0);
    }
  }
`;

const Close = styled(Link)`
  width: ${rem('44px')};
  height: ${rem('44px')};
`;

export default UITopNavigationBarWithClose;
