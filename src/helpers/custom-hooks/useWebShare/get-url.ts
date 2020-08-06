/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

/**
 * Get the URL to be shared.
 * If the site uses canonical URL, then use that URL otherwise the current URL
 * @param url URL that might be passed on by the user
 */
function getUrl(url?: string): string {
	if (url) {
		return url;
	}
	const canonicalEl = document.querySelector("link[rel=canonical]") as HTMLLinkElement;
	return canonicalEl ? canonicalEl.href : window.location.href;
}

export default getUrl;
