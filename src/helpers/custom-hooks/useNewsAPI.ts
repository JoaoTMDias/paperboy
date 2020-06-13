import { useState, useEffect } from "react";
import NewsService from "data/services/news.service";
import { usePrevious } from "react-use";
import { filterData } from "helpers/filter-data";
import { IGetAllNewsSources } from "data/interfaces";

type NewsApiType = "sources" | "sourcesFromLanguage" | "latest" | "everything";

interface UseNewsApiProps {
	type: NewsApiType;
	options?: string[];
}

export function useNewsApi<T>({ type, options = [] }: UseNewsApiProps) {
	const previousOptions = usePrevious(options);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	async function getNewsServiceRequest(): Promise<any> {
		switch (type) {
			case "sources":
				return NewsService.getAllAvailableSources();

			case "sourcesFromLanguage":
				return NewsService.getAvailableSourcesFromLanguage(options[0]);

			case "latest":
				return NewsService.getAllLatestNews(options);

			default:
			case "everything":
				return NewsService.searchForTerm(options[0]);
		}
	}

	async function getResource() {
		try {
			setLoading(true);

			const results = await getNewsServiceRequest();

			setData(results);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getResource();
	}, []);

	return { data, error, loading };
}

export default useNewsApi;
