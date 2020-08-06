/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import { rem } from "polished";
import * as React from "react";
import styled, { keyframes } from "styled-components";
import { above } from "helpers/media-queries.helpers";

// Component Props
interface IIconBrandingLargeProps {
	visible: boolean;
}

/**
 * @description Branding Icon: Large Logo

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconBrandingLarge: React.FunctionComponent<IIconBrandingLargeProps> = (props) => {
	const { visible } = props;
	return (
		<Wrapper visible={visible}>
			<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 298" aria-hidden="true" tabIndex={-1}>
				<path
					fill="var(--color-primary, #e74c3c)"
					fillRule="evenodd"
					d="M230.3 0a39.18 39.18 0 0 0-28.74 11.81 39.09 39.09 0 0 0-11.83 28.69v81A40.34 40.34 0 0 0 230.3 162h47.32a20.2 20.2 0 0 1 20.29 20.26V189a54 54 0 0 1-54.08 54H230.3a13.68 13.68 0 0 0-13.52 13.5v27A13.7 13.7 0 0 0 230.3 297h13.53a105.42 105.42 0 0 0 41.93-8.54 107.09 107.09 0 0 0 57.68-57.59A105.08 105.08 0 0 0 352 189V40.49a39 39 0 0 0-11.84-28.68A39.16 39.16 0 0 0 311.43 0zM40.57 0a39.21 39.21 0 0 0-28.75 11.81A39.08 39.08 0 0 0 0 40.5v81a39.05 39.05 0 0 0 11.82 28.68A39.2 39.2 0 0 0 40.57 162h47.32a20.18 20.18 0 0 1 20.28 20.26V189a52 52 0 0 1-15.84 38.17A52.15 52.15 0 0 1 54.09 243H40.57a13 13 0 0 0-9.51 4 13 13 0 0 0-4 9.5v27a12.93 12.93 0 0 0 4 9.49 13 13 0 0 0 9.51 4h13.52A105.46 105.46 0 0 0 96 288.44a108.81 108.81 0 0 0 34.54-23.1 109.19 109.19 0 0 0 23.14-34.49 105.25 105.25 0 0 0 8.59-41.85V40.49a39 39 0 0 0-11.84-28.68A39.18 39.18 0 0 0 121.7 0z"
				/>
			</Icon>
		</Wrapper>
	);
};

// Styling
const onEnter = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
  }

  to {
    transform: translate3d(0, -16%, 0);
  }
`;

const Wrapper = styled.figure`
	width: auto;
	max-height: ${rem("298px")};
	height: 30vh;
	position: relative;
	left: 0;
	top: 0;
	transform: translate3d(0, -100%, 0);
	animation-name: ${onEnter};
	animation-duration: 750ms;
	animation-timing-function: var(--default-timing-function, ease-out);
	animation-fill-mode: both;
	overflow: hidden;
	display: ${(props: IIconBrandingLargeProps) => (props.visible ? "flex" : "none")};
	margin: 0;

	${above.medium`
		display: flex;
	`};
`;

const Icon = styled.svg`
	width: auto;
	height: 100%;
`;

IconBrandingLarge.defaultProps = {
	visible: false,
};

export default IconBrandingLarge;
