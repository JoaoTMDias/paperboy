// Interface
export interface IArticleTypesetProps {
	baseFontRatio: number;
	actions: {
		setBaseFontRatio: (
			ratio: number,
		) => {
			type: string;
			payload: {
				data: number;
			};
		};
	};
}

export interface IArticleTypesetState {
	currentBaseFontSizeRatio: number;
	htmlElement: HTMLElement | null;
}
