/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
	setSaved(saved: INewsArticleItem[]): void;
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
	setSaved: () => {},
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
