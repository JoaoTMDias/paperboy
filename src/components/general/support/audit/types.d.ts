/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { FeatureSupport } from "data/interfaces";

export interface IAuditProps {
	isOnline: boolean;
	isStandalone: boolean;
	hasAudited: boolean;
	platform: string;
	actions: {
		setStandaloneStatus: (
			isStandalone: boolean,
		) => {
			type: string;
			status: boolean;
		};
		setOnlineStatus: (
			status: boolean,
		) => {
			type: string;
			status: boolean;
		};
		setPlatform: (
			platform: string,
		) => {
			type: string;
			platform: string;
		};
		setFeatureSupport: (
			features: FeatureSupport,
		) => {
			type: string;
			payload: {
				hasAudited: boolean;
				supports: {
					geoLocation: boolean;
					batteryStatus: boolean;
					networkInformation: boolean;
					notifications: boolean;
				};
			};
		};
	};
}

export interface IAuditState {
	isOnline: boolean | null;
	isStandalone: boolean;
}
