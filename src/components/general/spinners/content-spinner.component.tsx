// Libraries
import { rem } from "polished";
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

// Component Props
interface IUISpinnerProps {
	color?: string;
	duration?: number;
	size?: number;
	center?: boolean;
	isTemporary?: boolean;
	fullPage?: boolean;
}

/**
 * @description UX: Loading spinner used for content placeholder

 * @date  14/December/2018 at 10:37
 * @extends {React.FC}
 */
const ContentSpinner: React.FunctionComponent<IUISpinnerProps> = props => {
	const { size, ...spinnerProps } = props;
	return (
		<Wrapper tabIndex={-1} {...spinnerProps}>
			<svg className="spinner__container" viewBox="0 0 50 50" width={`${size}`} height={`${size}`}>
				<circle className="spinner__icon" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
			</svg>
		</Wrapper>
	);
};

ContentSpinner.defaultProps = {
	color: "var(--color-primary)",
	duration: 3000,
	center: true,
	size: 32,
	isTemporary: false,
};

// Animations
const hideTimeout = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const spinnerRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

// Markup
const Wrapper = styled.div`
	width: 100%;
	height: ${(props: IUISpinnerProps) => {
		if (props.fullPage) {
			return "100vh";
		} else if (props.center) {
			return "100%";
		} else {
			return `${rem(`${props.size}px`)}`;
		}
	}};
	margin: 0 auto;
	position: relative;
	display: table;
	display: flex;
	flex-direction: row;
	justify-content: ${(props: IUISpinnerProps) => (props.center ? `center` : `inherit`)};
	align-items: ${(props: IUISpinnerProps) => (props.center ? `center` : `inherit`)};
	background-color: transparent;
	opacity: 1;
	user-select: none;
	pointer-events: none;

	${(props: IUISpinnerProps) =>
		props.isTemporary &&
		css`
			animation-name: ${hideTimeout};
			animation-duration: 500ms;
			animation-delay: ${(props: IUISpinnerProps) => (props.duration ? `${props.duration}ms` : `3000ms`)};
			animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
			animation-fill-mode: forwards;
		`};

	.spinner {
		&__content {
			display: table-cell;
			vertical-align: middle;
			display: flex;
			z-index: 2;
			position: absolute;
			top: 50%;
			left: 50%;

			${(props: IUISpinnerProps) =>
				props.size &&
				css`
					margin-top: ${rem(`${-1 * (props.size * 0.5)}px`)};
					margin-right: 0;
					margin-bottom: 0;
					margin-left: ${rem(`${-1 * (props.size * 0.5)}px`)}

					width: ${(props: IUISpinnerProps) => rem(`${props.size}px`)};
					height: ${(props: IUISpinnerProps) => rem(`${props.size}px`)};
				`};

			animation-name: ${spinnerRotate};
			animation-duration: ${(props: IUISpinnerProps) => `${props.duration}ms`};
			animation-timing-function: linear;
			animation-delay: 0s;
			animation-iteration-count: infinite;
			animation-direction: normal;
			animation-fill-mode: none;
			animation-play-state: running;
		}

		&__icon {
			stroke: ${(props: IUISpinnerProps) => `${props.color}`};
			stroke-linecap: round;

			animation-name: ${dashAnimation};
			animation-duration: ${(props: IUISpinnerProps) => (props.duration ? `${props.duration * 0.5}ms` : "3000ms")};
			animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
			animation-iteration-count: infinite;
			animation-delay: 0;
			animation-direction: normal;
			animation-fill-mode: none;
			animation-play-state: running;
		}
	}
`;

export default ContentSpinner;
