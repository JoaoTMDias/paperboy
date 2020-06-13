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
		cy.injectAxe()
		cy.log("4-Defining Viewport");
		cy.viewport(parameters.viewport);

		if (parameters.preferences) {
			cy.log("4a-Setting mocked preferences in local storage");
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
