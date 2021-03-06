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
import styled from "styled-components";
import { IImageLazyProps } from "data/interfaces/index";

import LazyLoadingImage from "../general/images/image.lazyload.component";

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IThumbnailImageProps>}
 */
const ThumbnailImage: React.FunctionComponent<IImageLazyProps> = (props) => {
	const { ...thumbnailProps } = props;
	return (
		<Image className="thumbnail-image__container">
			<div className="thumbnail-image__gradient" />
			<LazyLoadingImage className="thumbnail-image__cover" {...thumbnailProps} />
		</Image>
	);
};

// Styling
const Image = styled.figure`
	background-color: var(--color-gray6);

	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	margin: 0;
	padding: 0;

	svg,
	img {
		width: 100%;
		height: 100%;
		position: relative;

		&:before {
			background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 75%);
		}
	}
`;

export default React.memo(ThumbnailImage);
