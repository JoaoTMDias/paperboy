// Constants
import {
	GET_ALL_AVAILABLE_NEWS_SOURCES,
	GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
	GET_LATEST_NEWS,
} from '../../constants/index.constants';

// Services
import NewsService from '../../services/news.service';
import { AxiosResponse } from 'axios';
import {
	IAllAvailableNewsSource,
	IGetAllNewsSources,
	IListOfCategorizedSources,
	INewsArticle,
} from '../../interfaces/index.interface';

interface IAvaiableRegionalNewsSources {
	status: string;
	sources: IAllAvailableNewsSource[];
}

/**
 * @description Retrieves a list of all the available news sources
 * @date 2018-12-29
 * @param {*} source
 * @returns
 */
const getAllAvailableNewsSources = () => {
	/**
	 * @description Receives the raw data from the service and returns an organized list of news sources
	 * @author João Dias
	 * @date 2019-05-09
	 * @param {IAllAvailableNewsSource[]} data
	 * @returns {(IListOfCategorizedSources[] | null)}
	 */
	function filterData(
		data: IAllAvailableNewsSource[],
	): IListOfCategorizedSources[] | null {
		// Gets only the items that are categorized
		const allItemsWithCategory = data.filter(
			(source: IAllAvailableNewsSource) => source.category !== null,
		);

		// Returns all the categories in all the items
		const allAppearingCategories = allItemsWithCategory.map(
			(source: IAllAvailableNewsSource) => {
				const { category, ...otherKeys } = source;

				return category;
			},
		);

		// Returns the final list of categories
		const reducedCategories = allAppearingCategories.reduce(
			(previousValue: string[], currentValue: string) => {
				if (previousValue.indexOf(currentValue) < 0) {
					previousValue.push(currentValue);
				}
				return previousValue;
			},
			[],
		);

		const newData: IListOfCategorizedSources[] = [];
		reducedCategories.forEach((category: string) => {
			const filterData = data.filter(
				(source: IAllAvailableNewsSource) =>
					source.category === category,
			);

			const entry = {
				name: category,
				items: filterData,
				length: filterData.length,
			};

			newData.push(entry);
			return entry;
		});

		if (newData && newData.length > 0) {
			return newData;
		}

		return null;
	}

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
					const rawSources: IAllAvailableNewsSource[] =
						result.data.sources;

					const organizedSources = filterData(rawSources);

					if (organizedSources) {
						dispatch(updateStore(organizedSources));
					}
				}

				return null;
			})
			.catch(error => {});
	};
};

/**
 * @description Retrives a list of all the available news sources from
 * a specific language based on the users location
 * @date 2019-01-09
 * @param {string} language
 */
const getAvailableNewSourcesFromLanguage = (language: string) => (
	dispatch: any,
) => {
	const AvailableNewsSources = (data: IAvaiableRegionalNewsSources) => {
		if (data.status === 'ok' && data.sources.length > 0) {
			const newEntry: IListOfCategorizedSources = {
				name: 'language',
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

		return;
	};

	NewsService.getAvailableSourcesFromLanguage(language)
		.then(result => {
			if (result.data) {
				if (result.data && result.data.sources) {
					dispatch(AvailableNewsSources(result.data));
				}
			}
		})
		.catch(error => {});
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

	return (dispatch: any) => {
		NewsService.getAllLatestNews(source)
			.then((result: AxiosResponse) => {
				if (result && result.data) {
					dispatch(updateStore(result.data));
				}
			})
			.catch(error => {});
	};
};

export {
	getAllAvailableNewsSources,
	getAvailableNewSourcesFromLanguage,
	getAllLatestNewsFromSource,
};
