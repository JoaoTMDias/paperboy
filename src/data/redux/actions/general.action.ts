import {
	SET_ONLINE_STATUS,
	SET_PLATFORM,
	SET_STANDALONE_STATUS,
	SET_FEATURE_SUPPORT,
	SET_USER_COUNTRY,
} from "data/constants/index.constants";

import GeneralService from "data/services/general.service";
import { FeatureSupport, LocationData } from "data/interfaces/general";
import { Dispatch } from "redux";

/**
 * @description Defines the network status of the device: online or offline
 * @date 2019-01-05
 * @param {*} status
 * @returns
 */
const setOnlineStatus = (status: boolean) => {
	return {
		type: SET_ONLINE_STATUS,
		status,
	};
};

/**
 * @description Defines if the device is on standalone mode
 * @date 2019-01-05
 * @param {*} platform
 * @returns
 */
const setStandaloneStatus = (isStandalone: boolean) => {
	return {
		type: SET_STANDALONE_STATUS,
		status: isStandalone,
	};
};

/**
 * @description Defines the support for a number of specific HTML5 features on the
 * users device.
 * @date 2019-01-05
 * @param {*} features
 * @returns
 */

const setFeatureSupport = (features: FeatureSupport) => {
	return {
		type: SET_FEATURE_SUPPORT,
		payload: {
			hasAudited: features.hasAudited,
			supports: {
				geoLocation: features.supports.geoLocation,
				batteryStatus: features.supports.batteryStatus,
				networkInformation: features.supports.networkInformation,
				notifications: features.supports.notifications,
			},
		},
	};
};

/**
 * @description Defines the platform of the device
 * @date 2019-01-05
 * @param {*} platform
 * @returns
 */
const setPlatform = (platform: string) => {
	return {
		type: SET_PLATFORM,
		platform,
	};
};

/**
 * @description Uses the Geonames webservice to find the users country code and language
 * depending on his latitude and longitude coordinates.
 * If found, updates the Redux store with the returned data.
 * @date 2019-01-07
 * @param {*} latitude
 * @param {*} longitude
 */
const getUserCountryCodeByCoordinates = (latitude: number, longitude: number) => {
	const updateStore = (data: LocationData) => {
		return {
			type: SET_USER_COUNTRY,
			payload: {
				hasLocation: true,
				data,
			},
		};
	};

	return (dispatch: Dispatch) => {
		GeneralService.getUserCountryCodeByCoordinates(latitude, longitude)
			.then((result) => {
				if (result.data) {
					const country = result.data;
					dispatch(updateStore(country));
				}
			})
			.catch((error) => { });
	};
};

export { setOnlineStatus, setStandaloneStatus, setFeatureSupport, setPlatform, getUserCountryCodeByCoordinates };
