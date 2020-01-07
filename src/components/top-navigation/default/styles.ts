import { rem } from "polished";
import styled, { keyframes } from "styled-components";
import { elevation } from "../../../helpers/index.helpers";
import { ITopNavigationProps } from "./types";

// Styling
export const fadeInDownBar = keyframes`
	to {
		transform: translateY(0);
	}
`;

export const Wrapper = styled.header`
	--top-bar-background-color: var(--color-white);

	html[data-theme="DARK"] & {
		--top-bar-background-color: var(--body-background);
	}

	position: ${(props: ITopNavigationProps) => {
		if (props.isSticky) {
			return "relative";
		}

		return "fixed";
	}};

	&.is-sticky {
		transform: ${`translateY(${rem("-100px")})`};
		animation-name: ${fadeInDownBar};
		animation-duration: 250ms;
		animation-fill-mode: both;
		position: fixed;
		${elevation[1]};

		.title {
			transform-origin: left center;
			transform: scale(0.7);
		}
		.shrink-when-sticky {
			margin-top: calc(var(--global-margin) * 0.5);
			margin-bottom: calc(var(--global-margin) * 0.5);
		}

		.hide-when-sticky {
			display: none;
		}
	}

	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: auto;
	min-height: ${rem("48px")};
	padding-left: ${rem("16px")};
	padding-right: ${rem("16px")};
	background-color: var(--top-bar-background-color);
	box-shadow: ${(props: ITopNavigationProps) => {
		if (props.shadow) {
			if (props.shadow === "default") {
				return "0 0 4px 0 rgba(0, 0, 0, 0.24), 0 4px 4px 0 rgba(0, 0, 0, 0.12)";
			}
			if (props.shadow === "hairline") {
				return "0 1px 0 var(--color-gray4)";
			}
			if (props.shadow === "none") {
				return "none";
			}
		}
	}};
	z-index: 3;
`;
