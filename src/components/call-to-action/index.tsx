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
import { useSpring, animated } from "react-spring";
import { Wrapper } from "./styles";
import { IUICallToActionProps } from "./types";

/**
 * @description CallToAction

 * @date  21/November/2018 at 13:38
 * @extends {React.FunctionComponent}
 */
const UICallToAction: React.FunctionComponent<IUICallToActionProps> = (props) => {
	const { children, ...ctaProps } = props;
	const ctaAnimatedProps = useSpring({
		from: {
			transform: "translate3d(0, 4.5rem, 0)",
		},
		to: {
			transform: "translate3d(0,0,0)",
		},
		delay: 128,
	});
	const AnimatedWrapper = animated(Wrapper);
	return (
		<AnimatedWrapper {...ctaProps} style={ctaAnimatedProps}>
			{children}
		</AnimatedWrapper>
	);
};

UICallToAction.defaultProps = {
	isTop: false,
	float: false,
	blurred: false,
};

export default UICallToAction;
