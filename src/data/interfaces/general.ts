/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

export interface IGeneral {
	platform: "ios" | "android" | "desktop";
	hasAudited: boolean;
	isOnline: boolean;
	isStandalone: boolean;
	supports: Supports;
}

export interface Supports {
	geoLocation: boolean;
	batteryStatus: boolean;
	networkInformation: boolean;
	notifications: boolean;
}

export interface UserLanguage {
	hasLocation: boolean;
	data: LocationData;
}

export interface LocationData {
	languages: string | null;
	distance: string | null;
	countryCode: string | null;
	countryName: string | null;
}

export interface FeatureSupport {
	hasAudited: boolean;
	supports: Supports;
}
