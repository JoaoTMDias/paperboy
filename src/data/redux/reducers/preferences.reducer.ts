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
	theme: EAppThemeType.LIGHT,
	chosenSources: {
		quantity: 0,
		categories: [],
		items: {
			latest: [],
		},
		tabs: [
			{
				id: "latest",
				label: "Latest",
			},
		],
	},
	saved: [
		{
			source: {
				id: "google-news",
				name: "Google News",
			},
			author: "Nicole Gaouette and Noah Gray, CNN",
			title: "Trump announces 'hard-hitting' new sanctions against Iran",
			description:
				"President Donald Trump announced new sanctions against Iran Monday in part to retaliate after the downing of a US drone last week, with the punitive measures targeting Iran's most senior leader, military officials and its top diplomat, Foreign Minister Javad …",
			url: "https://www.cnn.com/2019/06/24/politics/trump-iran-sanctions/index.html",
			urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190507081502-13-donald-trump-lead-image-super-tease.jpg",
			publishedAt: "2019-06-24T16:42:00+00:00",
			content:
				"Washington (CNN)President Donald Trump announced new sanctions against Iran Monday in part to retaliate after the downing of a US drone last week, with the punitive measures targeting Iran's most senior leader, military officials and its top diplomat, Foreign… [+1849 chars]",
		},
	],
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
