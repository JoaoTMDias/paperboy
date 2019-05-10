import { EAppThemeType } from './theme.interfaces';
import { IListOfCategorizedSources } from './news.interface';

export interface PreferencesReducer {
	type: null;
	theme?: EAppThemeType | undefined;
	chosenSources: ChosenNewsSources;
	authenticated: boolean;
}

export interface ChosenNewsSources {
	quantity: number;
	items: IListOfCategorizedSources[];
}
