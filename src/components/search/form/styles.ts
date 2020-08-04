import styled from "styled-components";
import { rem } from "polished";
import { theme } from "helpers/theme.helper";

export const Form = styled.form`
	width: 100%;
	height: 100%;
	min-height: var(--bottom-navigation-bar-height);
	margin: 0;
	padding: 0;
`;

interface IFieldsetProps {
	type: "filter" | "input";
}

export const Fieldset = styled.div<IFieldsetProps>`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: ${({ type }) => (type === "input" ? "space-between" : "space-evenly")};
	align-items: center;
	gap: calc(var(--global-padding) * 0.5);
	align-items: center;
	margin: 0 0 var(--global-margin) 0;
	padding: 0;
	border: none;

	&:last-child {
		margin-bottom: calc(var(--global-padding) * 0.25);
	}
`;

export const SelectWrapper = styled.div`
	--select-arrow-color: var(--color-gray9);

	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	position: relative;

	.select__label {
		font-size: ${rem("10px")};
		text-transform: uppercase;
	}

	.select__input {
		position: relative;
		width: 100%;
	}

	.select__arrow {
		position: absolute;
		top: ${rem("14px")};
		right: var(--global-margin);
		width: 0;
		height: 0;
		pointer-events: none;
		border-style: solid;
		border-width: ${rem("6px")} ${rem("6px")} 0;
		border-color: var(--select-arrow-color) transparent transparent;
	}

	${theme.dark`
		--select-arrow-color: var(--color-gray1);
	`};
`;

export const Select = styled.select`
	--select-background: var(--color-gray1);
	--select-color: var(--color-gray9);

	width: 100%;
	cursor: pointer;
	padding: calc(var(--global-padding) * 0.5) var(--global-padding);
	border: 0;
	background: var(--select-background);
	color: var(--select-color);
	appearance: none;
	font-size: var(--global-font-size);
	border-radius: calc(var(--global-padding) * 0.25);

	&:hover,
	&:focus {
		box-shadow: 0 0 0 0.125rem var(--color-primary);
	}

	${theme.dark`
		--select-background: var(--color-gray9);
		--select-color: var(--color-gray1);
	`};
`;

export const Button = styled.button`
	--search-button-hover-color: var(--color-gray2);
	--input-button-width: ${rem("48px")};
	width: var(--input-button-width);
	height: var(--input-button-width);
	border-radius: var(--input-button-width);
	background-color: transparent;
	appearance: none;
	border: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover,
	&:focus {
		background-color: var(--search-button-hover-color);
	}

	svg {
		width: ${rem("20px")};
		height: auto;
	}

	${theme.dark`
		--search-button-hover-color: var(--color-gray7);
	`};
`;

export const Input = styled.input`
	--input-border: var(--color-gray6);
	--input-color: var(--color-gray9);
	--input-button-width: ${rem("48px")};

	width: calc(100% - calc(var(--input-button-width) * 2));
	height: var(--input-button-width);
	border: none;
	background-color: var(--background-color);
	caret-color: var(--color-primary);
	color: var(--input-color);
	box-shadow: inset 0 -1px 0 0 var(--input-border);

	&:focus {
		--input-border: var(--color-primary);
	}

	${theme.dark`
		--input-color: var(--color-gray1);

		&::placeholder {
			color: var(--color-gray5);
		}
	`};
`;
