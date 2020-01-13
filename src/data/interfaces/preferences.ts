import { EAppThemeType } from "./theme";
import { INewsArticleItem } from "./news";

export interface PreferencesReducer {
	type: null;
	theme?: EAppThemeType | undefined;
	chosenSources: ChosenNewsSources;
	saved: INewsArticleItem[];
	authenticated: boolean;
	baseFontRatio: number;
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
