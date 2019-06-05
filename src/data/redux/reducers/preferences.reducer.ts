import { produce } from 'immer';

// Constants
import {
	GET_CHOSEN_NEWS_SOURCES,
	RESET_APP_STATE,
	SET_CHOSEN_NEWS_SOURCES,
	SET_USER_AUTHENTICATION,
	SET_APP_THEME,
} from '../../constants/index.constants';

import {
	PreferencesReducer,
	IReduxActions,
} from '../../interfaces/index.interface';
import { EAppThemeType } from '../../interfaces/theme.interfaces';

// Preferences initial state
const initialState: PreferencesReducer = {
	type: null,
	theme: EAppThemeType.LIGHT,
	chosenSources: {
		quantity: 0,
		categories: [],
		items: {
			latest: [],
		},
		tabs: [
			{
				id: 'latest',
				label: 'Latest',
			}
		],
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
function preferences(
	state: PreferencesReducer = initialState,
	action: IReduxActions,
) {
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

			case RESET_APP_STATE:
				draftState.type = initialState.type;
				draftState.chosenSources = initialState.chosenSources;
				draftState.authenticated = initialState.authenticated;
				break;
		}
	});
}

export default preferences;
