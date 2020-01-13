import { INewsArticle, ChosenNewsSources } from "data/interfaces/index";

export interface INewsPageHeaderItems {
	id: string;
	label: string;
}

export interface INewsPageProps {
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
	dispatch: any;
}

export interface INewsPageState {
	hasData: boolean;
	tabsHeaderItems: INewsPageHeaderItems[] | null;
}
