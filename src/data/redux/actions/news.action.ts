// Constants
import { AxiosResponse } from "axios";
import {
	GET_ALL_AVAILABLE_NEWS_SOURCES,
	GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
	GET_LATEST_NEWS,
} from "data/constants/index.constants";

// Services
import NewsService from "data/services/news.service";
import { IAllAvailableNewsSource, IListOfCategorizedSources, INewsArticle } from "data/interfaces/index";
import { Dispatch, AnyAction } from "redux";

interface IAvaiableRegionalNewsSources {
	status: string;
	sources: IAllAvailableNewsSource[];
}

/**
* @description Receives the raw data from the service and returns an organized list of news sources
* @author João Dias
* @param {IAllAvailableNewsSource[]} data
* @returns {(IListOfCategorizedSources[] | null)}
*/
export function getListOfCategorizedSources(data: IAllAvailableNewsSource[]): IListOfCategorizedSources[] | null {
	// Gets only the items that are categorized
	const allItemsWithCategory = data.filter((source: IAllAvailableNewsSource) => source.category !== null);

	// Returns all the categories in all the items
	const allAppearingCategories = allItemsWithCategory.map((source: IAllAvailableNewsSource) => {
		const { category } = source;

		return category;
	});

	// Returns the final list of categories
	const reducedCategories = allAppearingCategories.reduce((previousValue: string[], currentValue: string) => {
		if (previousValue.indexOf(currentValue) < 0) {
			previousValue.push(currentValue);
		}
		return previousValue;
	}, []);

	const newData: IListOfCategorizedSources[] = [];
	reducedCategories.forEach((category: string) => {
		const getListOfCategorizedSources = data.filter((source: IAllAvailableNewsSource) => source.category === category);

		const entry = {
			name: category,
			items: getListOfCategorizedSources,
			length: getListOfCategorizedSources.length,
		};

		newData.push(entry);
		return entry;
	});

	if (newData && newData.length > 0) {
		return newData;
	}

	return null;
}

/**
 * @description Retrieves a list of all the available news sources
 * @date 2018-12-29
 * @param {*} source
 * @returns
 */
const getAllAvailableNewsSources = () => {
	function updateStore(data: IListOfCategorizedSources[]) {
		return {
			type: GET_ALL_AVAILABLE_NEWS_SOURCES,
			payload: {
				data,
			},
		};
	}

	return (dispatch: any) => {
		NewsService.getAllAvailableSources()
			.then((result: AxiosResponse) => {
				if (result && result.data) {
					const rawSources: IAllAvailableNewsSource[] = result.data.sources;

					const organizedSources = getListOfCategorizedSources(rawSources);

					if (organizedSources) {
						dispatch(updateStore(organizedSources));
					}
				}

				return null;
			})
			.catch((error) => { });
	};
};

/**
 * @description Retrives a list of all the available news sources from
 * a specific language based on the users location
 * @date 2019-01-09
 * @param {string} language
 */
const getAvailableNewSourcesFromLanguage = (language: string) => (dispatch: Dispatch) => {
	const AvailableNewsSources = (data: IAvaiableRegionalNewsSources) => {
		if (data.status === "ok" && data.sources.length > 0) {
			const newEntry: IListOfCategorizedSources = {
				name: "language",
				length: data.sources.length,
				items: data.sources,
			};
			return {
				type: GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
				payload: {
					data: newEntry,
				},
			};
		}
	};

	return (dispatch: any) => {
		NewsService.getAvailableSourcesFromLanguage(language)
			.then((result) => {
				if (result.data) {
					if (result.data && result.data.sources) {
						dispatch(AvailableNewsSources(result.data));
					}
				}
			})
			.catch((error) => { });
	};
};

/**
 * @description Fetches a list of all the latest news from a specific news outlet.
 * @date 2018-12-29
 * @param {*} source
 * @returns
 */
const getAllLatestNewsFromSource = (source: string[]) => {
	function updateStore(news: INewsArticle[]) {
		return {
			type: GET_LATEST_NEWS,
			payload: {
				data: news,
			},
		};
	}

	return (dispatch: Dispatch<AnyAction>) => {
		NewsService.getAllLatestNews(source)
			.then((result: AxiosResponse) => {
				if (result && result.data) {
					dispatch(updateStore(result.data));
				}
			})
			.catch((error) => { });
	};
};

export { getAllAvailableNewsSources, getAvailableNewSourcesFromLanguage, getAllLatestNewsFromSource };
