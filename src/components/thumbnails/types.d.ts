import { INewsArticleItem } from "data/interfaces/index";

export enum EThumbnailType {
	LARGE = "LARGE",
	SAVED = "SAVED",
	SMALL = "SMALL",
}

export interface IArticleThumbnailProps {
	id: string;
	options: INewsArticleItem;
	type?: EThumbnailType;
}
