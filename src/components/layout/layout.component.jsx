// Libraries
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { isIOS } from 'react-device-detect';

// Components
import {
	Audit,
	ViewportHeight,
	AddToHomeScreen,
	Modal,
	ChangeAppTheme,
} from '../index';
import TopNavigation from '../navigation/header/top-navigation.component';
import MainNavigation from '../navigation/main/main-navigation.component';
import BottomNavigation from '../navigation/bottom-navigation/bottom-navigation.component';
import { above } from '../../helpers/index.helpers';

// Styling
import './layout.scss';

// Favicons
import favicon from '../../../static/favicon.ico';
import favicon16 from '../../../static/favicon-16x16.png';
import favicon32 from '../../../static/favicon-32x32.png';
import favicon194 from '../../../static/favicon-194x194.png';
import maskIcon from '../../../static/safari-pinned-tab.svg';
import appleTouchIcon from '../../../static/ios/ios-appicon-180-180.png';

// Launch Splash Screens
import appleiPhone5 from '../../../static/ios/ios-launchimage-640-1136.png';
import appleiPhone6 from '../../../static/ios/ios-launchimage-750-1334.png';
import appleiPhonePlus from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleiPhoneX from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleiPhoneXR from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleiPhoneXSMax from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleiPad from '../../../static/ios/ios-launchimage-1536-2048.png';
import appleIpadPro1 from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleIpadPro3 from '../../../static/ios/ios-launchimage-1242-2208.png';
import appleIpadPro2 from '../../../static/ios/ios-launchimage-1242-2208.png';

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
const Layout = props => {
	const { children, authenticated, header, bottomNavigation } = props;

	const renderNavigationElements = () => {
		const isDesktop = window.matchMedia('(min-width: 64rem)').matches
			? true
			: false;

		if (authenticated) {
			return (
				<React.Fragment>
					{header && <TopNavigation key="page-header" />}
					{isDesktop && <MainNavigation key="main-navigation" />}
					{children}
					{!isDesktop && bottomNavigation && (
						<BottomNavigation key="bottom-navigation" />
					)}
				</React.Fragment>
			);
		}
		return <React.Fragment>{children}</React.Fragment>;
	};

	const renderAddToHomescren = () => {
		if (isIOS) {
			return (
				<Modal delay={600000}>
					<AddToHomeScreen />
				</Modal>
			);
		}
	};

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
				<ThemeProvider theme={theme}>
					<Fragment>
						<Audit />
						<ViewportHeight />
						<ChangeAppTheme />
						<AppLayout id="app-layout">
							{renderAddToHomescren()}
							<Helmet
								htmlAttributes={{
									lang: 'en',
									prefix: 'http://ogp.me/ns#',
									'userLanguage-values': 'dir:textdirection',
									itemscope: undefined,
									itemtype: 'http://schema.org/WebPage',
									dir: 'ltr',
								}}
								title="Paperboy - Welcome"
								meta={[
									{ charset: 'utf-8' },
									{
										name: 'description',
										content: 'Paperboy',
									},
									{
										name: 'viewport',
										content:
											'width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover',
									},
									{
										name: 'HandheldFriendly',
										content: 'true',
									},
									{ name: 'MobileOptimized', content: '375' },
									{
										name: 'mobile-web-app-capable',
										content: 'yes',
									},
									{
										name: 'apple-mobile-web-app-capable',
										content: 'yes',
									},
									{
										name: 'msapplication-TileColor',
										content: '#E74D3C',
									},
									{
										name:
											'apple-mobile-web-app-status-bar-style',
										content: 'default',
									},
								]}
								link={[
									{
										rel: 'apple-touch-icon',
										type: 'image/png',
										sizes: '180x180',
										href: `${appleTouchIcon}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleiPhone5}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleiPhone6}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
										href: `${appleiPhonePlus}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
										href: `${appleiPhoneX}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleiPhoneXR}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
										href: `${appleiPhoneXSMax}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleiPad}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleIpadPro1}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleIpadPro2}`,
									},
									{
										rel: 'apple-touch-startup-image',
										media:
											'(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
										href: `${appleIpadPro3}`,
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
							{renderNavigationElements()}
						</AppLayout>
						<div id="portal" />
					</Fragment>
				</ThemeProvider>
			)}
		/>
	);
};

const AppLayout = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: var(--body-background);

	${above.large`
    display: grid;
    grid-template-columns: minmax(12.5rem, auto) 1fr;
  `};
`;

Layout.defaultProps = {
	authenticated: true,
	header: true,
	bottomNavigation: true,
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	authenticated: PropTypes.bool,
	header: PropTypes.bool,
	bottomNavigation: PropTypes.bool,
};

export default Layout;
