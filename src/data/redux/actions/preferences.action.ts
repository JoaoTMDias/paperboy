import {
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
} from '../../constants/index.constants';
import { EAppThemeType } from '../../interfaces/theme.interfaces';

/**
 * @description Updates the store with the new chosen sources
 * @date 2019-01-09
 * @param {string[]} sources
 */
export const SetChosenNewsSources = (sources: string[]) => {
	return {
		type: SET_CHOSEN_NEWS_SOURCES,
		sources: {
			quantity: sources.length,
			items: sources,
		},
	};
};

export const setUserAuthentication = (state: boolean) => {
	return {
		type: SET_USER_AUTHENTICATION,
		authenticated: state,
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