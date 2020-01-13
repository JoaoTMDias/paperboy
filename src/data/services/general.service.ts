// Libraries
import axios from "axios";

const username = `${process.env.GEONAMES_USERNAME}`;

export default {
	/**
	 * Returns the list of the 10 Latest News
	 *
	 * @param {any} source
	 * @returns
	 */
	getUserCountryCodeByCoordinates(latitude: number, longitude: number) {
		return axios.get(
			`https://secure.geonames.org/countryCodeJSON?formatted=true&lat=${latitude}&lng=${longitude}&username=${username}&style=full`,
		);
	},
};
