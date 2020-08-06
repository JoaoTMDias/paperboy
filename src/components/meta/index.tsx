/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import * as React from "react";
import { Helmet } from "react-helmet";
import { IBasePageProps } from "data/interfaces";
import { siteMetadata as config } from "../../../gatsby-config";

interface IMetaProps extends IBasePageProps {
	title: string;
	description?: string;
	noIndex?: any;
}

/**
 * @description Meta Configurations
 * @author  João Dias
 * @date  01/December/2018 at 16:57
 * @extends {React.FC}
 */
export const Meta: React.FunctionComponent<IMetaProps> = ({ title, description, location, noIndex }) => {
	const metaTitle = title || `${config.title}`;
	const metaDescription = description || config.description;
	const absoluteUrl = location ? `${config.url}${location.pathname}` : `${config.url}`;

	const meta = [
		{ name: "description", content: metaDescription },
		{ name: "og:title", content: metaTitle },
		{ name: "og:description", content: metaDescription },
		{ property: "og:url", content: absoluteUrl },
		{ name: "twitter:title", content: metaTitle },
		{ name: "twitter:description", content: metaDescription },
		{ property: "twitter:url", content: absoluteUrl },
	];

	if (noIndex) {
		meta.push({ name: "robots", content: "noindex" });
	}

	return <Helmet title={metaTitle} meta={meta} />;
};

export default Meta;
