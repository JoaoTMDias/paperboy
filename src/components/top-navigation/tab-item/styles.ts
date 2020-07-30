import { Link } from "gatsby";
import { rem } from "polished";
import styled, { css } from "styled-components";
import { ITabItemProps } from "./types";
import fluidFontSize from 'helpers/fluid-typography';

// Styling
export const Wrapper = styled.li`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: ${rem("4px")} 0;
	flex: 1;

	${(props: ITabItemProps) =>
		props.layout === "vertical" &&
		css`
			padding: 0;
		`};

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	&:hover,
	&:focus,
	&:active {
		outline-color: var(--color-gray8);
	}
`;

export const TabLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100%;

	&:hover,
	&:focus,
	&:active {
		outline-color: var(--color-black);
	}

	${(props: ITabItemProps) =>
		props.layout === "vertical" &&
		css`
			flex-direction: row;
			width: 100%;
			padding: ${rem("8px")} var(--global-margin);

			&.is-active {
				background-color: var(--bottom-navigation-background-color);
			}

			.label {
				margin-left: calc(var(--global-margin) * 0.5);
				transition: opacity 125ms ease-out;
			}
		`};

	.tab__icon {
		transform: translateY(0.375rem);
		transition: transform 125ms ease-out;
	}

	&.is-active {
		.tab__icon {
			transform: translateY(0);

			&--default,
			&--negative {
				fill: var(--bottom-navigation-text-color);
			}

			&--positive {
				fill: var(--bottom-navigation-background-color);
			}
		}

		.label {
			opacity: 1;
		}
	}
`;

export const Icon = styled.figure`
	width: ${rem("26px")};
	height: ${rem("26px")};
	padding: ${rem("2px")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: ${rem("4px")} 0;
`;

export const Label = styled.span`
	color: var(--bottom-navigation-text-color);
	${fluidFontSize(9, "1vw", 10)};
	text-align: center;
	opacity: 0;
	letter-spacing: ${rem("0.5px")};
`;
