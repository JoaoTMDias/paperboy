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
