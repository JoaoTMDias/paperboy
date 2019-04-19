// Libraries
import axios from 'axios';

// Constants
import { NEWS_API_KEY } from '../constants/news.constants';

export default {
	/**
	 * Returns the list of the 10 Latest News
	 *
	 * @param {any} source
	 * @returns
	 */
	getAllLatestNews(source: any[]) {
		return axios.get(
			`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${NEWS_API_KEY}`,
		);
	},

	/**
	 * Returns the list of all the available news sources
	 *
	 * @returns
	 */
	getAllAvailableSources() {
		return axios.get(
			`https://newsapi.org/v2/sources?apiKey=${NEWS_API_KEY}`,
		);
	},

	/**
	 * Returns the a list of all the available news sources from a specific language
	 *
	 * @returns
	 */
	getAvailableSourcesFromLanguage(language: string) {
		return axios.get(
			`https://newsapi.org/v2/sources?language=${language}&apiKey=${NEWS_API_KEY}`,
		);
	},

	/**
	 * Search for a specific term in the list of all news
	 *
	 * @param {any} term
	 * @returns
	 */
	searchForTerm(term: string) {
		return axios.get(
			`https://newsapi.org/v2/everything?q=${term}&sortBy=relevancy&pageSize=25&apiKey=${NEWS_API_KEY}`,
		);
	},
};
