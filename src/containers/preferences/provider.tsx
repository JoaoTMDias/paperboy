import React, { FunctionComponent, useCallback } from "react";
import { useLocalStorage } from "react-use";
import PreferencesContext, { defaultPreferencesContext, IPreferencesContext } from "./context";
import { EAppThemeType } from "data/interfaces/theme";
import { checkIfHasDarkMode } from "helpers/theme.helper";

const PreferencesProvider: FunctionComponent = ({ children }) => {
	const [authenticated, setAuthenticated, resetAuthentication] = useLocalStorage(
		"authenticated",
		defaultPreferencesContext.authenticated,
	);
	const [saved] = useLocalStorage("saved", defaultPreferencesContext.saved);
	const [theme, setTheme, resetTheme] = useLocalStorage("theme", checkIfHasDarkMode());
	const [chosenSources, setChosen, deleteChosen] = useLocalStorage(
		"chosenSources",
		defaultPreferencesContext.chosenSources,
	);
	const [baseFontRatio, setFontRatio, resetBaseFontRatio] = useLocalStorage(
		"saved",
		defaultPreferencesContext.baseFontRatio,
	);

	const setChosenNewsSources = useCallback(
		(sources) => {
			setChosen(sources);
		},
		[setChosen],
	);

	const setUserAuthentication = useCallback(
		(status: boolean) => {
			setAuthenticated(status);
		},
		[setAuthenticated],
	);

	const setAppTheme = useCallback(
		(theme: EAppThemeType) => {
			setTheme(theme);
		},
		[setTheme],
	);

	const setBaseFontRatio = useCallback(
		(ratio: number) => {
			setFontRatio(ratio);
		},
		[setFontRatio],
	);

	const resetAppState = useCallback(() => {
		deleteChosen();
		resetAuthentication();
		resetBaseFontRatio();
		resetTheme();
	}, [deleteChosen, resetAuthentication, resetBaseFontRatio, resetTheme]);

	const value = {
		authenticated: authenticated || defaultPreferencesContext.authenticated,
		baseFontRatio: baseFontRatio || defaultPreferencesContext.baseFontRatio,
		chosenSources: chosenSources || defaultPreferencesContext.chosenSources,
		saved: saved || defaultPreferencesContext.saved,
		theme,
		resetAppState,
		setAppTheme,
		setBaseFontRatio,
		setChosenNewsSources,
		setUserAuthentication,
	};

	return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

export default PreferencesProvider;
