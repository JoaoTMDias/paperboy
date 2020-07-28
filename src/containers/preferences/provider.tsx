import React, { FunctionComponent, useMemo } from "react";
import PreferencesContext, { DEFAULT_PREFERENCES } from "./context";
import useChooseSources from "components/choose-sources/useChooseSources";
import { ChosenNewsSources, EAppThemeType } from "data/interfaces";

const PreferencesProvider: FunctionComponent = ({ children }) => {
	const { storage, setStorage, removeValue } = useChooseSources();

	const values = useMemo(() => {
		return {
			authenticated: storage?.authenticated || DEFAULT_PREFERENCES.authenticated,
			saved: storage?.saved || [],
			baseFontRatio: storage?.baseFontRatio || DEFAULT_PREFERENCES.baseFontRatio,
			chosenSources: storage?.chosenSources || DEFAULT_PREFERENCES.chosenSources,
			theme: storage?.theme || DEFAULT_PREFERENCES.theme,
			resetAppState: () => removeValue(),
			setAppTheme: (theme: EAppThemeType) => setStorage(theme, "theme"),
			setBaseFontRatio: (ratio: number) => setStorage(ratio, "baseFontRatio"),
			setChosenSources: (sources: ChosenNewsSources) => setStorage(sources, "chosenSources"),
			setUserAuthentication: (state: boolean) => setStorage(state, "authenticated"),
		};
	}, [storage, setStorage, removeValue]);

	return <PreferencesContext.Provider value={values}>{children}</PreferencesContext.Provider>;
};

export default PreferencesProvider;
