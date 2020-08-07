/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled, { css } from "styled-components";
import { rgba, rem } from "polished";

import { Link } from "gatsby";
import { theme } from "helpers/theme.helper";
import { above } from "helpers/index.helpers";
import fluidFontSize from "helpers/fluid-typography";
import { IArticleThumbnailProps, EThumbnailType } from "./types.d";

export const Anchor = styled(Link)`
	--anchor-height-factor: 0.35;
	--thumbnail-outline-color: var(--color-gray1);
	--anchor-height: calc(var(--viewport-height) * var(--anchor-height-factor));
	--thumbnail-background-color: var(--color-white);

	${theme.dark`
		--thumbnail-outline-color: var(--color-gray9);
		--thumbnail-background-color: var(--color-gray9);
	`};

	align-items: center;
	background-color: var(--thumbnail-background-color);
	display: flex;
	flex-direction: row;
	height: var(--anchor-height, 35vh);
	justify-content: center;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 100%;

	&:hover,
	&:focus {
		transform: scale(0.99);
		box-shadow: 0 0 0 0.125rem var(--color-primary);
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			case EThumbnailType.LARGE:
				return css`
					min-height: ${rem("200px")};

					${above.small`
						--anchor-height-factor: 0.4;
						min-height: ${rem("260px")};
					`};
				`;

			default:
			case EThumbnailType.SAVED:
				return css`
					flex-direction: column;
					justify-content: flex-start;
					max-height: ${rem("128px")};
					min-height: ${rem("128px")};
					overflow: hidden;
					padding: 0;
					position: relative;

					&:hover,
					&:focus {
						article {
							transform: scale(0.95);
						}
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					--anchor-height-factor: 0.4;
					flex-direction: column;
					justify-content: flex-start;
					min-height: ${rem("230px")};
					outline: 1px solid var(--thumbnail-outline-color);
					overflow: hidden;
					padding: 0;
					position: relative;

					&:hover,
					&:focus {
						article {
							transform: scale(0.95);
						}
					}
				`;
		}
	}};
`;

export const Article = styled.article`
	--thumbnail-image-height: ${rem("96px")};
	--thumbnail-image-margin: calc(var(--global-padding) * 0.5);
	--thumbnail-copy-height: calc(100% - calc(var(--thumbnail-image-height) + var(--thumbnail-image-margin)));
	--thumbnail-background: var(--color-white);

	${theme.dark`
		--thumbnail-background: var(--color-black);
	`};

	align-items: flex-start;
	background-color: var(--color-gray1);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin: 0;
	overflow: hidden;
	padding: var(--global-padding) 2rem var(--global-padding) var(--global-padding);
	position: relative;
	width: 100%;
	height: 100%;

	.thumbnail-image {
		&__gradient {
			background-image: ${`linear-gradient(${rgba("#0b0909", 0)} 0%,${rgba("#0b0909", 1)} 66%)`};
			bottom: 0;
			height: 100%;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
			width: 100%;
			z-index: 1;
		}
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			case EThumbnailType.SAVED:
				return css`
					background-color: var(--thumbnail-background);
					display: grid;
					grid-column-gap: var(--global-margin);
					grid-template-columns: ${`clamp(${rem("96px")},32vw, ${rem("128px")}) 1fr`};
					height: auto;
					padding: var(--global-padding) 0 calc(var(--global-padding) * 0.5) 0;
					transition: transform 128ms ease-out;

					.thumbnail__image {
						border-radius: ${rem("2px")};
						height: var(--thumbnail-image-height);
						margin-top: 0;
						margin-right: 0;
						margin-bottom: calc(var(--global-padding) * 0.5);
						margin-left: 0;
						width: 100%;
						z-index: 0;
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					justify-content: flex-start;
					background-color: var(--thumbnail-background);
					padding: var(--global-padding) var(--global-padding) calc(var(--global-padding) * 0.5) var(--global-padding);
					transition: transform 128ms ease-out;

					.thumbnail {
						&__image {
							border-radius: ${rem("2px")};
							height: var(--thumbnail-image-height);
							margin-bottom: var(--thumbnail-image-margin);
							margin-left: 0;
							margin-right: 0;
							margin-top: 0;
							width: 100%;

							${above.large`
								height: 50%;
							`};
						}

						&__copy {
							height: var(--thumbnail-copy-height);
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: flex-start;
						}
					}
				`;

			default:
				break;
		}
	}};
`;

export const Copy = styled.div`
	--thumbnail-title-color: var(--color-black);
	--thumbnail-subtitle: var(--color-gray8);
	--number-of-lines: 3;

	${theme.dark`
		--thumbnail-title-color: var(--color-gray0);
		--thumbnail-subtitle: var(--color-gray2);
	`}

	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 2;
	background-color: var(--color-black);

	.thumbnail {
		&__title {
			-webkit-box-orient: vertical;
			-webkit-line-clamp: var(--number-of-lines);
			color: var(--color-white);
			display: -webkit-box;
			display: flex;
			font-family: var(--body-font-family);
			${fluidFontSize(18, "3vw", 20)};
			font-weight: 300;
			letter-spacing: 0;
			line-height: 1.4444;
			margin-bottom: var(--global-margin);
			max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1.5rem);
			overflow: hidden;
			text-align: left;
			text-overflow: -o-ellipsis-lastline;
			text-overflow: ellipsis;
			width: 100%;
		}

		&__metadata {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			opacity: 0.8;

			&__name,
			&__time {
				color: var(--color-white);
				${fluidFontSize(11, "1.5vw", 13)};
				letter-spacing: ${rem("0.25px")};
			}

			&__name {
				font-family: var(--heading-font-family);
				letter-spacing: 0;
				margin-bottom: 0;
				text-transform: uppercase;
			}

			&__source {
				width: auto;
				text-transform: uppercase;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
			}

			&__logo {
				--logo-size: var(--global-margin);
				width: var(--logo-size);
				height: var(--logo-size);
				border-radius: var(--logo-size);
				margin-top: 0;
				margin-right: calc(var(--logo-size) * 0.5);
				margin-bottom: 0;
				margin-left: 0;
			}

			&__time {
				font-family: var(--body-font-family);
				text-transform: capitalize;
			}
		}
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			case EThumbnailType.SAVED:
				return css`
					.thumbnail {
						&__title {
							font-size: ${rem("13px")};
							color: var(--thumbnail-title-color);
							line-height: 1.22222222;
							margin-bottom: calc(var(--global-margin) * 1.5);
						}

						&__metadata {
							flex-direction: column;
							justify-content: flex-start;
							align-items: flex-start;
							opacity: 1;

							&__name,
							&__time {
								color: var(--thumbnail-subtitle);
								font-size: ${rem("10px")};
								letter-spacing: ${rem("0.25px")};
							}

							&__name {
								width: 100%;
								text-transform: uppercase;
							}

							&__time {
								font-family: var(--body-font-family);
								text-transform: capitalize;
							}
						}
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					.thumbnail {
						&__title {
							${fluidFontSize(13, "1.5vw", 15)};
							color: var(--thumbnail-title-color);
							line-height: 1.22222222;
							margin-bottom: calc(var(--global-margin) * 1.5);
						}

						&__metadata {
							flex-direction: column;
							justify-content: flex-start;
							align-items: flex-start;
							opacity: 1;

							&__name,
							&__time {
								color: var(--thumbnail-subtitle);
								${fluidFontSize(10, "1.5vw", 12)};
								letter-spacing: ${rem("0.25px")};
							}

							&__name {
								width: 100%;
								text-transform: uppercase;
							}

							&__time {
								font-family: var(--body-font-family);
								text-transform: capitalize;
							}
						}
					}
				`;

			default:
				break;
		}
	}};
`;

export default Anchor;
