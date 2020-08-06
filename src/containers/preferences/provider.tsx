/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useMemo } from "react";
import useChooseSources from "components/choose-sources/useChooseSources";
import { ChosenNewsSources, EAppThemeType, INewsArticleItem } from "data/interfaces";
import PreferencesContext, { DEFAULT_PREFERENCES } from "./context";

const PreferencesProvider: FunctionComponent = ({ children }) => {
	const { storage, setStorage, removeValue } = useChooseSources();

	const values = useMemo(() => {
		return {
			authenticated: storage?.authenticated || DEFAULT_PREFERENCES.authenticated,
			saved: storage?.saved || [],
			baseFontRatio: storage?.baseFontRatio || DEFAULT_PREFERENCES.baseFontRatio,
			chosenSources: storage?.chosenSources || DEFAULT_PREFERENCES.chosenSources,
			theme: storage?.theme || DEFAULT_PREFERENCES.theme,
			resetAppState: async () => {
				setStorage(false, "authenticated");
				setStorage(null, "chosenSources");
				await removeValue();
			},
			setSaved: (saved: INewsArticleItem[]) => setStorage(saved, "saved"),
			setAppTheme: (theme: EAppThemeType) => setStorage(theme, "theme"),
			setBaseFontRatio: (ratio: number) => setStorage(ratio, "baseFontRatio"),
			setChosenSources: (sources: ChosenNewsSources) => setStorage(sources, "chosenSources"),
			setUserAuthentication: (state: boolean) => setStorage(state, "authenticated"),
		};
	}, [storage, setStorage, removeValue]);

	return <PreferencesContext.Provider value={values}>{children}</PreferencesContext.Provider>;
};

export default PreferencesProvider;
