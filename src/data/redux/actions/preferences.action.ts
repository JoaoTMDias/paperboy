import {
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
	RESET_APP_STATE,
	SET_BASE_FONT_RATIO,
	SET_SAVE_OR_UNSAVE_ARTICLE,
} from "data/constants/index.constants";
import { EAppThemeType } from "data/interfaces/theme";
import { INewsPageHeaderItems, ChosenNewsSources, INewsArticleItem } from "data/interfaces/index";
import { IChosenSource } from "../../../pages/onboarding/choose-sources";

/**
 * @description Updates the store with the new chosen sources
 * @date 2019-01-09
 * @param {string[]} sources
 */
export const SetChosenNewsSources = (sources: IChosenSource[]) => {
	function filterSources(sources: IChosenSource[]) {
		const reducedCategories = sources
			.map((source: IChosenSource) => {
				const { category } = source;

				return category;
			})
			.reduce((previousValue: string[], currentValue: string) => {
				if (previousValue.indexOf(currentValue) < 0) {
					previousValue.push(currentValue);
				}
				return previousValue;
			}, []);

		const tabs: INewsPageHeaderItems[] = [];
		let allSourcesMerged: string[] = [];
		reducedCategories.forEach((category: string) => {
			const categorySources: string[] = sources
				.map((source: IChosenSource) => {
					if (category && source && source.category === category) {
						return source.name;
					}

					return "";
				})
				.filter((source) => source !== "");

			const tab: INewsPageHeaderItems = {
				id: category,
				sources: [...categorySources],
			};
			tabs.push(tab);

			if (categorySources) {
				allSourcesMerged = [...allSourcesMerged, ...categorySources].filter((source) => source !== "");
			}
		});

		const allItems = {
			latest: allSourcesMerged,
			tabs: [...tabs],
		};

		return {
			quantity: reducedCategories.length,
			items: allItems,
		};
	}

	const data: ChosenNewsSources = filterSources(sources);
	return {
		type: SET_CHOSEN_NEWS_SOURCES,
		payload: {
			data,
		},
	};
};

export const setUserAuthentication = (state: boolean) => {
	return {
		type: SET_USER_AUTHENTICATION,
		payload: {
			data: state,
		},
	};
};

/**
 * @description Changes the App Theme
 * @author João Dias
 * @date 2019-04-25
 * @export
 * @param {EAppThemeType} theme
 * @returns
 */
export function setAppTheme(theme: EAppThemeType) {
	return {
		type: SET_APP_THEME,
		payload: {
			data: theme,
		},
	};
}

/**
 * @description Resets the app back to its initial state
 * @author João Dias
 * @date 2019-06-10
 * @export
 * @param {boolean} status
 * @returns
 */
export function resetAppState(status: boolean) {
	return {
		type: RESET_APP_STATE,
		payload: {
			status,
		},
	};
}

/**
 * @description Sets the Base Font Ratio for font-size calculations
 * @author João Dias
 * @date 2019-06-24
 * @export
 * @param {number} ratio
 */
export function setBaseFontRatio(ratio: number) {
	return {
		type: SET_BASE_FONT_RATIO,
		payload: {
			data: ratio,
		},
	};
}

/**
 * @description
 * @author João Dias
 * @date 2019-06-24
 * @export
 * @param {INewsArticleItem} article
 * @returns
 */
export function handleSaveOrUnsaveArticle(article: INewsArticleItem[]) {
	return {
		type: SET_SAVE_OR_UNSAVE_ARTICLE,
		payload: {
			data: article,
		},
	};
}
