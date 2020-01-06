import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "gatsby";
import { IArticleThumbnailProps, EThumbnailType } from "./thumbnails-large.component";

export const Anchor = styled(Link)`
	width: 100%;
	height: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: var(--color-gray1);
	padding: 0;
	position: relative;
	overflow: hidden;

	&:hover,
	&:focus {
		transform: scale(1);
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			default:
			case EThumbnailType.SAVED:
				return css`
					flex-direction: column;
					justify-content: flex-start;

					min-height: ${rem("230px")};
					background-color: var(--color-white);
					outline: 1px solid var(--color-gray1);
					padding: 0;
					position: relative;
					overflow: hidden;

					&:hover,
					&:focus {
						article {
							transform: scale(0.95);
						}
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					flex-direction: column;
					justify-content: flex-start;

					min-height: ${rem("230px")};
					background-color: var(--color-white);
					outline: 1px solid var(--color-gray1);
					padding: 0;
					position: relative;
					overflow: hidden;

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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	background-color: var(--color-gray1);
	padding: var(--global-padding) 2rem var(--global-padding) var(--global-padding);
	margin: 0;
	position: relative;
	overflow: hidden;

	.thumbnail-image {
		&__gradient {
			position: absolute;
			background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 65%);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			width: 100%;
			height: 100%;

			z-index: 1;
		}
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			case EThumbnailType.SAVED:
				return css`
					background-color: var(--color-white);
					padding: var(--global-padding) var(--global-padding) calc(var(--global-padding) * 0.5) var(--global-padding);
					transition: transform 128ms ease-out;

					.thumbnail__image {
						width: 100%;
						height: ${rem("96px")};
						margin-top: 0;
						margin-right: 0;
						margin-bottom: calc(var(--global-padding) * 0.5);
						margin-left: 0;
						border-radius: ${rem("2px")};
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					background-color: var(--color-white);
					padding: var(--global-padding) var(--global-padding) calc(var(--global-padding) * 0.5) var(--global-padding);
					transition: transform 128ms ease-out;

					.thumbnail__image {
						width: 100%;
						height: ${rem("96px")};
						margin-top: 0;
						margin-right: 0;
						margin-bottom: calc(var(--global-padding) * 0.5);
						margin-left: 0;
						border-radius: ${rem("2px")};
					}
				`;

			default:
				break;
		}
	}};
`;

export const Copy = styled.div`
	--number-of-lines: 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;

	.thumbnail {
		&__title {
			width: 100%;
			font-family: var(--body-font-family);
			font-weight: 300;
			font-size: ${rem("18px")};
			color: var(--color-white);
			letter-spacing: 0;
			text-align: left;
			line-height: 1.4444;
			margin-bottom: var(--global-margin);

			overflow: hidden;
			text-overflow: -o-ellipsis-lastline;
			text-overflow: ellipsis;
			display: flex;
			/* autoprefixer: off */
			display: -webkit-box;
			-webkit-line-clamp: var(--number-of-lines);
			-webkit-box-orient: vertical;
			max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1rem);
		}

		&__metadata {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			opacity: 0.8;

			&__source,
			&__time {
				color: var(--color-white);
				font-size: ${rem("11px")};
				letter-spacing: ${rem("0.25px")};
			}

			&__source {
				font-family: var(--heading-font-family);
				letter-spacing: 0;
				margin-bottom: 0;
				text-transform: uppercase;
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
							color: var(--color-black);
							line-height: 1.22222222;
							margin-bottom: calc(var(--global-margin) * 1.5);

							max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1rem);
						}

						&__metadata {
							flex-direction: column;
							justify-content: flex-start;
							align-items: flex-start;
							opacity: 1;

							&__source,
							&__time {
								color: var(--color-gray8);
								font-size: ${rem("10px")};
								letter-spacing: ${rem("0.25px")};
							}

							&__source {
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
							font-size: ${rem("13px")};
							color: var(--color-black);
							line-height: 1.22222222;
							margin-bottom: calc(var(--global-margin) * 1.5);

							max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1rem);
						}

						&__metadata {
							flex-direction: column;
							justify-content: flex-start;
							align-items: flex-start;
							opacity: 1;

							&__source,
							&__time {
								color: var(--color-gray8);
								font-size: ${rem("10px")};
								letter-spacing: ${rem("0.25px")};
							}

							&__source {
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
