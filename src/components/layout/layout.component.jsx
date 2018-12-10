// Libraries
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// Components
import TopNavigation from '../ui/navigation/header/index';
import MainNavigation from '../ui/navigation/main/main-navigation';
import BottomNavigation from '../ui/navigation/bottom-navigation/bottom-navigation.component';

// Styling
import './layout.scss';

// Favicons
import favicon from '../../../static/favicon.ico';
import favicon16 from '../../../static/favicon-16x16.png';
import favicon32 from '../../../static/favicon-32x32.png';
import favicon194 from '../../../static/favicon-194x194.png';
import maskIcon from '../../../static/safari-pinned-tab.svg';
import appleTouchIcon from '../../../static/apple-touch-icon.png';

const theme = {
  colorPrimary: 'var(--color-primary)',
  colorSelect: 'var(--color-select)',
  colorWhite: 'var(--color-white)',
  colorGray0: 'var(--color-gray0)',
  colorGray1: 'var(--color-gray1)',
  colorGray2: 'var(--color-gray2)',
  colorGray3: 'var(--color-gray3)',
  colorGray4: 'var(--color-gray4)',
  colorGray5: 'var(--color-gray5)',
  colorGray6: 'var(--color-gray6)',
  colorGray7: 'var(--color-gray7)',
  colorGray8: 'var(--color-gray8)',
  colorGray9: 'var(--color-gray9)',
  colorBlack: 'var(--color-black)',
  bodyBackground: 'var(--body-background)',
  bodyFontColor: 'var(--body-font-color)',
  bottomNavigationBarHeight: 'var(--bottom-navigation-bar-height)',
  headingFontFamily: 'var(--heading-font-family)',
  bodyFontFamily: 'var(--body-font-family)',
  globalMargin: 'var(--global-margin)',
  globalPadding: 'var(--global-padding)',
  globalFontSize: 'var(--global-font-size)',
  globalWidth: 'var(--global-width)',
  globalLineheight: 'var(--global-lineheight)',
  globalShadow: 'var(--global-shadow)',
  globalWeightNormal: 'var(--global-weight-normal)',
  globalWeightBold: 'var(--global-weight-bold',
  globalRadius: 'var(--global-radius)',
  bodyAntialiased: 'var(--body-antialiased)',
  colorAnchor: 'var(--color-white)',
  anchorTextDecoration: 'var(--anchor-text-decoration)',
  anchorTextDecorationHover: 'var(--anchor-text-decoration-hover)',
  defaultTimingFunction: 'var(--default-timing-function)',
  breakpointMedium: 'all and (min-width: #{$breakpoint-medium})',
  breakpointLarge: 'all and (min-width: #{$breakpoint-large})',
  breakpointXlarge: 'all and (min-width: #{$breakpoint-xlarge})',
  breakpointXxlarge: 'all and (min-width: #{$breakpoint-xxlarge})',
};

// Layout Component
const Layout = ({ children, data }) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const isInWebAppiOS = window.navigator.standalone == true;
    const isInWebAppChrome = window.matchMedia('(display-mode: standalone)').matches;
    const body = document.body || document.documentElement;

    if (isInWebAppiOS || isInWebAppChrome) {
      body.setAttribute('data-fullscreen', 'true');
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <Fragment>
              <Helmet
                htmlAttributes={{
                  lang: 'en',
                  prefix: 'http://ogp.me/ns#',
                  'i18n-values': 'dir:textdirection',
                  itemscope: undefined,
                  itemtype: 'http://schema.org/WebPage',
                  dir: 'ltr',
                }}
                title="Paperboy - Welcome"
                meta={[
                  { charset: 'utf-8' },
                  { name: 'description', content: 'Paperboy' },
                  {
                    name: 'viewport',
                    content:
                      'width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover',
                  },
                  { name: 'HandheldFriendly', content: 'true' },
                  { name: 'MobileOptimized', content: '375' },
                  { name: 'mobile-web-app-capable', content: 'yes' },
                  { name: 'msapplication-TileColor', content: '#e81b1f' },
                  { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                ]}
                link={[
                  {
                    rel: 'apple-touch-icon',
                    type: 'image/png',
                    sizes: '180x180',
                    href: `${appleTouchIcon}`,
                  },
                  {
                    rel: 'shortcut icon',
                    type: 'image/png',
                    href: `${favicon}`,
                  },
                  {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: `${favicon16}`,
                  },
                  {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: `${favicon32}`,
                  },
                  {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '194x194',
                    href: `${favicon194}`,
                  },
                  {
                    rel: 'mask-icon',
                    href: `${maskIcon}`,
                    color: '#e81b1f',
                  },
                ]}
              />

              <TopNavigation key="page-header" />
              <MainNavigation key="main-navigation" />
              <main
                aria-label="Main Page Content Wrapper. Press Tab to navigate"
                key="page-content"
              >
                {children}
              </main>
              <BottomNavigation key="bottom-navigation" />
            </Fragment>
          </ThemeProvider>
        </React.Fragment>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
