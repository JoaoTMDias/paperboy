/* eslint-disable import/no-extraneous-dependencies */
/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

/// <reference types="cypress" />

Cypress.Commands.add(
	"setupUI",
	({ url = Cypress.config().baseUrl, viewport = "iphone-6", preferences = undefined }) => {
		const parameters = {
			url,
			viewport,
			preferences,
		};

		cy.log("1-Setting up server");
		cy.server();
		cy.log("2-Visiting page");
		cy.visit(parameters.url);
		cy.log("3-Injecting aXe");
		cy.injectAxe();
		cy.log("4-Defining Viewport");
		cy.viewport(parameters.viewport);

		if (parameters.preferences) {
			cy.log("4a-Setting mocked preferences in local storage");
			window.localStorage.setItem("preferences", JSON.stringify(parameters.preferences));
		}

		cy.log("5-Ending setup");
	},
);

Cypress.Commands.add("getByAttr", (attribute, value) => {
	cy.get(`[${attribute}="${value}"]`);
});

Cypress.Commands.add("getAnnouncerText", (message) => {
	cy.findByTestId("component-announcer").contains(message);
});

Cypress.Commands.add("getSource", (element, value) => {
	cy.findByTestId(`${element}-${value}`);
});

Cypress.Commands.add("toggleSource", (element, value) => {
	cy.getSource(element, value).click({ force: true });
});

Cypress.Commands.add("getSourceCheckStatus", (element, value, status) => {
	cy.getSource(element, value).should("be", status);
});

Cypress.Commands.add("getBottomBarLink", (label) => {
	cy.findByTestId(label);
});

Cypress.Commands.add("navigateWithBottomBar", (label) => {
	cy.getBottomBarLink(label).click();
});
