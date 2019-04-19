export interface ILatestNews {
	status: string;
	totalResults: number;
	articles: ILatestNewsArticle[];
}

export interface INewsReducer {
	type: string | null;
	latest: ILatestNews;
	sources: Sources;
}

interface Source {
	id: string | null;
	name: string;
}

export interface ILatestNewsArticle {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

export interface INewsArticles {
	id: string;
	name: string;
	description: string;
	url: string;
	category: Category;
	language: string;
	country: string;
}

export interface Sources {
	language: any[];
	general: INewsArticles[];
	business: INewsArticles[];
	entertainment: INewsArticles[];
	health: INewsArticles[];
	science: INewsArticles[];
	sports: INewsArticles[];
	technology: INewsArticles[];
}

export enum Category {
	Business = 'business',
	Entertainment = 'entertainment',
	General = 'general',
	Health = 'health',
	Science = 'science',
	Sports = 'sports',
	Technology = 'technology',
}
