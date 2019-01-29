// Constants
import {
  SET_ONLINE_STATUS,
  SET_STANDALONE_STATUS,
  SET_FEATURE_SUPPORT,
  SET_PLATFORM,
  SET_USER_COUNTRY,
} from '../../constants/index.constants';
import {
  IGeneral,
  FeatureSupport,
  UserLanguage,
} from '../../interfaces/general.interface';

// Preferences initial state
const initialState = {
  version: '0.0.1',
  platform: 'unknown',
  hasAudited: false,
  isOnline: true,
  isStandalone: false,
  supports: {
    geoLocation: false,
    batteryStatus: false,
    networkInformation: false,
    notifications: false,
  },
  userLanguage: {
    hasLocation: false,
    data: {
      languages: null,
      distance: null,
      countryCode: null,
      countryName: null,
    },
  },
};

interface GeneralActions {
  type: string;
  status: boolean;
  platform: string;
  payload: any;
}

/**
 * General App Reducer
 *
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
function general(state: IGeneral = initialState, action: GeneralActions) {
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
      const { hasAudited, ...rest } = action.payload;

      console.log('rest: ', ...rest);

      return {
        ...state,
        hasAudited: action.payload.hasAudited,
        ...rest,
      };

    case SET_USER_COUNTRY:
      return {
        ...state,
        userLanguage: Object.assign({}, state.userLanguage, {
          hasLocation: action.payload.hasLocation,
          data: action.payload.data,
        }),
      };

    default:
      return state;
  }
}

export default general;
