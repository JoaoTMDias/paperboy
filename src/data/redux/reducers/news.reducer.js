// Constants
import {
  GET_LATEST_NEWS,
  GET_ALL_AVAILABLE_NEWS_SOURCES,
  GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE,
  RESET_APP_STATE,
} from '../../constants/index.constants'

// News initial state
const initialState = {
  type: null,
  latest: {
    status: null,
    totalResults: 0,
    articles: [],
  },
  sources: {
    available: [],
    language: [],
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
  },
}

/**
 * News Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function news(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_AVAILABLE_NEWS_SOURCES:
      return {
        ...state,
        sources: Object.assign({}, state.sources, {
          available: action.sources.available,
          general: action.sources.general,
          business: action.sources.business,
          entertainment: action.sources.entertainment,
          health: action.sources.health,
          science: action.sources.science,
          sports: action.sources.sports,
          technology: action.sources.technology,
        }),
      }

    case GET_ALL_AVAILABLE_NEWS_SOURCES_LANGUAGE:
      return {
        ...state,
        sources: Object.assign({}, state.sources, {
          language: action.language,
        }),
      }

    case GET_LATEST_NEWS:
      return Object.assign({}, state, {
        type: action.type,
        latest: action.latest,
      })
    case RESET_APP_STATE:
      return {
        type: null,
        latest: {},
        sources: {
          available: {},
          general: {},
          business: {},
          entertainment: {},
          health: {},
          science: {},
          sports: {},
          technology: {},
        },
      }
    default:
      return state
  }
}

export default news
