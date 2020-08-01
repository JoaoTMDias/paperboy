import styled from "styled-components";
import { rem } from "polished";
import { theme } from "helpers/theme.helper";

export const Form = styled.form`
	width: 100%;
	height: 100%;
	max-height: var(--bottom-navigation-bar-height);
	margin: 0;
	padding: 0;
`;

export const Fieldset = styled.label`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr ${rem("48px")};
	grid-gap: calc(var(--global-padding) * 0.5);
	align-items: center;
	margin: 0;
	padding: 0;
`;

export const SearchButton = styled.button`
	--search-button-hover-color: var(--color-gray2);
	width: ${rem("48px")};
	height: ${rem("48px")};
	background-color: transparent;
	appearance: none;
	border: none;

	&:hover,
	&:focus {
		background-color: var(---search-button-hover-color);
	}

	svg {
		width: ${rem("20px")};
		height: auto;
	}
`;

export const Input = styled.input`
	--input-border: var(--color-gray6);
	--input-color: var(--color-gray9);
	width: 100%;
	height: ${rem("48px")};
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
