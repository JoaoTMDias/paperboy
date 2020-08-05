import { rem } from "polished";
import styled, { css } from "styled-components";
import { theme } from "helpers/theme.helper";
import fluidFontSize from "helpers/fluid-typography";
import { IUISectionProps } from "./types";

// Styling
export const Wrapper = styled.div`
	width: 100%;
	background-color: var(--color-white);
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-left: 1rem;
	padding-right: 1rem;

	${(props: IUISectionProps) =>
		props.grouped &&
		css`
			padding-left: 0;
			padding-right: 0;
		`};
`;

export const SectionWrapper = styled.section`
	width: 100%;
	max-width: 100%;
	padding: 0 ${(props: IUISectionProps) => (props.grouped === true ? "0" : "1rem")};

	overflow-x: hidden;
	display: flex;
	flex-direction: ${(props: IUISectionProps) => {
		if (props.layout === "horizontal") {
			return "row";
		}
		return "column";
	}};
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${(props: IUISectionProps) => {
		switch (props.role) {
			case "search":
				return "2rem";

			default:
				return `${rem("72px")}`;
		}
	}};

	&:only-child {
		margin-bottom: 0;
	}
`;

export const SectionTitle = styled.h2`
	--section-title-color: var(--color-gray9);
	--section-title-amount-color: var(--section-title-color);
	--section-title-background-color: var(--color-gray2);

	${theme.dark`
			--section-title-color: var(--color-gray4);
			--section-title-background-color: var(--color-gray9);
	`};

	font-family: var(--body-font-family);
	${fluidFontSize(12, "2vw", 14)};
	text-transform: capitalize;
	color: var(--section-title-color);
	height: 1rem;
	letter-spacing: ${rem("0.4px")};
	line-height: 1rem;
	margin-bottom: calc(var(--global-padding) * 0.5);
	padding: 0;

	${(props: IUISectionProps) =>
		props.grouped &&
		css`
			padding-left: 1rem;
			padding-right: 1rem;
		`};

	.section-title--amount {
		color: var(--section-title-color);
		background-color: var(--section-title-background-color);
		font-size: ${rem("9px")};
		text-transform: uppercase;
		height: 1rem;
		padding: ${rem("2px")} ${rem("4px")};
		border-radius: 1rem;
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		max-width: 3rem;
		flex-shrink: 0;
		margin-left: 0.5rem;
	}
`;
