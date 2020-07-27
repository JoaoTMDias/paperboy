/// <reference types="cypress" />

import INITIAL_STORAGE from "../fixtures/localstorage-paperboy-initial.json";

Cypress.Commands.add(
	"setupUI",
	({ url = Cypress.config().baseUrl, forceDarkMode = false, viewport = "iphone-6", preferences = undefined }) => {
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

		if (forceDarkMode) {
			cy.log("4a-Setting mocked dark mode preferences in local storage");
			window.localStorage.setItem("persist:paperboy-persist", JSON.stringify(INITIAL_STORAGE));
		}

		if (parameters.preferences) {
			cy.log("4b-Setting mocked preferences in local storage");
			window.localStorage.setItem("persist:paperboy-persist", JSON.stringify(parameters.preferences));
		}

		cy.log("5-Ending setup");
	},
);

Cypress.Commands.add("getByTestId", (id) => {
	cy.get(`[data-testid="${id}"]`);
});

Cypress.Commands.add("getByAttr", (attribute, value) => {
	cy.get(`[${attribute}="${value}"]`);
});

Cypress.Commands.add("getAnnouncerText", (message) => {
	cy.getByTestId("component-announcer").contains(message);
});

Cypress.Commands.add("forceDarkMode", () => {
	window.localStorage.setItem("persist:paperboy-persist", JSON.stringify(INITIAL_STORAGE));
	Cypress.$("html").attr("data-theme", "DARK");
	cy.get("html").should("have.attr", "data-theme", "DARK");
});
