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

/** ********
 ** Component: IconDislike
 ** @type: functional stateless component
 ** @description:  SMS Icon
 ********* */
export const IconSMS = () => {
	return (
		<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" tabIndex={-1}>
			<path
				fill="#3ac44d"
				fillRule="evenodd"
				d="M16 28a14.3 14.3 0 0 1-6.6-1.6c-.5.4-2.9 2.2-5.2 1.4a5.24 5.24 0 0 0 1.6-4.2 11.18 11.18 0 0 1-3-7.6C2.8 9.4 8.7 4 16 4s13.2 5.4 13.2 12S23.3 28 16 28"
			/>
		</Icon>
	);
};

const Icon = styled("svg")`
	width: ${rem("30px")};
	height: ${rem("30px")};
`;

export default IconSMS;
