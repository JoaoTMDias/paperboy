import { EAppThemeType } from "./theme";
import { INewsArticleItem } from "./news";

export interface PreferencesReducer {
	authenticated: boolean;
	theme?: EAppThemeType;
	chosenSources: ChosenNewsSources;
	saved: INewsArticleItem[];
	baseFontRatio: number;
}

export interface IChosenNewsSourcesItems {
	latest: string[];
	tabs: INewsPageHeaderItems[];
}

export interface ChosenNewsSources {
	quantity: number;
	items: IChosenNewsSourcesItems;
}

export interface INewsPageHeaderItems {
	id: string;
	sources: string[];
}
