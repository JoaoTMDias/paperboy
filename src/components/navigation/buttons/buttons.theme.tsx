// Libraries
import { Link } from 'gatsby';
import { darken, rem } from 'polished';
import * as React from 'react';
import styled, { css } from 'styled-components';

// Component Props
interface IUIButtonProps {
	type: string;
	text: string;
	label: string;
	onClick?: any;
	disabled?: boolean;
}

/**
 * @description Button: Primary
 * @author  João Dias
 * @date  11/December/2018 at 00:03
 * @extends {React.SFC}
 */
class UIButton extends React.Component<IUIButtonProps> {
	shouldComponentUpdate(nextProps: IUIButtonProps, nextState) {
		return nextProps.disabled !== this.props.disabled;
	}

	public render() {
		const { type, text, label, disabled, onClick } = this.props;

		const linkText = disabled ? 'Select at least 3 sources ' : text;
		return (
			<Button
				type={type}
				onClick={onClick}
				aria-label={label}
				tabIndex={0}
				disabled={disabled}
			>
				{linkText}
			</Button>
		);
	}
}

interface IUIAnchorProps {
	to: string;
	text: string;
	label: string;
	disabled?: boolean;
}

class UIAnchor extends React.Component<IUIAnchorProps> {
	shouldComponentUpdate(nextProps: IUIAnchorProps, nextState) {
		return nextProps.disabled !== this.props.disabled;
	}

	public render() {
		const { to, text, label, disabled } = this.props;

		const linkText = disabled ? 'Select at least 3 sources ' : text;
		return (
			<Anchor to={to} aria-label={label} tabIndex={0} disabled={disabled}>
				{linkText}
			</Anchor>
		);
	}
}

// Styling
const Button = styled.button`
	width: 100%;
	height: var(--bottom-navigation-bar-height, ${rem('56px')});
	background-color: var(--color-primary);
	color: var(--color-white);
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: var(--button-radius);
	border: none;
	-webkit-appearance: none;
	transform: scale(1);
	transition: all 200ms var(--default-timing-function);

	&:focus,
	&:hover,
	&:active {
		background-color: ${darken(0.1, '#e74c3c')};
		color: currentColor;
		outline: 1px dashed var(--color-gray2);
	}

	&:active {
		transform: scale(0.98);
	}

	${(props: IUIButtonProps) =>
		props.disabled &&
		css`
			background-color: var(--color-gray3);
			color: var(--color-gray8);
			cursor: no-drop;
			user-select: none;
			pointer-events: none;
			box-shadow: none !important;
			border: none;

			&:focus,
			&:hover,
			&:active {
				background-color: var(--color-gray5);
				color: var(--color-gray8);
				outline: none;
			}
		`};
`;

const Anchor = styled(Link)`
	width: 100%;
	height: var(--bottom-navigation-bar-height, ${rem('56px')});
	background-color: var(--color-primary);
	color: var(--color-white);
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: var(--button-radius);
	border: none;
	transform: scale(1);
	transition: all 200ms var(--default-timing-function);
	pointer-events: all;

	&:focus,
	&:hover,
	&:active {
		background-color: ${darken(0.1, '#e74c3c')};
		color: currentColor;
		outline: 1px dashed var(--color-gray2);
	}

	&:active {
		transform: scale(0.98);
	}

	${(props: IUIAnchorProps) =>
		props.disabled &&
		css`
			background-color: var(--color-gray3);
			color: var(--color-gray8);
			cursor: no-drop;
			user-select: none;
			pointer-events: none;
			box-shadow: none !important;
			border: none;

			&:focus,
			&:hover,
			&:active {
				background-color: var(--color-gray5);
				color: var(--color-gray8);
				outline: none;
			}
		`};
`;

export { UIButton, UIAnchor };
