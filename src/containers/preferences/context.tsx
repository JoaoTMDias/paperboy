import React from "react";
import { PreferencesReducer, ChosenNewsSources } from "data/interfaces/preferences";
import { EAppThemeType } from "data/interfaces/theme";

export interface IPreferencesContext extends PreferencesReducer {
	setChosenNewsSources(sources: ChosenNewsSources): void;
	setUserAuthentication(state: boolean): void;
	setAppTheme(theme: EAppThemeType): void;
	setBaseFontRatio(ratio: number): void;
	resetAppState(): void;
}

export const defaultPreferencesContext = {
	chosenSources: {
		quantity: 0,
		items: {
			latest: [],
			tabs: [],
		},
	},
	saved: [],
	authenticated: false,
	baseFontRatio: 1,
	setChosenNewsSources: () => { },
	setUserAuthentication: () => { },
	setAppTheme: () => { },
	setBaseFontRatio: () => { },
	resetAppState: () => { },
};

/**
 * @description Context for Preferences
 * @author João Dias
 * @param {IPreferencesContext}
 * @returns
 */
const PreferencesContext = React.createContext<IPreferencesContext>(defaultPreferencesContext);

export default PreferencesContext;
