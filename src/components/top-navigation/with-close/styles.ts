import { Link } from "gatsby";
import { rem } from "polished";
import styled from "styled-components";
import fluidFontSize from "helpers/fluid-typography";

export const Container = styled.div`
	--top-navigation-bar--detail-background: transparent;
	--top-navigation-bar--title-color: var(--color-gray9);
	--top-navigation-bar--height: ${rem("44px")};
	width: 100%;
	flex: auto;
	display: grid;
	grid-template-columns: var(--top-navigation-bar--height) 1fr;
	flex-direction: row;
	align-items: center;

	background-color: var(--top-navigation-bar--detail-background);
	margin: 0;
	padding: 0 ${rem("8px")};
	position: fixed;
	z-index: 10;
	transition: all 200ms ease-in-out;

	.center {
		width: 100%;
		height: var(--top-navigation-bar--height);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;

		.title,
		img {
			display: flex;
		}

		.title {
			color: var(--top-navigation-bar--title-color);
			font-family: var(--heading-font-family);
			${fluidFontSize(14, "2vw", 16)};
			letter-spacing: 0;
			margin-bottom: 0;
			max-height: var(--top-navigation-bar--height);
			opacity: 0;
			overflow: hidden;
			position: absolute;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: calc(100vw - 112px);
			z-index: -1;
			display: none;
		}
	}

	#brand-logo {
		--size: calc(var(--top-navigation-bar--height) * 0.5);
		width: var(--size);
		height: var(--size);
		border-radius: var(--size);
		transform: translateX(calc(var(--size) * -1));
		opacity: 1;
		margin: 0 auto;
	}

	.close,
	.share {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: transparent;
		border-radius: 50%;
	}

	.share {
		background-color: rgba(0, 0, 0, 0.1);
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

export const TopBarLink = styled(Link)`
	width: ${rem("44px")};
	height: ${rem("44px")};
`;

export const TopBarButton = styled.button`
	width: ${rem("44px")};
	height: ${rem("44px")};
	-webkit-appearance: none;
	border: none;
`;
