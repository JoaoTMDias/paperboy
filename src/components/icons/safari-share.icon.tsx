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

// Component Props
interface IIconSafariShareProps {}

/**
 * @description Tab Icon: Share

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconSafariShare: React.FunctionComponent<IIconSafariShareProps> = (props) => (
	<Icon id="safari-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" tabIndex={-1}>
		<path
			fill="var(--color-select)"
			d="M16.23 4.23L12 0 7.77 4.23a.49.49 0 0 0 .69.69l3-3.06v13.4a.49.49 0 0 0 1 0V1.86l3 3.06a.52.52 0 0 0 .35.14.51.51 0 0 0 .34-.14.49.49 0 0 0 .08-.69z"
		/>
		<path
			fill="var(--color-select)"
			d="M20.74 24H3.26V7.49h4.85A.48.48 0 0 1 8.6 8a.49.49 0 0 1-.49.49H4.23V23h15.54V8.46h-3.88A.49.49 0 0 1 15.4 8a.48.48 0 0 1 .49-.48h4.85z"
		/>
	</Icon>
);

// Styling
const Icon = styled.svg`
	width: 18px;
	height: 18px;
`;

export default IconSafariShare;
