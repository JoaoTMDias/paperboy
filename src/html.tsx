/* eslint-disable react/no-danger */
// Libraries
import * as React from "react";
import { Helmet, HelmetData } from "react-helmet";

// Configurations
import config from "../gatsby-config";

// Component Props
interface IHTMLProps {
	headComponents: any;
	body: any;
	postBodyComponents: any;
}

const isProduction: boolean = process.env.NODE_ENV === "production";

/**
 * @description HTML Starter File

 * @date  01/December/2018 at 16:19
 * @extends {React.FunctionComponent}
 */
const HTML: React.FunctionComponent<IHTMLProps> = (props) => {
	const helmet: HelmetData | undefined = Helmet.rewind();
	const openGraphUrl: string = isProduction ? `${config.siteMetadata.url}/share.png` : "/share.png";
	const { headComponents, body, postBodyComponents } = props;

	return (
		<html
			lang="en"
			prefix="http://ogp.me/ns#"
			i18n-values="dir:textdirection"
			itemType="http://schema.org/WebPage"
			dir="ltr"
		>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />

				{/* Meta */}
				<link rel="manifest" href="/manifest.json" />
				<meta name="description" content="João Dias" />
				<meta
					name="viewport"
					content="width=device-width,minimum-scale=1.0,initial-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover"
				/>
				<meta name="HandheldFriendly" content="true" />
				<meta name="MobileOptimized" content="375" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#E74D3C" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />

				{helmet.meta.toComponent()}
				{headComponents}

				<meta property="og:site_name" content={config.siteMetadata.title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={openGraphUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@joaotmdias" />
				<meta name="twitter:creator" content="@joaotmdias" />
				<meta property="twitter:image" content={openGraphUrl} />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<link
					rel="preload"
					href="/fonts/paperboy-headings-bold.woff2"
					type="font/woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/paperboy-headings-regular.woff2"
					type="font/woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/paperboy-content-regular.woff2"
					type="font/woff2"
					as="font"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
				<noscript id="no-javascript" className="no-javascript">
					<h1 className="no-javascript__title">I need you to activate Javascript in order to see my website.</h1>
				</noscript>
				<div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
				<div id="portal" />
				{postBodyComponents}
			</body>
		</html>
	);
};

export default HTML;
