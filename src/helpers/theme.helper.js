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

export const hasDarkModeInSystemPreferences = window.matchMedia("(prefers-color-scheme: dark)").matches;

export function checkIfHasDarkMode() {
	return hasDarkModeInSystemPreferences ? EAppThemeType.DARK : EAppThemeType.LIGHT;
}
