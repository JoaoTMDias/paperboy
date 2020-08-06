/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { css } from "styled-components";
import { EAppThemeType } from "data/interfaces";

/**
 * For the specified media query, returns a tag function that can be used to
 * automatically wrap the tagged template literal in its media query.
 *
 * @param {string} query The string or template literal containing the media
 *   query features.
 */

const themes = {
	light: "LIGHT",
	dark: "DARK",
};

/**
 * Applies specific styles to a theme.
 * Uses the `data-theme`attribute on html.
 *
 * @param {"light" | "dark"} flavour
 * @returns
 */
function setTheme(flavour) {
	return (...rules) => css`
		html[data-theme=${`"${flavour}"`}] && {
			${css(...rules)};
		}
	`;
}

export const theme = {
	light: setTheme(themes.light),
	dark: setTheme(themes.dark),
};

export const hasDarkModeInSystemPreferences =
	typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

export function checkIfHasDarkMode() {
	return hasDarkModeInSystemPreferences ? EAppThemeType.DARK : EAppThemeType.LIGHT;
}
