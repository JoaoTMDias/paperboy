/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
