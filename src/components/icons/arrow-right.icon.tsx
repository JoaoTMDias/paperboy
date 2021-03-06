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

export const IconArrowRight: React.FunctionComponent = () => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" tabIndex={-1}>
		<path fill="var(--color-gray4)" d="M20.29 28.58L24.88 24l-4.59-4.59L21.71 18l6 6-6 6z" />
	</Icon>
);

// Styling
const Icon = styled.svg`
	width: ${rem("48px")};
	height: ${rem("48px")};
`;

export default IconArrowRight;
