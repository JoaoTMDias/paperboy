/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import { IGeneral, FeatureSupport } from "data/interfaces/general";

export interface IAuditContext extends IGeneral {
	setOnlineStatus(status: boolean): void;
	setStandaloneStatus(status: boolean): void;
	setFeatureSupport(features: FeatureSupport): void;
	setPlatform(plataform: string): void;
}

export const defaultAuditContext = {
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
	setOnlineStatus: () => {},
	setStandaloneStatus: () => {},
	setFeatureSupport: () => {},
	setPlatform: () => {},
};

/**
 * @description Context for Audit
 * @author João Dias
 * @param {IAuditContext}
 * @returns
 */
const AuditContext = React.createContext<IAuditContext>(defaultAuditContext);

export default AuditContext;
