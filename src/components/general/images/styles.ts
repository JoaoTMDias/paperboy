/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled, { keyframes, css } from "styled-components";
import { IImageLazyProps } from "data/interfaces";

// Styling
export const FadeInImage = keyframes`
	from {
		opacity: 0.1;
	}

	to {
		opacity: 1;
	}
`;

export const ZoomImage = keyframes`
	0% {
		opacity: 0;
		transform: scale(1);
	}

	6.6% {
		opacity: 1;

	}

	100% {
		opacity: 1;
		transform: scale(1.1);
	}
`;

export const Image = styled.img`
	background-color: ${(props: IImageLazyProps) =>
		props.placeholderColor ? `${props.placeholderColor}` : "transparent"};

	${(props: IImageLazyProps) => {
		const { animation, speed } = props;

		if (animation) {
			const duration = speed ? `${speed}ms` : "128ms";
			switch (animation) {
				case "zoom":
					return css`
						opacity: 0;
						transform: scale(1);

						animation-fill-mode: forwards;
						animation-name: ${ZoomImage};
						animation-duration: 15000ms;
					`;

				default:
				case "fade":
					return css`
						opacity: 0;
						animation-fill-mode: forwards;
						animation-name: ${FadeInImage};
						animation-duration: ${`${duration}`};
					`;
			}
		}

		return null;
	}};

	object-fit: ${(props: IImageLazyProps) => {
		if (props.fit) {
			return `${props.fit}`;
		}

		return "cover";
	}};

	object-position: ${(props: IImageLazyProps) => `${props.positionTop} ${props.positionLeft}`};
`;

export const Picture = styled.picture`
	width: 100%;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Placeholder = styled.svg`
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
`;
