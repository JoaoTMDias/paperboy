// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { A11yPageTitle } from "../index.components";

// Component Props
interface IContainerProps {
	isFixed?: boolean;
	fullheight?: boolean;
	fullwidth?: boolean;
	offsetTop?: string;
	theme?: any;
	title: string;
	style?: string | object;
	children: React.ReactNode;
}

/**
 * @description Layout Container
 * @author  João Dias
 * @date  20/November/2018 at 16:55
 * @extends {React.FunctionComponent}
 */
const Container: React.FunctionComponent<IContainerProps> = props => {
	const { offsetTop, children, ...allProps } = props;

	if (offsetTop && typeof document !== "undefined") {
		const pageBody: HTMLElement | null = document.documentElement;

		if (pageBody) {
			pageBody.style.setProperty("--top-navigation-bar-height", `${offsetTop}`);
		}
	}
	return (
		<MainContent id="page-main" aria-labelledby="page-title" {...allProps}>
			<A11yPageTitle title={props.title} />
			<Wrapper {...allProps}>
				<Trigger id="container-trigger" />
				{children}
			</Wrapper>
		</MainContent>
	);
};

// Styling
const MainContent = styled.main`
	margin-top: 0;
	margin-right: auto;
	margin-left: auto;
	width: 100%;
	min-height: calc(100% - 4rem);

	@media all and (min-width: 75rem) {
		width: calc(100% - 4rem);
	}

	@media all and (min-width: 87.5rem) {
		width: 87.5rem;
	}

	${(props: IContainerProps) =>
		!props.fullwidth &&
		css`
			width: calc(100% - 2rem);
		`};
`;

const Trigger = styled.aside`
	width: 100%;
	height: 1px;
	position: absolute;
	top: 0;
	left: 0:
`;

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	margin-top: ${(props: IContainerProps) => {
		if (props.theme) {
			const margin = props.fullheight ? "0" : "var(--top-navigation-bar-height)";
			return margin;
		}
		return "0";
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

Container.defaultProps = {
	isFixed: false,
	fullheight: false,
	fullwidth: false,
	title: "page title",
};

export default React.memo(Container);
