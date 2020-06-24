import styled from "styled-components";
import { rem } from "polished";
import { theme } from "helpers/theme.helper";

export const PanelWrapper = styled.aside`
	--panel-wrapper-border-color: var(--color-gray1);
	--panel-wrapper-thumb-color: var(--color-white);

	width: 100%;
	height: ${rem("88px")};
	position: fixed;
	bottom: ${rem("48px")};
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
			font-size: calc((((14 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
			color: var(--color-gray7);
			letter-spacing: 0;
			line-height: ${rem("32px")};
			margin: 0;
			padding: 0;
		}

		&__content {
			width: 100%;
			height: ${rem("56px")};

			display: grid;
			grid-gap: 0;
			grid-template-columns: ${rem("56px")} 1fr ${rem("56px")};
		}

		&__label {
			width: 100%;
			height: ${rem("56px")};

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			margin: 0;
			padding: 0;
		}

		input[type="range"],
		&__input {
			-webkit-appearance: none;
			width: 100%;
			margin: ${rem("13px")} 0;
			&:focus {
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
