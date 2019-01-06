// Constants
import {
  SET_ONLINE_STATUS,
  SET_STANDALONE_STATUS,
  SET_FEATURE_SUPPORT,
  SET_PLATFORM,
} from '../../constants/index';

// Preferences initial state
const initialState = {
  version: '0.0.1',
  platform: 'unknown',
  isOnline: true,
  isStandalone: false,
  supports: {
    geoLocation: false,
    batteryStatus: false,
    networkInformation: false,
    notifications: false,
  },
};

/**
 * General App Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function general(state = initialState, action) {
  switch (action.type) {
    case SET_ONLINE_STATUS:
      return {
        ...state,
        isOnline: action.status,
      };

    case SET_PLATFORM:
      return {
        ...state,
        platform: action.platform,
      };

    case SET_STANDALONE_STATUS:
      return {
        ...state,
        isStandalone: action.status,
      };

    case SET_FEATURE_SUPPORT:
      return {
        ...state,
        supports: Object.assign({}, state.supports, {
          geoLocation: action.geoLocation,
          batteryStatus: action.batteryStatus,
          networkInformation: action.networkInformation,
          notifications: action.notifications,
        }),
      };

    default:
      return state;
  }
}

export default general;
