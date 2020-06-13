import { INewsArticle, ChosenNewsSources } from "data/interfaces/index";

export interface INewsPageHeaderItems {
	id: string;
	label: string;
}

export interface INewsPageProps {
	platform: string;
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
}

export interface INewsPageState {
	hasData: boolean;
	tabsHeaderItems: INewsPageHeaderItems[] | null;
}
