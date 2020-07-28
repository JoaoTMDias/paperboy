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
	return new Promise(function (resolve, reject) {
		let confirmed = window.confirm(msg);

		return confirmed ? resolve(true) : reject(false);
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
		.catch((err) => console.info(`Service Worker will keep the current version`));
};

export const wrapRootElement = wrapWithProvider;
