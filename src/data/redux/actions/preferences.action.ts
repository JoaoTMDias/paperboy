import {
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
} from '../../constants/index.constants';
import { EAppThemeType } from '../../interfaces/theme.interfaces';
import { IChosenSource } from '../../../pages/onboarding/choose-sources';

/**
 * @description Updates the store with the new chosen sources
 * @date 2019-01-09
 * @param {string[]} sources
 */
export const SetChosenNewsSources = (sources: IChosenSource[]) => {
	return {
		type: SET_CHOSEN_NEWS_SOURCES,
		payload: {
			data: {
				quantity: sources.length,
				items: sources,
			}
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