import { IAllAvailableNewsSource } from './sources.interface';

export interface INewsArticle {
	status: string;
	totalResults: number;
	articles: INewsArticleItem[];
}

export interface IListOfCategorizedSources {
	name: string;
	items: IAllAvailableNewsSource[];
	length: number;
}

export interface INewsReducer {
	type: string | null;
	articles: {
		latest: INewsArticle;
		others: INewsArticle[];
	};
	sources: IListOfCategorizedSources[];
}

interface Source {
	id: string | null;
	name: string;
}

export interface INewsArticleItem {
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

export enum INewsArticleSavedType {
	SAVE = 'SAVE',
	UNSAVE = 'UNSAVE',
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
