import { rem } from "polished";
import styled, { css } from "styled-components";

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
				return `${rem("48px")}`;
		}
	}};

	&:only-child {
		margin-bottom: 0;
	}
`;

export const SectionTitle = styled.h3`
	--section-title-color: var(--color-gray8);

	html[data-theme="DARK"] & {
		color: var(--color-gray4);
	}

	font-family: var(--body-font-family);
	font-size: ${rem("12px")};
	text-transform: capitalize;
	color: var(--section-title-color);

	letter-spacing: ${rem("0.4px")};
	line-height: ${rem("14px")};
	margin-bottom: calc(var(--global-padding) * 0.5);
	padding: 0;

	${(props: IUISectionProps) =>
		props.grouped &&
		css`
			padding-left: 1rem;
			padding-right: 1rem;
		`};
`;
