import { Dispatch } from "redux";

// Interface
export interface IArticleTypesetProps {
	theme?: any;
	baseFontRatio: number;
	dispatch: Dispatch<any>;
}

export interface IArticleTypesetState {
	currentBaseFontSizeRatio: number;
	htmlElement: HTMLElement | null;
}
