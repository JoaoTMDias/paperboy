import { INewsArticle, ChosenNewsSources, IBasePageProps } from "data/interfaces/index";
import * as H from "history";

export interface INewsPageProps extends IBasePageProps {
	platform: string;
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
}
