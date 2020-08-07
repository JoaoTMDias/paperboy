/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
		getByAttr(attribute: string, value: string): Chainable<any>;
		getAnnouncerText(message: string): Chainable<any>;
		mockSetupPreferences(): Chainable<any>;
		getSource(element: string, value: string): Chainable<any>;
		getSourceCheckStatus(element: string, value: string, status: "checked" | "unchecked"): Chainable<any>;
		toggleSource(element: string, value: string): Chainable<any>;
		getBottomBarLink(label: string): Chainable<any>;
		navigateWithBottomBar(label: string): Chainable<any>;
	}
}
