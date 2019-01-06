import {
  SET_ONLINE_STATUS,
  SET_PLATFORM,
  SET_STANDALONE_STATUS,
  SET_FEATURE_SUPPORT,
} from '../../constants/index';

/**
 * @description Defines the network status of the device: online or offline
 * @date 2019-01-05
 * @param {*} status
 * @returns
 */
const setOnlineStatus = (status) => {
  if (typeof status === 'boolean') {
    return {
      type: SET_ONLINE_STATUS,
      status,
    };
  }

  return false;
};

/**
 * @description Defines if the device is on standalone mode
 * @date 2019-01-05
 * @param {*} platform
 * @returns
 */
const setStandaloneStatus = (isStandalone) => {
  if (typeof isStandalone === 'boolean') {
    return {
      type: SET_STANDALONE_STATUS,
      status: isStandalone,
    };
  }

  return false;
};

const setFeatureSupport = (features) => {
  if (typeof features === 'object') {
    return {
      type: SET_FEATURE_SUPPORT,
      geoLocation: features.geoLocation,
      batteryStatus: features.batteryStatus,
      networkInformation: features.networkInformation,
      notifications: features.notifications,
    };
  }
};

/**
 * @description Defines the platform of the device
 * @date 2019-01-05
 * @param {*} platform
 * @returns
 */
const setPlatform = (platform) => {
  if (typeof platform === 'string') {
    return {
      type: SET_PLATFORM,
      platform,
    };
  }
};

export {
  setOnlineStatus, setStandaloneStatus, setFeatureSupport, setPlatform,
};
