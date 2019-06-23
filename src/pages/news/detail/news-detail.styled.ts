import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

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

	@media all and (min-height: 37.5rem) {
		height: calc(var(--viewport-height) * 0.56);
	}

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
		background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(0, 0, 0, 0) 15%,
			rgba(0, 0, 0, 0.9) 100%
		);
		height: 100%;
		width: 100%;
		overflow: hidden;
		content: '';
	}
`;

export const HeroCopy = styled.div`
	--number-of-lines: 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;
	padding: 0 ${rem('32px')} ${rem('16px')} ${rem('16px')};

	.title {
		width: 100%;
		font-family: var(--body-font-family);
		font-weight: normal;
		font-size: calc((22 / var(--base-font-size, 16)) * 1rem);
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
			var(--number-of-lines) * var(--global-lineheight) * 1.1rem
		);
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
			font-size: calc((11 / var(--base-font-size, 16)) * 1rem);
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
`;

export const ArticleContent = styled.div`
	padding: calc(var(--global-padding) * 1.5) var(--global-padding);
	z-index: 2;

	.lead {
		color: var(--content-lead-color);
		font-family: var(--body-font-family);
		font-weight: 300;
		font-size: calc((16 / var(--base-font-size, 16)) * 1rem);
		letter-spacing: ${rem('0.22px')};
		line-height: ${rem('32px')};
		margin-bottom: ${rem('24px')};
	}

	p {
		font-family: var(--content-font-family);
		color: var(--content-paragraph-color);
		font-size: calc((17 / var(--base-font-size, 16)) * 1rem);
		letter-spacing: ${rem('0.4px')};
		line-height: ${rem('28px')};
	}
`;

export const ArticleLink = styled.a`
	--button-size: ${rem('56px')};
	width: 100%;
	height: var(--button-size);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	color: var(--color-primary);
	border: 1px solid var(--color-gray5);
	background-color: var(--body-background);
	border-radius: var(--button-size);

	.article-link {
		&__title {
			font-size: calc((16 / var(--base-font-size, 16)) * 1rem);
			font-family: var(--heading-font-family);
		}

		&__source {
			font-size: calc((10 / var(--base-font-size, 16)) * 1rem);
			text-transform: uppercase;
			letter-spacing: 1px;
			color: var(--color-gray7);
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
`;

export const BottomOptionsBar = styled.aside`
	width: 100%;
	height: ${rem('48px')};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: var(--color-gray0);
	border-top: 1px solid var(--color-gray3);

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
`;

export default Article;
