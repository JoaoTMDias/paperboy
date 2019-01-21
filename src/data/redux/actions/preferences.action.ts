import {
  SET_CHOSEN_NEWS_SOURCES,
  SET_USER_AUTHENTICATION,
} from '../../constants/index.constants'

/**
 * @description Updates the store with the new chosen sources
 * @date 2019-01-09
 * @param {string[]} sources
 */
const SetChosenNewsSources = (sources: string[]) => {
  return {
    type: SET_CHOSEN_NEWS_SOURCES,
    sources: {
      quantity: sources.length,
      items: sources,
    },
  }
}

const setUserAuthentication = (state: boolean) => {
  return {
    type: SET_USER_AUTHENTICATION,
    authenticated: state,
  }
}

export { SetChosenNewsSources, setUserAuthentication }
