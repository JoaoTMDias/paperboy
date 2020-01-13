// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";

// Component Props
interface IIconShareProps {}

/**
 * @description Navigation Icon: Close

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconClose: React.FunctionComponent<IIconShareProps> = props => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" aria-labelledby="close-icon-title" tabIndex={-1}>
		<title id="close-icon-title">Close Icon</title>
		<path
			d="M30,15.62,28.38,14,22,20.38,15.62,14,14,15.62,20.38,22,14,28.38,15.62,30,22,23.62,28.38,30,30,28.38,23.62,22Z"
			fill="var(--top-navigation-bar--detail-foreground)"
		/>
	</Icon>
);

// Styling
const Icon = styled.svg`
	width: ${rem("44px")};
	height: ${rem("44px")};
`;

export default IconClose;
