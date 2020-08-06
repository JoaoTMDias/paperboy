/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import getUrl from "./get-url";

/**
 * Trigger native share popup
 */
function shareContent(onSuccess: () => void, onError: () => void) {
	return function (config: Partial<IShareConfig>) {
		const url = getUrl(config.url);
		const title = config.title || document.title;
		const { text } = config;
		navigator.share({ text, title, url }).then(onSuccess).catch(onError);
	};
}

export default shareContent;
