// Constants
import {
	GET_LATEST_NEWS,
	GET_ALL_AVAILABLE_NEWS_SOURCES,
	GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
	RESET_APP_STATE,
} from '../../constants/index.constants';
import { IReduxActions } from '../../interfaces/index.interface';

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
	sources: [
	],
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
			return {
				...state,
				sources: [...state.sources, action.payload.data],
			};

		case GET_ALL_AVAILABLE_NEWS_SOURCES:
			return {
				...state,
				sources: [...state.sources, ...action.payload.data],
			};

		case GET_LATEST_NEWS:
			return {
				...state,
				type: action.type,
				articles: {
					...state.articles,
					latest: action.payload.data,
				},
			};

		case RESET_APP_STATE:
			return {
				initialState,
			};

		default:
			return state;
	}
}

export default news;
