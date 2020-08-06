/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled from "styled-components";
import { rem } from "polished";
import { theme } from "helpers/theme.helper";
import fluidFontSize from "helpers/fluid-typography";

export const PanelWrapper = styled.div`
	--panel-wrapper-border-color: var(--color-gray1);
	--panel-wrapper-thumb-color: var(--color-white);
	--slider-height: ${rem("56px")};
	--slider-bar-height: ${rem("32px")};

	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: var(--body-background);
	z-index: 3;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	box-shadow: 0 -25px 100px 50px rgba(0, 0, 0, 0.1);

	.article-typeset {
		&__header {
			width: 100%;
			height: ${rem("32px")};
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid var(--panel-wrapper-border-color);
		}

		&__title {
			width: 100%;
			height: 100%;
			text-align: center;

			font-family: var(--body-font-family);
			${fluidFontSize(14, "2vw", 16)};
			color: var(--color-gray7);
			letter-spacing: 0;
			line-height: ${rem("32px")};
			margin: 0;
			padding: 0;
		}

		&__content {
			width: 100%;
			min-height: var(--slider-height);

			display: grid;
			grid-gap: 0;
			grid-template-columns: var(--slider-height) 1fr var(--slider-height);
		}

		&__label {
			width: 100%;
			height: var(--slider-height);

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			margin: 0;
			padding: 0;

			&::focus-within {
				outline-color: var(--color-primary);
			}
		}

		&__content,
		&__footer {
			padding-bottom: var(--global-padding);
		}

		&__footer {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: var(--slider-height);
		}

		input[type="range"],
		&__input {
			-webkit-appearance: none;
			width: 100%;
			margin: ${rem("13px")} 0;

			&:hover &:focus {
				outline: none;
			}
			&::-webkit-slider-runnable-track {
				width: 100%;
				height: ${rem("2px")};
				cursor: pointer;
				box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(13, 13, 13, 0.49);
				background: var(--color-primary);
				border-radius: 2px;
				border: 0px solid rgba(1, 1, 1, 0);
			}
			&::-webkit-slider-thumb {
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15), 0px 0px 3px rgba(13, 13, 13, 0.15);
				border: 0px solid var(--panel-wrapper-thumb-color);
				height: ${rem("28px")};
				width: ${rem("28px")};
				border-radius: ${rem("28px")};
				background: var(--panel-wrapper-thumb-color);
				cursor: pointer;
				-webkit-appearance: none;
				margin-top: ${rem("-13px")};
			}
			&:focus::-webkit-slider-runnable-track {
				background: var(--color-primary);
			}
			&::-moz-range-track {
				width: 100%;
				height: ${rem("2px")};
				cursor: pointer;
				box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(13, 13, 13, 0.49);
				background: var(--color-primary);
				border-radius: ${rem("2px")};
				border: 0px solid rgba(1, 1, 1, 0);
			}
			&::-moz-range-thumb {
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15), 0px 0px 3px rgba(13, 13, 13, 0.15);
				border: 0px solid var(--panel-wrapper-thumb-color);
				height: ${rem("28px")};
				width: ${rem("28px")};
				border-radius: ${rem("28px")};
				background: var(--panel-wrapper-thumb-color);
				cursor: pointer;
			}
			&::-ms-track {
				width: 100%;
				height: 2px;
				cursor: pointer;
				background: transparent;
				border-color: transparent;
				color: transparent;
			}
			&::-ms-fill-lower {
				background: var(--color-primary);
				border: 0px solid rgba(1, 1, 1, 0);
				border-radius: 4px;
				box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(13, 13, 13, 0.49);
			}
			&::-ms-fill-upper {
				background: var(--color-primary);
				border: 0px solid rgba(1, 1, 1, 0);
				border-radius: 4px;
				box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(13, 13, 13, 0.49);
			}
			&::-ms-thumb {
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15), 0px 0px 3px rgba(13, 13, 13, 0.15);
				border: 0px solid var(--panel-wrapper-thumb-color);
				height: ${rem("28px")};
				width: ${rem("28px")};
				border-radius: ${rem("28px")};
				background: var(--panel-wrapper-thumb-color);
				cursor: pointer;
				height: 2px;
			}
			&:focus {
				&::-ms-fill-lower {
					background: var(--color-primary);
				}
				&::-ms-fill-upper {
					background: var(--color-primary);
				}
			}
		}
	}

	${theme.dark`
		--panel-wrapper-border-color: var(--color-gray9);
		--panel-wrapper-thumb-color: var(--color-gray3);
	`};
`;

export default PanelWrapper;
