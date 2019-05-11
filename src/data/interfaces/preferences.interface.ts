import { EAppThemeType } from './theme.interfaces';
import { IListOfCategorizedSources } from './news.interface';
import { IChosenSource } from '../../pages/onboarding/choose-sources';

export interface PreferencesReducer {
	type: null;
	theme?: EAppThemeType | undefined;
	chosenSources: ChosenNewsSources;
	authenticated: boolean;
}

export interface ChosenNewsSources {
	quantity: number;
	items: IChosenSource[];
}
