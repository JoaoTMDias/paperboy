/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { css } from "styled-components";

/**
 * For the specified media query, returns a tag function that can be used to
 * automatically wrap the tagged template literal in its media query.
 *
 * @param {string} query The string or template literal containing the media
 *   query features.
 */

const DEFAULT_FONT_SIZE = 16;

const breakpoints = {
	xmall: 360,
	small: 414,
	medium: 640,
	large: 1024,
	xlarge: 1200,
	xxlarge: 1440,
};

const mediaQuery = (...query) => (...rules) => css`
	@media ${css(...query)} {
		${css(...rules)}
	}
`;

const above = {
	small: mediaQuery`(min-width: ${breakpoints.small / DEFAULT_FONT_SIZE}rem)`,
	medium: mediaQuery`(min-width: ${breakpoints.medium / DEFAULT_FONT_SIZE}rem)`,
	large: mediaQuery`(min-width: ${breakpoints.large / DEFAULT_FONT_SIZE}rem)`,
	xlarge: mediaQuery`(min-width: ${breakpoints.xlarge / DEFAULT_FONT_SIZE}rem)`,
	xxlarge: mediaQuery`(min-width: ${breakpoints.xxlarge / DEFAULT_FONT_SIZE}rem)`,
};

const below = {
	small: mediaQuery`(min-width: ${breakpoints.small / DEFAULT_FONT_SIZE}rem)`,
	medium: mediaQuery`(max-width: ${breakpoints.medium / DEFAULT_FONT_SIZE}rem)`,
	large: mediaQuery`(max-width: ${breakpoints.large / DEFAULT_FONT_SIZE}rem)`,
	xlarge: mediaQuery`(max-width: ${breakpoints.xlarge / DEFAULT_FONT_SIZE}rem)`,
	xxlarge: mediaQuery`(max-width: ${breakpoints.xxlarge / DEFAULT_FONT_SIZE}rem)`,
};

export { mediaQuery, above, below };
