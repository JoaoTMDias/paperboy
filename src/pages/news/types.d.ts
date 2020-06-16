import { INewsArticle, ChosenNewsSources } from "data/interfaces/index";
import * as H from "history";

export interface INewsPageProps {
	platform: string;
	authenticated: boolean;
	sources: ChosenNewsSources;
	latest: INewsArticle;
	location: H.Location;
}
