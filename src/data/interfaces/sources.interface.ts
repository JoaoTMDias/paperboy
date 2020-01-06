export interface NewsSourcesCategories {
	available: [];
	language: [];
	general: [];
	business: [];
	entertainment: [];
	health: [];
	science: [];
	sports: [];
	technology: [];
}

export interface IGetAllNewsSources {
	status: string;
	sources: IAllAvailableNewsSource[];
}

export interface IAllAvailableNewsSource {
	id: string;
	name: string;
	description: string;
	url: string;
	category: EAllNewsSourcesCategories;
	language: string;
	country: string;
}

export enum EAllNewsSourcesCategories {
	Business = "business",
	Entertainment = "entertainment",
	General = "general",
	Health = "health",
	Science = "science",
	Sports = "sports",
	Technology = "technology",
}
