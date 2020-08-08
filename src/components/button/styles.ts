/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { Link } from "gatsby";
import { darken, rem } from "polished";
import styled, { css } from "styled-components";
import { IUIAnchorProps, IUIButtonProps } from "./types";

// Styling
// Styling
export const Button = styled.button`
	width: 100%;
	max-width: 40rem;
	height: var(--bottom-navigation-bar-height, ${rem("56px")});
	color: var(--color-white);
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: var(--button-radius);
	border: none;
	-webkit-appearance: none;
	transform: scale(1);
	transition: all 200ms var(--default-timing-function);

	&:focus,
	&:hover,
	&:active {
		background-color: ${darken(0.1, "#e74c3c")};
		color: currentColor;
	}

	&:active {
		transform: scale(0.98);
	}

	${({ flavour }: IUIButtonProps) => {
		if (flavour === "primary") {
			return css`
				background-color: var(--color-primary);
			`;
		}

		return css`
			background-color: transparent;
			color: var(--color-gray8);
		`;
	}};

	${({ disabled }: IUIButtonProps) =>
		disabled &&
		css`
			background-color: var(--color-gray3);
			color: var(--color-gray8);
			cursor: no-drop;
			user-select: none;
			pointer-events: none;
			box-shadow: none !important;
			border: none;

			&:focus,
			&:hover,
			&:active {
				background-color: var(--color-gray5);
				color: var(--color-gray8);
				outline: none;
			}
		`};
`;

export const Anchor = styled(Link)`
	width: 100%;
	max-width: 40rem;
	height: var(--bottom-navigation-bar-height, ${rem("56px")});
	background-color: var(--color-primary);
	color: var(--color-white);
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: var(--button-radius);
	border: none;
	transform: scale(1);
	transition: all 200ms var(--default-timing-function);
	pointer-events: all;

	&:focus,
	&:hover,
	&:active {
		background-color: ${darken(0.1, "#e74c3c")};
		color: currentColor;
	}

	&:active {
		transform: scale(0.98);
	}

	${(props: IUIAnchorProps) =>
		props.disabled &&
		css`
			background-color: var(--color-gray3);
			color: var(--color-gray8);
			cursor: no-drop;
			user-select: none;
			pointer-events: none;
			box-shadow: none !important;
			border: none;

			&:focus,
			&:hover,
			&:active {
				background-color: var(--color-gray5);
				color: var(--color-gray8);
				outline: none;
			}
		`};
`;
