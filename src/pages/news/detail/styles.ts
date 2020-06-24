import styled, { keyframes } from "styled-components";
import { rem } from "polished";
import { above } from "helpers/index.helpers";
import { theme } from "helpers/theme.helper";

export const OpeningAnimation = keyframes`
  from {
    clip-path: circle(0% at center center);
  }

  to {
    clip-path: circle(120% at center 5%);
  }
`;

export const Article = styled.article`
	clip-path: circle(0% at center center);

	animation-name: ${OpeningAnimation};
	animation-fill-mode: forwards;
	animation-duration: 500ms;
	animation-timing-function: var(--default-timing-function);

	position: relative;
	margin-bottom: calc(var(--global-margin) * 3);

	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0;
	height: 100%;

	${above.medium`
		grid-template-columns: repeat(2, 1fr);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(var(--viewport-height) - 3rem);
	`};
`;

export const Hero = styled.div`
	width: 100%;
	height: calc(var(--viewport-height) * 0.6);
	overflow: hidden;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: 1;

	img,
	svg.image__placeholder {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: 100%;

		z-index: -1;
	}

	&:after {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0.9) 100%);
		height: 100%;
		width: 100%;
		overflow: hidden;
		content: "";
	}

	${above.medium`
		height: 100%;

		.hero__title {
			display: none;
		}

		&:after {
			background-image: none;
		}
	`};
`;

export const HeroCopy = styled.div`
	--number-of-lines: 3;
	--max-height-ratio: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;
	padding: 0 ${rem("32px")} ${rem("16px")} ${rem("16px")};

	@media all and (max-width: 39.3975rem) {
		#article-content && {
			display: none;
		}
	}

	.title {
		width: 100%;
		font-family: var(--body-font-family);
		font-weight: normal;
		font-size: calc((((22 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
		color: var(--color-white);
		letter-spacing: 0;
		text-align: left;
		line-height: 1.333;
		margin-bottom: var(--global-margin);

		overflow: hidden;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		display: flex;
		/* autoprefixer: off */
		display: -webkit-box;
		-webkit-line-clamp: var(--number-of-lines);
		-webkit-box-orient: vertical;
		max-height: calc(
			(var(--number-of-lines) * var(--global-lineheight) * var(--base-font-ratio, 1) + 0.5) * var(--max-height-ratio)
		);

		${above.medium`
			--max-height-ratio: 2rem;
		`};
	}

	.metadata {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.8;

		&__source,
		&__time {
			color: var(--color-white);
			font-size: calc((((11 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
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

	${above.medium`
		padding: 0 1rem 1rem 0;

		.title,
		.metadata__source,
		.metadata__time {
			color: var(--color-gray9);
		}

		.title {
			font-size: calc((((28 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
		}
	`};

	${above.large`
		padding-top: 2rem;
	`};
`;

export const ArticleContent = styled.div`
	--padding-factor: 1.5;
	padding: calc(var(--global-padding) * var(--padding-factor)) var(--global-padding);
	z-index: 2;

	.lead {
		color: var(--content-lead-color);
		font-family: var(--body-font-family);
		font-weight: 300;
		font-size: calc((((16 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
		letter-spacing: ${rem("0.22px")};
		line-height: ${rem("32px")};
		margin-bottom: ${rem("24px")};
	}

	p {
		font-family: var(--content-font-family);
		color: var(--content-paragraph-color);
		font-size: calc((((16 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
		letter-spacing: ${rem("0.4px")};
		line-height: ${rem("28px")};
	}

	${above.medium`
		--padding-factor: 2;
		padding: calc(var(--global-padding) * var(--padding-factor));
	`};

	${above.large`
		--padding-factor: 2.5;
	`};
`;

export const ArticleLink = styled.a`
	--link-color: var(--color-primary);
	--link-source-color: var(--color-gray7);
	--link-background-color: var(--body-background);
	--link-border-color: var(--color-gray5);
	--button-size: ${rem("56px")};

	width: 100%;
	height: var(--button-size);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	color: var(--link-color);
	border: 1px solid var(--link-border-color);
	background-color: var(--link-background-color);
	border-radius: var(--button-size);

	.article-link {
		&__title {
			font-size: calc((((16 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
			font-family: var(--heading-font-family);
		}

		&__source {
			font-size: calc((((10 * var(--base-font-ratio, 1)) * 100) / var(--viewport-height-unitless)) * 1vh);
			text-transform: uppercase;
			letter-spacing: 1px;
			color: var(--link-source-color);
		}
	}

	&:hover,
	&:focus {
		background-color: var(--color-primary);
		border: 1px solid var(--color-primary);

		.article-link__title,
		.article-link__source {
			color: var(--color-white);
		}
	}

	${theme.dark`
		--link-color: var(--color-white);
		--link-source-color: var(--color-gray2);
		--link-background-color: var(--color-gray8);
		--link-border-color: var(--color-gray8);
	`};
`;

export const BottomOptionsBar = styled.nav`
	--bar-background-color: var(--color-gray0);
	--bar-border-top-color: var(--color-gray3);

	width: 100%;
	height: ${rem("48px")};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: var(--bar-background-color);
	border-top: 1px solid var(--bar-border-top-color);

	position: fixed;
	z-index: 10;
	bottom: 0;
	left: 0;

	.bottom-options-bar {
		&__button {
			width: calc(100% / 3);
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			-webkit-appearance: none;
			background-color: transparent;
			border: none;

			&:nth-child(1) {
				justify-content: flex-start;
			}

			&:nth-child(3) {
				justify-content: flex-end;
			}
		}
	}

	${theme.dark`
		--bar-background-color: var(--color-black);
		--bar-border-top-color: var(--color-gray9);
	`};
`;

export default Article;
