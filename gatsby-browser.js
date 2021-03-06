/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import wrapWithProvider from "./wrap-with-provider";

/**
 * @description When the bundle is downloaded, imports
 * a IntersectionObserver polyfill.
 * @date 2019-01-15
 */
export const onClientEntry = async () => {
	if (typeof IntersectionObserver === `undefined`) {
		await import(`intersection-observer`);
	}
};

/**
 * @description Promise-based window dialog that returns a resolve or a rejection.
 * @date 2019-01-15
 * @param {*} msg
 */
const confirmDialog = (msg) => {
	return new Promise((resolve, reject) => {
		try {
			// eslint-disable-next-line no-alert
			if (window.confirm(msg)) {
				resolve(true);
			}
		} catch (error) {
			reject(error);
		}
	});
};

export const onServiceWorkerUpdateFound = () => {
	console.log("A new update has been found.");
};

/**
 * @description When the service worker detects changes,
 * prompts the user to reload the window and use the latest version.
 * @date 2019-01-15
 */
export const onServiceWorkerUpdateReady = () => {
	confirmDialog(`Paperboy has been updated.` + `Reload to display the latest version?`)
		.then(() => window.location.reload())
		.catch(() => console.info(`Service Worker will keep the current version`));
};

export const wrapRootElement = wrapWithProvider;
