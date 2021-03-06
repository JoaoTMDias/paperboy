/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { FunctionComponent, useState, useRef, useEffect, useCallback, useContext } from "react";
import { EAppThemeType } from "data/interfaces/theme";
import { checkIfHasDarkMode } from "helpers/theme.helper";
import PreferencesContext from "../../../../containers/preferences/context";

const THEME = {
	light: "#ffffff",
	dark: "#1c1e22",
};

/**
 * @description Sets the current theme of the app
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IChangeAppThemeProps>}
 */
const ChangeAppTheme: FunctionComponent = () => {
	const { theme: currentTheme, setAppTheme } = useContext(PreferencesContext);
	const { current: rootElement } = useRef(typeof document !== "undefined" ? document.documentElement : null);
	const { current: headElement } = useRef(typeof document !== "undefined" ? document.head : null);
	const [hasNewTheme, setHasNewTheme] = useState(false);
	const [themeColor, setThemeColor] = useState(THEME.light);

	/**
	 * @description Updates the Current Meta Theme Color
	 * @author João Dias
	 * @date 2019-05-09
	 * @memberof ChangeAppTheme
	 */
	const changeBrowserMetaColors = useCallback(
		(theme: EAppThemeType) => {
			if (headElement) {
				const metaThemeColor = headElement.querySelector("meta[name=theme-color]");
				const metaStatusBar = headElement.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");
				const statusBarColor = theme === EAppThemeType.DARK ? "black-translucent" : "default";

				if (metaThemeColor) {
					metaThemeColor.setAttribute("content", themeColor);
				}

				if (metaStatusBar) {
					metaStatusBar.setAttribute("content", statusBarColor);
				}
			}
		},
		[headElement, themeColor],
	);

	/**
	 * @description Updates the current theme
	 * @author João Dias
	 * @date 2019-04-26
	 * @param {EAppThemeType} theme
	 * @memberof ChangeAppTheme
	 */
	const changeCurrentTheme = useCallback(
		(theme: EAppThemeType) => {
			const color = theme === EAppThemeType.LIGHT ? THEME.light : THEME.dark;

			if (rootElement) {
				rootElement.classList.add("theme-transition");
				rootElement.setAttribute("data-theme", theme);
				window.setTimeout(() => {
					rootElement.classList.remove("theme-transition");
				}, 1000);
			}

			setThemeColor(color);
			changeBrowserMetaColors(theme);
		},
		[rootElement, setThemeColor, changeBrowserMetaColors],
	);

	/**
	 * @description If there is a new theme coming from the store,
	 * updates the HTML Root Element with the data-theme attribute.
	 * @author João Dias
	 * @date 2019-04-26
	 * @param {EAppThemeType} theme
	 * @returns {boolean}
	 * @memberof ChangeAppTheme
	 */
	const updateAppThemeOnRoot = useCallback(
		(theme: EAppThemeType) => {
			if (theme && rootElement) {
				setHasNewTheme(true);
				changeCurrentTheme(theme);
			}
		},
		[setHasNewTheme, changeCurrentTheme, rootElement],
	);

	/**
	 * @description updates the rootElement with the document.documentElement.
	 * @author João Dias
	 * @date 2019-04-26
	 * @returns {boolean}
	 * @memberof ChangeAppTheme
	 */
	useEffect(() => {
		if (!hasNewTheme) {
			const theme = currentTheme || checkIfHasDarkMode();

			updateAppThemeOnRoot(theme);
			setAppTheme(theme);
		}

		updateAppThemeOnRoot(currentTheme || checkIfHasDarkMode());
	}, [currentTheme, setAppTheme, hasNewTheme, updateAppThemeOnRoot]);

	return <div className="sr-only" data-theme={currentTheme} data-theme-color={themeColor} aria-hidden tabIndex={-1} />;
};

export default ChangeAppTheme;
