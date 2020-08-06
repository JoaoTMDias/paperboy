/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
			launchOptions.preferences.darkTheme = true;
			launchOptions.args.push("--force-dark-mode=true");

			return launchOptions;
		}
	});

	return config;
};
