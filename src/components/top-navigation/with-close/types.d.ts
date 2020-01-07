export interface ITopNavigationWithCloseProps {
	title: string;
	source: string;
	theme?: any;
}

export interface IHeroTitle {
	element: HTMLDivElement | null;
	height: number;
}

export interface IHeroT {
	element: HTMLDivElement | null;
	title: IHeroTitle;
	height: number;
	trigger: number;
}

export interface ITopNavigationWithCloseState {
	root: HTMLElement | null;
	speed?: number;
	hero: IHeroT;
	navbar: HTMLDivElement | null;
}
