// Constants
import {
	GET_CHOSEN_NEWS_SOURCES,
	RESET_APP_STATE,
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
} from '../../constants/index.constants';

import { PreferencesReducer } from '../../interfaces/index.interface';
import { EAppThemeType } from '../../interfaces/theme.interfaces';

// Preferences initial state
const initialState: PreferencesReducer = {
	type: null,
	theme: EAppThemeType.DARK,
	sources: {
		quantity: 0,
		items: [],
	},
	authenticated: false,
};

/**
 * User Preferences Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function preferences(state: PreferencesReducer = initialState, action: any) {
	switch (action.type) {
		case GET_CHOSEN_NEWS_SOURCES:
			return {
				...state,
				type: action.type,
				sources: {
					items: action.available,
				},
			};

		case SET_CHOSEN_NEWS_SOURCES:
			return {
				...state,
				type: action.type,
				sources: {
					quantity: action.sources.quantity,
					items: action.sources.items,
				},
			};

		case SET_USER_AUTHENTICATION:
			return {
				type: action.type,
				...state,
				authenticated: action.authenticated,
			};

		case SET_APP_THEME:
			return {
				...state,
				theme: action.payload.data,
			};

		case RESET_APP_STATE:
			return {
				type: null,
				sources: {
					quantity: 0,
					items: [],
				},
				authenticated: false,
			};

		default:
			return state;
	}
}

export default preferences;
