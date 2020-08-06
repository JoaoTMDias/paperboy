/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { css } from "styled-components";
import { rem } from "polished";

/**
 * Creates a fluid typography font-size declaration using:
 *  - min and max for Safari
 *  - Clamp for browsers that support it
 *
 * @export
 * @param {(string | number)} min
 * @param {string} preferred
 * @param {(string | number)} max
 * @returns
 */
export default function fluidFontSize(min: string | number, preferred: string, max: string | number) {
	const minValue = `calc(${rem(min)} * var(--base-font-ratio))`;
	const maxValue = `calc(${rem(max)} * var(--base-font-ratio))`;

	return css`
		font-size: min(max(${minValue}, ${preferred}), ${maxValue});

		@supports (font-size: clamp(${minValue}, ${preferred}, ${maxValue})) {
			font-size: clamp(${minValue}, ${preferred}, ${maxValue});
		}
	`;
}
