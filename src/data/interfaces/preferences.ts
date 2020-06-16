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
