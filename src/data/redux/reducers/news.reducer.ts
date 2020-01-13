import { produce } from "immer";

// Constants
import {
	GET_LATEST_NEWS,
	GET_ALL_AVAILABLE_NEWS_SOURCES,
	GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
	RESET_APP_STATE,
} from "data/constants/index.constants";
import { IReduxActions } from "data/interfaces/index";

// News initial state
const initialState = {
	type: null,
	articles: {
		latest: {
			status: null,
			totalResults: 0,
			articles: [],
		},
		others: [],
	},
	sources: [],
};

/**
 * News Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function news(state = initialState, action: IReduxActions) {
	switch (action.type) {
		case GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE:
			return produce(state, draftState => {
				draftState.sources = action.payload.data;
			});

		case GET_ALL_AVAILABLE_NEWS_SOURCES:
			return produce(state, draftState => {
				draftState.sources = action.payload.data;
			});

		case GET_LATEST_NEWS:
			return produce(state, draftState => {
				draftState.articles.latest = action.payload.data;
			});

		case RESET_APP_STATE:
			if (action.payload.status) {
				return {
					...initialState,
				};
			}

		default:
			return state;
	}
}

export default news;
