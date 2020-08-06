/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
