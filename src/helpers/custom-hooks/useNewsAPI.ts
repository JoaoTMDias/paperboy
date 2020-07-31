import { useState, useEffect, useCallback } from "react";
import NewsService from "data/services/news.service";

type NewsApiType = "sources" | "sourcesFromLanguage" | "latest" | "everything";

interface UseNewsApiProps {
	type: NewsApiType;
	options?: string[];
}

function useNewsApi<T>({ type, options = [] }: UseNewsApiProps) {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	async function getNewsServiceRequest(term?: string): Promise<any> {
		switch (type) {
			case "sources":
				return NewsService.getAllAvailableSources();

			case "sourcesFromLanguage":
				return NewsService.getAvailableSourcesFromLanguage(options[0]);

			case "latest":
				return NewsService.getAllLatestNews(options);

			default:
			case "everything":
				return term && NewsService.searchForTerm(term);
		}
	}

	const getResource = useCallback(
		async (term?: string) => {
			try {
				setLoading(true);

				const results = await getNewsServiceRequest(term);

				setData(results);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		},
		[setLoading, getNewsServiceRequest, setData, setError],
	);

	const searchForTerm = useCallback(
		(term: string) => {
			getResource(term);
		},
		[getResource],
	);

	useEffect(() => {
		if (type !== "everything") {
			getResource();
		}
	}, []);

	return { data, error, loading, searchForTerm };
}

export default useNewsApi;
