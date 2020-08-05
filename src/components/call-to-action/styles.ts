import { rem } from "polished";
import styled, { css, keyframes } from "styled-components";
import { theme } from "helpers/theme.helper";
import { IUICallToActionProps } from "./types";

// Styling
export const onEnter = keyframes`
  from {
    transform: translate3d(0, var(--bottom-navigation-bar-height), 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Wrapper = styled.nav`
	width: 100%;
	height: auto;
	padding: ${rem("10px")} 0;
	position: fixed;
	left: 0px;
	right: 0px;
	bottom: ${(props: IUICallToActionProps) => (props.isTop ? "auto" : "0px")};
	background-color: var(--body-background, rgba(255, 255, 255, 1));

	${(props: IUICallToActionProps) =>
		props.blurred &&
		css`
			background-color: var(--body-background, rgba(255, 255, 255, 0.95));
		`}

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${(props: IUICallToActionProps) =>
		props.isTop ? "0px 4px 20px 0px rgba(255,255,255,0.5)" : "0px -4px 20px 0px rgba(255,255,255,1)"};
	animation-name: ${onEnter};
	animation-duration: 300ms;
	animation-timing-function: var(--default-timing-function);
	animation-fill-mode: both;
	animation-delay: 1000ms;
	z-index: 100;

	button,
	a {
		&:last-child {
			margin-top: 0.5rem;
		}

		&:only-child {
			width: calc(100% - 1rem);
			max-width: ${rem("640px")};
			margin: 0 auto;
		}
		box-shadow: ${(props: IUICallToActionProps) =>
			props.float
				? "0px 4px 16px 4px hsla(var(--cta-shadow-color-hue), 78%, 57%, 0.24)"
				: "0px 2px 0px 2px hsla(var(--cta-shadow-color-hue),78%,57%,0.24)"};
	}

	${theme.dark`
		box-shadow: ${(props: IUICallToActionProps) =>
			props.isTop ? "0px 4px 20px 0px rgba(0,0,0,0.5)" : "0px -4px 20px 0px rgba(0,0,0,1)"};
	`};
`;
