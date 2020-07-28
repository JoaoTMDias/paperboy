export interface IChosenNewsSourcesItems {
	latest: string[];
	tabs: INewsPageHeaderItems[];
}

export interface ChosenNewsSources {
	quantity: number;
	items: IChosenNewsSourcesItems;
}

export interface INewsPageHeaderItems {
	id: string;
	sources: string[];
}
