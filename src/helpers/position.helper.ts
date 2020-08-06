/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { css } from "styled-components";

const fixed = ({ x = 0, y = 0, yProp = "top", xProp = "left" } = {}) => css`
	position: fixed;
	${yProp}: ${y};
	${xProp}: ${x};
`;

const absolute = ({ x = 0, y = 0, yProp = "top", xProp = "left" } = {}) => css`
	position: absolute;
	${yProp}: ${y};
	${xProp}: ${x};
`;

export { fixed, absolute };
