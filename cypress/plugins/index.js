/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	require("@cypress/code-coverage/task")(on, config);

	// modify browser launch arguments
	// https://on.cypress.io/browser-launch-api
	on("before:browser:launch", (browser, launchOptions) => {
		if (browser.family === "chromium") {
			launchOptions.preferences["darkTheme"] = true;
			launchOptions.args.push("--force-dark-mode=true");

			return launchOptions;
		}
	});

	return config;
};
