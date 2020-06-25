import { FeatureSupport } from 'data/interfaces';

export interface IAuditProps {
	isOnline: boolean;
	isStandalone: boolean;
	hasAudited: boolean;
	platform: string;
	actions: {
		setStandaloneStatus: (isStandalone: boolean) => {
			type: string;
			status: boolean;
		},
		setOnlineStatus: (status: boolean) => {
			type: string;
			status: boolean;
		},
		setPlatform: (platform: string) => {
			type: string;
			platform: string;
		},
		setFeatureSupport: (features: FeatureSupport) => {
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
		}
	}
}

export interface IAuditState {
	isOnline: boolean | null;
	isStandalone: boolean;
}
