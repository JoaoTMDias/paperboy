export interface IGeneral {
  version: string;
  platform: string;
  hasAudited: boolean;
  isOnline: boolean;
  isStandalone: boolean;
  supports: Supports;
  userLanguage: UserLanguage;
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
