import styled, { css } from "styled-components";
import { above } from "helpers/index.helpers";
import { IContainerProps } from "./types";

export const MainContent = styled.main`
	margin-top: 0;
	margin-right: auto;
	margin-left: auto;
	width: 100%;
	min-height: calc(100% - 4rem);

	${above.xlarge`
		width: calc(100% - 4rem);
	`};

	${above.xxlarge`
		width: 87.5rem;
		`};

	${(props: IContainerProps) =>
		!props.fullwidth &&
		css`
			width: calc(100% - 2rem);
		`};
`;

export const Trigger = styled.aside`
	width: 100%;
	height: 1px;
	position: absolute;
	top: 0;
	left: 0;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: auto;
	margin-top: ${(props: IContainerProps) => {
		const margin = props.fullheight ? "0" : "var(--top-navigation-bar-height)";
		return margin;
	}};
	margin-bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex: 1;
	z-index: 0;
	position: relative;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	scroll-behavior: smooth;

	${(props: IContainerProps) =>
		props.isFixed &&
		css`
			overflow: hidden;
		`};
`;
