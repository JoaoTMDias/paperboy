import { INewsArticle, ChosenNewsSources, IBasePageProps } from "data/interfaces/index";
import * as H from "history";

export interface INewsPageProps extends IBasePageProps {
	platform: string;
	sources: ChosenNewsSources;
	latest: INewsArticle;
}
