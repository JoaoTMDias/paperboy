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
import styled from "styled-components";
import { rem } from "polished";

// Component Props
interface IIconShareProps {
	platform: "android" | "ios" | "desktop";
}

/**
 * @description Navigation Icon: Share

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconShare: React.FunctionComponent<IIconShareProps> = (props) => {
	const renderIcon = () => {
		switch (props.platform) {
			case "ios":
				return (
					<g>
						<path
							d="M19.15,16.37l2.22-2.21v11a.63.63,0,1,0,1.26,0v-11l2.2,2.2a.65.65,0,0,0,.9,0,.64.64,0,0,0,0-.89l-3.28-3.28a.6.6,0,0,0-.21-.14.57.57,0,0,0-.48,0,.6.6,0,0,0-.21.14l-3.29,3.29a.62.62,0,0,0,0,.89A.64.64,0,0,0,19.15,16.37Z"
							fill="var(--top-navigation-bar--detail-foreground)"
						/>
						<path
							d="M26.18,17.26a.63.63,0,1,0,0,1.26h4V30.74H13.85V18.52h4a.63.63,0,1,0,0-1.26H12.59V32H31.41V17.26Z"
							fill="var(--top-navigation-bar--detail-foreground)"
						/>
					</g>
				);

			case "android":
			case "desktop":
			default:
				return (
					<path
						fill="var(--top-navigation-bar--detail-foreground)"
						d="M24.55 25.08a2.26 2.26 0 0 0-.25.28l-4.14-2.52a2.7 2.7 0 0 0 .14-.84 2.82 2.82 0 0 0-.14-.86l4.14-2.49a2.89 2.89 0 1 0-.59-1.75 2.79 2.79 0 0 0 .12.81l-4.16 2.5a2.87 2.87 0 0 0-2.26-1.1 2.89 2.89 0 1 0 0 5.77 2.84 2.84 0 0 0 2.26-1.1l4.16 2.52a2.93 2.93 0 0 0-.13.83 2.89 2.89 0 0 0 4.93 2 2.86 2.86 0 0 0 .85-2 2.83 2.83 0 0 0-.85-2 2.88 2.88 0 0 0-4.08-.05z"
					/>
				);
		}
	};

	return (
		<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" aria-hidden="true" tabIndex={-1}>
			{renderIcon()}
		</Icon>
	);
};

IconShare.defaultProps = {
	platform: "ios",
};

// Styling
const Icon = styled.svg`
	width: ${rem("44px")};
	height: ${rem("44px")};
`;

export default IconShare;
