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
import classnames from "classnames";
import { IContentSpinnerProps } from "./types";

import { ContentSpinnerWrapper } from "./styles";

export const defaultProps = {
	center: true,
	color: "hsl(0, 0%, 60%)",
	duration: 3000,
	size: 24,
	temporary: false,
};

/**
 * @description UX: Loading spinner used for content placeholder
 * @author  João Dias
 * @date  14/December/2018 at 10:37
 * @extends {React.FC}
 */
export const ContentSpinner: React.FunctionComponent<IContentSpinnerProps> = (props) => {
	const { center, color, delay, duration, fullPage, size, style, temporary } = props;

	const className = classnames("content-spinner", {
		isCenter: center,
		isTemporary: temporary,
		fullPage,
	});

	return (
		<ContentSpinnerWrapper
			className={className}
			data-testid="component-content-spinner"
			tabIndex={-1}
			center={center}
			temporary={temporary}
			fullPage={fullPage}
			color={color}
			delay={delay}
			size={size}
			duration={duration}
			style={style}
		>
			<svg
				data-testid="component-content-svg"
				className="spinner__container"
				viewBox="0 0 50 50"
				width={`${size}`}
				height={`${size}`}
			>
				<circle className="spinner__icon" cx="25" cy="25" r="20" fill="none" strokeWidth="5" color={color} />
			</svg>
		</ContentSpinnerWrapper>
	);
};

ContentSpinner.defaultProps = defaultProps;

export default ContentSpinner;
