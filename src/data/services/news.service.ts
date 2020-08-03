// Libraries
import axios, { AxiosPromise, AxiosResponse } from "axios";

// Constants
import { NEWS_API_KEY } from "data/constants/news.constants";
import { IGetAllNewsSources, INewsArticle } from "data/interfaces";
import { ISearchOptions } from "helpers/custom-hooks/useNewsAPI";

const instance = axios.create({
	baseURL: "https://paperboy-proxy-server.herokuapp.com",
	headers: { Authorization: `Bearer ${NEWS_API_KEY}` },
});

export default {
	/**
	 * Returns the list of the 10 Latest News
	 *
	 * @param {any} source
	 * @returns
	 */
	async getAllLatestNews(source: string[]): Promise<INewsArticle> {
		const { data }: AxiosResponse<INewsArticle> = await instance.get(`/top-headlines?sources=${source}`);
		return data;
	},

	/**
	 * Returns the list of all the available news sources
	 *
	 * @returns
	 */
	async getAllAvailableSources(): Promise<IGetAllNewsSources> {
		const { data }: AxiosResponse<IGetAllNewsSources> = await instance.get(`/sources`);
		return data;
	},

	/**
	 * Returns the a list of all the available news sources from a specific language
	 *
	 * @returns
	 */
	async getAvailableSourcesFromLanguage(language: string): Promise<IGetAllNewsSources> {
		const { data }: AxiosResponse<IGetAllNewsSources> = await instance.get(`/sources?language=${language}`);
		return data;
	},

	/**
	 * Search for a specific term in the list of all news
	 *
	 * @param {any} term
	 * @returns
	 */
	async searchForTerm(options: ISearchOptions): Promise<INewsArticle> {
		const params = Object.keys(options)
			.map((key) => `${key}=${options[key]}`)
			.join("&");

		const { data }: AxiosResponse<INewsArticle> = await instance.get(`/search/${params}`);
		return data;
	},
};
