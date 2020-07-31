// Interface
export interface IArticleTypesetProps {
	close: () => void;
}

export interface IArticleTypesetState {
	currentBaseFontSizeRatio: number;
	htmlElement: HTMLElement | null;
}
