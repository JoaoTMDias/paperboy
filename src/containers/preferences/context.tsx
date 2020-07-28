import { createContext } from "react";
import { ChosenNewsSources } from "data/interfaces/preferences";
import { EAppThemeType } from "data/interfaces/theme";
import { INewsArticleItem } from "data/interfaces";

export interface IPreferences {
	authenticated: boolean;
	saved?: INewsArticleItem[];
	baseFontRatio: number;
	chosenSources: ChosenNewsSources | null;
	theme?: EAppThemeType;
}

export interface IPreferencesContext extends IPreferences {
	resetAppState(): void;
	setAppTheme(theme: EAppThemeType): void;
	setBaseFontRatio(ratio: number): void;
	setChosenSources(sources: ChosenNewsSources): void;
	setUserAuthentication(state: boolean): void;
}

export const DEFAULT_PREFERENCES = {
	authenticated: false,
	saved: [],
	baseFontRatio: 1,
	chosenSources: null,
	theme: undefined,
};

export const DEFAULT_PREFERENCES_CONTEXT: IPreferencesContext = {
	...DEFAULT_PREFERENCES,
	resetAppState: () => {},
	setAppTheme: () => {},
	setBaseFontRatio: () => {},
	setChosenSources: () => {},
	setUserAuthentication: () => {},
};

/**
 * @description Context for Preferences
 * @author João Dias
 * @param {IPreferencesContext}
 * @returns
 */
const PreferencesContext = createContext<IPreferencesContext>(DEFAULT_PREFERENCES_CONTEXT);

export default PreferencesContext;
