import { produce } from "immer";

// Constants
import {
	GET_CHOSEN_NEWS_SOURCES,
	RESET_APP_STATE,
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
	SET_BASE_FONT_RATIO,
	SET_SAVE_OR_UNSAVE_ARTICLE,
} from "data/constants/index.constants";

import { PreferencesReducer, IReduxActions } from "data/interfaces/index";
import { EAppThemeType } from "data/interfaces/theme";

// Preferences initial state
const initialState: PreferencesReducer = {
	type: null,
	chosenSources: {
		quantity: 0,
		items: {
			latest: [],
			tabs: [],
		},
	},
	saved: [],
	authenticated: false,
	baseFontRatio: 1,
};

/**
 * User Preferences Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function preferences(state: PreferencesReducer = initialState, action: IReduxActions) {
	return produce(state, (draftState: PreferencesReducer) => {
		switch (action.type) {
			case SET_CHOSEN_NEWS_SOURCES:
			case GET_CHOSEN_NEWS_SOURCES:
				draftState.chosenSources = action.payload.data;
				break;

			case SET_USER_AUTHENTICATION:
				draftState.authenticated = action.payload.data;
				break;

			case SET_APP_THEME:
				draftState.theme = action.payload.data;
				break;

			case SET_BASE_FONT_RATIO:
				draftState.baseFontRatio = action.payload.data;
				break;

			case SET_SAVE_OR_UNSAVE_ARTICLE:
				draftState.saved = action.payload.data;
				break;

			case RESET_APP_STATE:
				if (action.payload.status) {
					draftState.type = initialState.type;
					draftState.theme = initialState.theme;
					draftState.authenticated = initialState.authenticated;
					draftState.chosenSources = initialState.chosenSources;
				}
				break;
		}
	});
}

export default preferences;
