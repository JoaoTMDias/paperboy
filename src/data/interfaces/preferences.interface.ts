import { EAppThemeType } from './theme.interfaces';

export interface PreferencesReducer {
	type: null;
	theme?: EAppThemeType | undefined;
	sources: ChosenNewsSources;
	authenticated: boolean;
}

export interface ChosenNewsSources {
	quantity: number;
	items: string[];
}
