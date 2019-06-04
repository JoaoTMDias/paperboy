import {
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
} from '../../constants/index.constants';
import { EAppThemeType } from '../../interfaces/theme.interfaces';
import { IChosenSource } from '../../../pages/onboarding/choose-sources';
import { INewsPageHeaderItems, ChosenNewsSources } from '../../interfaces/index.interface';

/**
 * @description Updates the store with the new chosen sources
 * @date 2019-01-09
 * @param {string[]} sources
 */
export const SetChosenNewsSources = (sources: IChosenSource[]) => {
	function filterSources(sources: IChosenSource[]){
		const allItemsWithCategory = sources.map(
			(source: IChosenSource) => {
				const { category } = source;

				return category;
			},
		);

		// Returns the final list of categories
		const reducedCategories = allItemsWithCategory.reduce(
			(previousValue: string[], currentValue: string) => {
				if (previousValue.indexOf(currentValue) < 0) {
					previousValue.push(currentValue);
				}
				return previousValue;
			},
			[],
		);

		let tabs: INewsPageHeaderItems[] = [];
		let items = {};
		let allSourcesMerged: string[] = [];
		reducedCategories.forEach((category: string) => {
			const tab: INewsPageHeaderItems = {
				id: category,
				label: category,
			}
			tabs.push(tab);

			const sourcesOfCategory: string[] = sources.map(
				(source: IChosenSource) => {
					if(category && source && source.category === category){
						return source.name
					}

					return '';
				}
			);

			if(sourcesOfCategory){
				allSourcesMerged = [
					...allSourcesMerged,
					...sourcesOfCategory
				];
			}

			items = {
				...items,
				[`${category}`]: sourcesOfCategory,
			}

			return items;
		});

		const allItems = {
			latest: allSourcesMerged,
			...items
		}


		return {
			quantity: reducedCategories.length,
			categories: reducedCategories,
			tabs,
			items: allItems,
		};
	}

	const data: ChosenNewsSources = filterSources(sources);
	return {
		type: SET_CHOSEN_NEWS_SOURCES,
		payload: {
			data,
		}
	};
};

export const setUserAuthentication = (state: boolean) => {
	return {
		type: SET_USER_AUTHENTICATION,
		payload:  {
			data: state,
		}
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
export function setAppTheme(theme: EAppThemeType){
	return {
		type: SET_APP_THEME,
		payload: {
			data: theme,
		},
	};
}
