import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "gatsby";
import { IArticleThumbnailProps, EThumbnailType } from "./thumbnails-large.component";

export const Anchor = styled(Link)`
	align-items: center;
	background-color: var(--color-gray1);
	display: flex;
	flex-direction: row;
	height: 40vh;
	justify-content: center;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 100%;

	&:hover,
	&:focus {
		transform: scale(1);
	}

	${(props: IArticleThumbnailProps) => {
		switch (props.type) {
			case EThumbnailType.LARGE:
				return css`
					min-height: ${rem("260px")};
				`;

			default:
			case EThumbnailType.SAVED:
				return css`
					background-color: var(--color-white);
					flex-direction: column;
					justify-content: flex-start;
					max-height: ${rem("128px")};
					min-height: ${rem("128px")};
					outline: 1px solid var(--color-gray1);
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
					background-color: var(--color-white);
					flex-direction: column;
					justify-content: flex-start;
					min-height: ${rem("230px")};
					outline: 1px solid var(--color-gray1);
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
	align-items: flex-start;
	background-color: var(--color-gray1);
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-end;
	margin: 0;
	overflow: hidden;
	padding: var(--global-padding) 2rem var(--global-padding) var(--global-padding);
	position: relative;
	width: 100%;

	.thumbnail-image {
		&__gradient {
			background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 65%);
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
					background-color: var(--color-white);
					display: grid;
					grid-column-gap: ${rem("8px")};
					grid-template-columns: ${rem("128px")} auto;
					height: auto;
					padding: var(--global-padding) var(--global-padding) calc(var(--global-padding) * 0.5) var(--global-padding);
					transition: transform 128ms ease-out;

					.thumbnail__image {
						border-radius: ${rem("2px")};
						height: ${rem("96px")};
						margin-bottom: calc(var(--global-padding) * 0.5);
						margin-left: 0;
						margin-right: 0;
						margin-top: 0;
						width: 100%;
					}
				`;

			case EThumbnailType.SMALL:
				return css`
					background-color: var(--color-white);
					padding: var(--global-padding) var(--global-padding) calc(var(--global-padding) * 0.5) var(--global-padding);
					transition: transform 128ms ease-out;

					.thumbnail__image {
						border-radius: ${rem("2px")};
						height: ${rem("96px")};
						margin-bottom: calc(var(--global-padding) * 0.5);
						margin-left: 0;
						margin-right: 0;
						margin-top: 0;
						width: 100%;
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
			-webkit-box-orient: vertical;
			-webkit-line-clamp: var(--number-of-lines);
			color: var(--color-white);
			display: -webkit-box;
			display: flex;
			font-family: var(--body-font-family);
			font-size: ${rem("18px")};
			font-weight: 300;
			letter-spacing: 0;
			line-height: 1.4444;
			margin-bottom: var(--global-margin);
			max-height: calc(var(--number-of-lines) * var(--global-lineheight) * 1rem);
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
