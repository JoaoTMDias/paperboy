import { INewsArticle, ChosenNewsSources } from "data/interfaces/index";

export interface INewsPageProps {
	platform: string;
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
}
