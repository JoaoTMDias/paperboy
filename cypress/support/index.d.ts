/// <reference types="cypress" />

interface IBasePreferences {
	preferences: string;
	_persist: string;
}

interface ISetupUI {
	url?: string;
	viewport?: Cypress.ViewportPreset;
	preferences?: IBasePreferences;
}

declare namespace Cypress {
	interface Chainable<Subject> {
		setupUI(params: ISetupUI): Chainable<any>;
		getByTestId(id: string): Chainable<any>;
		getByAttr(attribute: string, value: string): Chainable<any>;
		getAnnouncerText(message: string): Chainable<any>;
		mockSetupPreferences(): Chainable<any>;
	}
}
