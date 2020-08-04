import { INewsArticleItem, IBasePageProps } from "data/interfaces/index";

export enum EThumbnailType {
	LARGE = "LARGE",
	SAVED = "SAVED",
	SMALL = "SMALL",
}

export interface IArticleThumbnailProps extends IBasePageProps {
	id: string;
	options: INewsArticleItem;
	type?: EThumbnailType;
}
