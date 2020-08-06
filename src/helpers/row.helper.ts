/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { css } from "styled-components";

export const flexRow = ({ direction = "row", justifyContent = "center", alignItems = "center" } = {}) => css`
	display: flex;
	flex-direction: ${direction};
	justify-content: ${justifyContent};
	align-items: ${alignItems};
`;

export default flexRow;
