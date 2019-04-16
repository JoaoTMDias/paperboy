// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

// Component Props
interface IUIDialogProps {
	theme?: any;
	onClick: any;
}

/**
 * @description Modal Component: Dialog
 * @author  João Dias
 * @date  07/January/2019 at 16:07
 * @extends {React.SFC}
 */
const UIDialog: React.FunctionComponent<IUIDialogProps> = props => {
	const { onClick, children } = props;
	return (
		<Dialog
			role="dialog"
			aria-labelledby="dialog__title"
			aria-describedby="dialog__description"
			onClick={onClick}
			tabIndex={0}
		>
			{children}
		</Dialog>
	);
};

// Styling
const fadeInDialog = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const Dialog = styled.div`
	width: calc(100% - 1rem);
	max-width: ${rem('359px')};
	margin: 0 auto;
	padding: ${rem('16px')} 0 0 0;

	background-color: ${(props: IUIDialogProps) => props.theme.colorWhite};

	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 102;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-top-left-radius: var(--global-radius);
	border-top-right-radius: var(--global-radius);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	opacity: 0;
	transform: translate3d(0, 0, 0);

	animation-name: ${fadeInDialog};
	animation-duration: 500ms;
	animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	animation-delay: 500ms;
	animation-fill-mode: forwards;

	box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);

	.dialog__content {
		&__title,
		&__description,
		&__tip {
			text-align: center;
			width: calc(100% - 3rem);
			margin-left: auto;
			margin-right: auto;
		}

		&__title {
			font-size: ${rem('20px')};
			margin-bottom: ${rem('4px')};
			color: var(--color-gray8);
		}

		&__description {
			font-size: ${rem('16px')};
			margin-top: 0;
			margin-bottom: ${rem('24px')};
			color: var(--color-gray7);
		}

		&__tip {
			font-size: ${rem('14px')};
			margin-top: 0;
			margin-bottom: 0;
			color: var(--color-gray8);
			padding: ${rem('8px')};
			width: 100%;
			background-color: var(--color-gray0);

			svg {
				width: ${rem('18px')};
				height: auto;
				display: inline-block;
			}
		}
	}
`;

export default UIDialog;
