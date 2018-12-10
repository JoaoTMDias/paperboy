// Constants
import {
  GET_CHOSEN_NEWS_SOURCES,
  SET_CHOSEN_NEWS_SOURCES,
  RESET_APP_STATE,
} from '../../constants/index';

// Preferences initial state
const initialState = {
  type: null,
  sources: {
    quantity: 0,
    items: [],
  },
  hasSession: false,
};

/**
 * User Preferences Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function preferences(state = initialState, action) {
  switch (action.type) {
    case GET_CHOSEN_NEWS_SOURCES:
      return Object.assign({}, state, {
        type: action.type,
        sources: {
          items: action.available,
        },
      });

    case SET_CHOSEN_NEWS_SOURCES:
      return Object.assign({}, state, {
        type: action.type,
        sources: {
          quantity: action.sources.quantity,
          items: action.sources.items,
        },
      });
    case RESET_APP_STATE:
      return {
        type: null,
        sources: {
          quantity: 0,
          items: [],
        },
        hasSession: false,
      };
    default:
      return state;
  }
}

export default preferences;
