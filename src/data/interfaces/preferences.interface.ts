import { EAppThemeType } from './theme.interfaces';
import { IListOfCategorizedSources } from './news.interface';
import { IChosenSource } from '../../pages/onboarding/choose-sources';

export interface PreferencesReducer {
	type: null;
	theme?: EAppThemeType | undefined;
	chosenSources: ChosenNewsSources;
	authenticated: boolean;
}

export interface IChosenNewsSourcesItems {
	[key: string]: string[];
}

export interface ChosenNewsSources {
	quantity: number;
	categories: string[];
	tabs: INewsPageHeaderItems[];
	items: IChosenNewsSourcesItems;
}

export interface INewsPageHeaderItems {
	id: string;
	label: string;
}
