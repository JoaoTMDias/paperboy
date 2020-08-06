/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { useState, useEffect, useCallback } from "react";
import NewsService from "data/services/news.service";
import { useMount } from "react-use";

export type NewsApiType = "sources" | "sourcesFromLanguage" | "latest" | "everything";
export type ISearchOptionsSortBy = "relevancy" | "popularity" | "publishedAt";
export type ISearchOptionsPageSize = 20 | 40 | 60 | 80 | 100;

export interface ISearchOptions {
	term: string;
	sortBy: ISearchOptionsSortBy;
	pageSize: ISearchOptionsPageSize;
}

interface UseNewsApiProps {
	type: NewsApiType;
	options?: string[];
}

interface IUseNewsApiReturns<T> {
	data: T | null;
	error: Error | null;
	loading: boolean;
	searchForTerm(searchOptions: ISearchOptions): void;
}

function useNewsApi<T>({ type, options = [] }: UseNewsApiProps): IUseNewsApiReturns<T> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	const getNewsServiceRequest = useCallback(
		async (searchOptions?: ISearchOptions): Promise<any> => {
			switch (type) {
				case "sources":
					return NewsService.getAllAvailableSources();

				case "sourcesFromLanguage":
					return NewsService.getAvailableSourcesFromLanguage(options[0]);

				case "latest":
					return NewsService.getAllLatestNews(options);

				default:
				case "everything":
					return searchOptions && NewsService.searchForTerm(searchOptions);
			}
		},
		[type, options],
	);

	const getResource = useCallback(
		async (searchOptions?: ISearchOptions) => {
			try {
				setLoading(true);

				const results = await getNewsServiceRequest(searchOptions);

				setData(results);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		},
		[setLoading, getNewsServiceRequest, setData, setError],
	);

	const searchForTerm = useCallback(
		(searchOptions: ISearchOptions) => {
			getResource(searchOptions);
		},
		[getResource],
	);

	useMount(() => {
		if (type !== "everything") {
			getResource();
		}
	});

	return { data, error, loading, searchForTerm };
}

export default useNewsApi;
