/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
