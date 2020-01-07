import { Link } from "gatsby";
import { darken, rem } from "polished";
import styled, { css } from "styled-components";
import { IUIAnchorProps, IUIButtonProps } from "./types";

// Styling
export const Button = styled.button`
	width: 100%;
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
	-webkit-appearance: none;
	transform: scale(1);
	transition: all 200ms var(--default-timing-function);

	&:focus,
	&:hover,
	&:active {
		background-color: ${darken(0.1, "#e74c3c")};
		color: currentColor;
		outline: 1px dashed var(--color-gray2);
	}

	&:active {
		transform: scale(0.98);
	}

	${(props: IUIButtonProps) =>
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

export const Anchor = styled(Link)`
	width: 100%;
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
		outline: 1px dashed var(--color-gray2);
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
