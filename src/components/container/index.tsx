// Libraries
import * as React from "react";
import { MainContent, Wrapper, Trigger } from "./styles";
import { IContainerProps } from "./types";

/**
 * @description Layout Container

 * @date  20/November/2018 at 16:55
 * @extends {React.FunctionComponent}
 */
const Container: React.FunctionComponent<IContainerProps> = (props) => {
	const { offsetTop, children, ...allProps } = props;

	if (offsetTop && typeof document !== "undefined") {
		const pageBody: HTMLElement | null = document.documentElement;

		if (pageBody) {
			pageBody.style.setProperty("--top-navigation-bar-height", `${offsetTop}`);
		}
	}

	return (
		<MainContent id="page-main" {...allProps}>
			<Wrapper {...allProps}>
				<Trigger id="container-trigger" />
				{children}
			</Wrapper>
		</MainContent>
	);
};

Container.defaultProps = {
	isFixed: false,
	fullheight: false,
	fullwidth: false,
};

export default React.memo(Container);
