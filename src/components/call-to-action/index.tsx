// Libraries
import * as React from "react";
import { Wrapper } from "./styles";
import { IUICallToActionProps } from "./types";

/**
 * @description CallToAction

 * @date  21/November/2018 at 13:38
 * @extends {React.FunctionComponent}
 */
const UICallToAction: React.FunctionComponent<IUICallToActionProps> = props => {
	const { children, ...ctaProps } = props;
	return (
		<Wrapper {...ctaProps} tabIndex={0}>
			{children}
		</Wrapper>
	);
};

UICallToAction.defaultProps = {
	isTop: false,
	float: false,
	blurred: false,
};

export default UICallToAction;
