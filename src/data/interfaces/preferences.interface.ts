import { EAppThemeType } from "./theme.interfaces";
import { IListOfCategorizedSources, INewsArticleItem } from "./news.interface";
import { IChosenSource } from "../../pages/onboarding/choose-sources";

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
