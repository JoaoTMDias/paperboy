import { Link } from "gatsby";
import { rem } from "polished";
import styled from "styled-components";

export const Container = styled.div`
	--top-navigation-bar--detail-background: transparent;
	--top-navigation-bar--title-color: var(--color-gray9);
	--top-navigation-bar--height:  ${rem("44px")};
	width: 100%;
	flex: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: var(--top-navigation-bar--detail-background);
	margin: 0;
	padding: 0 ${rem("8px")};
	position: fixed;
	z-index: 10;
	transition: all 200ms ease-in-out;

	.center {
		width: calc(100% - 44px);
		height: var(--top-navigation-bar--height);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;

		.title {
			font-family: var(--heading-font-family);
			font-size: ${rem("14px")};
			color: var(--top-navigation-bar--title-color);
			letter-spacing: 0;
			margin-bottom: 0;
			position: absolute;
			z-index: -1;
			opacity: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: center;
			max-height: var(--top-navigation-bar--height);
			width: calc(100vw - 112px);

		}
	}

	img,
	#brand-logo {
		width: ${rem("24px")};
		height: ${rem("24px")};
		border-radius: ${rem("24px")};
		opacity: 1;
		transform: scale(1) translateX(-44px);
		flex-basis: width: ${rem("24px")};
		flex-shrink: 0;
		flex-grow: 0;
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
		background-color: rgba(0,0,0,0.1);
	}

	&.is-scrolling {
		--top-navigation-bar--detail-background: var(--color-white);

		html[data-theme='DARK'] && {
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

		#brand-logo, img {
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
