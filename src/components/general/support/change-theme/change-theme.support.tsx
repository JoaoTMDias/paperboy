// Libraries
import React, { FunctionComponent, useState, useRef, useEffect, useCallback, useContext } from "react";
import { EAppThemeType } from "data/interfaces/theme";
import PreferencesContext from "./../../../../containers/preferences/context";
import { checkIfHasDarkMode } from "helpers/theme.helper";

/**
 * @description Sets the current theme of the app
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IChangeAppThemeProps>}
 */
const ChangeAppTheme: FunctionComponent = () => {
	const { theme: currentTheme, setAppTheme } = useContext(PreferencesContext);
	const { current: rootElement } = useRef(document.documentElement);
	const [hasNewTheme, setHasNewTheme] = useState(false);
	const [themeColor, setThemeColor] = useState("#e81b1f");

	/**
	 * @description updates the rootElement with the document.documentElement.
	 * @author João Dias
	 * @date 2019-04-26
	 * @returns {boolean}
	 * @memberof ChangeAppTheme
	 */
	useEffect(() => {
		if (!hasNewTheme) {
			let theme = currentTheme || checkIfHasDarkMode();

			updateAppThemeOnRoot(theme);
			setAppTheme(theme);
		}

		updateAppThemeOnRoot(currentTheme || checkIfHasDarkMode());
	}, [currentTheme, setAppTheme]);

	/**
	 * @description Updates the Current Meta Theme Color
	 * @author João Dias
	 * @date 2019-05-09
	 * @memberof ChangeAppTheme
	 */
	const changeBrowserMetaColors = useCallback((theme: EAppThemeType) => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		const metaStatusBar = document.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");
		const statusBarColor = theme === EAppThemeType.DARK ? "black-translucent" : "default";

		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", themeColor);
		}

		if (metaStatusBar) {
			metaStatusBar.setAttribute("content", statusBarColor);
		}
	}, []);

	/**
	 * @description Updates the current theme
	 * @author João Dias
	 * @date 2019-04-26
	 * @param {EAppThemeType} theme
	 * @memberof ChangeAppTheme
	 */
	const changeCurrentTheme = useCallback(
		(theme: EAppThemeType) => {
			const themeColor = EAppThemeType.LIGHT ? "#ffffff" : "#1c1e22";

			rootElement.classList.add("theme-transition");
			rootElement.setAttribute("data-theme", theme);
			window.setTimeout(function () {
				rootElement.classList.remove("theme-transition");
			}, 1000);

			setThemeColor(themeColor);
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
		[setHasNewTheme, changeCurrentTheme],
	);

	return <aside className="sr-only" data-theme={currentTheme} data-theme-color={themeColor} tabIndex={-1} />;
};

export default ChangeAppTheme;
