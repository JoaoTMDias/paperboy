import {
  getUserCountryCodeByCoordinates,
  setFeatureSupport,
  setOnlineStatus,
  setPlatform,
  setStandaloneStatus,
} from "./general.action";
import {
  getAllAvailableNewsSources,
  getAllLatestNewsFromSource,
  getAvailableNewSourcesFromLanguage,
} from "./news.action";

export {
  setOnlineStatus,
  setStandaloneStatus,
  getUserCountryCodeByCoordinates,
  setPlatform,
  setFeatureSupport,
  getAllAvailableNewsSources,
  getAvailableNewSourcesFromLanguage,
  getAllLatestNewsFromSource,
};
