import { Link } from "gatsby";
import { rem } from "polished";
import styled, { keyframes } from "styled-components";
import fluidFontSize from "helpers/fluid-typography";
import { theme } from "helpers/theme.helper";

export const Container = styled.div`
	--top-navigation-bar--detail-background: transparent;
	--top-navigation-bar--title-color: var(--color-gray9);
	--top-navigation-bar--height: ${rem("48px")};
	width: 100%;
	display: flex;
	flex-direction: row;
	flex: auto;
	justify-content: space-between;
	align-items: center;

	background-color: var(--top-navigation-bar--detail-background);
	margin: 0;
	padding: 0 ${rem("8px")};
	position: fixed;
	z-index: 10;
	transition: all 200ms ease-in-out;

	.brand-color-figure {
		width: var(--top-navigation-bar--height);
		height: var(--top-navigation-bar--height);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;

		#brand-logo {
			--size: calc(var(--top-navigation-bar--height) * 0.6666666);
			width: var(--size);
			height: var(--size);
			border-radius: var(--size);
			margin: 0 auto;
		}
	}

	.close {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: transparent;
		border-radius: 50%;
	}

	&.is-scrolling {
		--top-navigation-bar--detail-background: var(--color-white);

		html[data-theme="DARK"] && {
			--top-navigation-bar--detail-background: var(--color-black);
			--top-navigation-bar--detail-foreground: var(--color-gray4);
			--top-navigation-bar--title-color: var(--color-gray1);
		}

		.title {
			opacity: 1;
			position: relative;
			width: 100%;
			text-align: center;
			flex: auto;
		}

		#brand-logo,
		img {
			opacity: 0;
			transform: scale(0);
			position: absolute;
			left: 0;
		}
	}
`;

const SlideInTopBarLink = keyframes`
	from {
		transform: translateX(-3rem);
	}

	to {
		transform: translateX(0);
	}
`;

export const TopBarLink = styled(Link)`
	--top-bar-link-background-color: transparent;
	width: ${rem("44px")};
	height: ${rem("44px")};
	transform: translateX(-3rem);
	background-color: transparent;
	animation-name: ${SlideInTopBarLink};
	animation-duration: 500ms;
	animation-delay: 750ms;
	animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	animation-fill-mode: forwards;

	svg {
		width: ${rem("32px")};
		height: ${rem("32px")};
		background-color: var(--top-bar-link-background-color);
		border-radius: ${rem("24px")};
	}

	${theme.dark`
		--top-bar-link-background-color: var(--body-background);
	`};
`;

export const TopBarButton = styled.button`
	width: ${rem("44px")};
	height: ${rem("44px")};
	appearance: none;
	border: none;
`;
