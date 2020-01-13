import { produce } from "immer";

// Constants
import {
	SET_ONLINE_STATUS,
	SET_STANDALONE_STATUS,
	SET_FEATURE_SUPPORT,
	SET_PLATFORM,
	SET_USER_COUNTRY,
} from "data/constants/index.constants";
import { IGeneral } from "data/interfaces/general";

// Preferences initial state
const initialState = {
	version: "0.0.1",
	platform: "unknown",
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
	return produce(state, (draftState: IGeneral) => {
		switch (action.type) {
			case SET_ONLINE_STATUS:
				draftState.isOnline = action.status;
				break;

			case SET_PLATFORM:
				draftState.platform = action.platform;
				break;

			case SET_STANDALONE_STATUS:
				draftState.isStandalone = action.status;
				break;

			case SET_FEATURE_SUPPORT:
				draftState.hasAudited = action.payload.hasAudited;
				draftState.supports = action.payload.supports;
				break;

			case SET_USER_COUNTRY:
				draftState.userLanguage.hasLocation = action.payload.hasLocation;
				draftState.userLanguage.data = action.payload.data;
				break;
		}
	});
}

export default general;
