/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />
/// <reference types="../support/index" />
import BASE_PREFERENCES_NEWS from "../fixtures/localstorage-paperboy-news.json";

const NEWS_URL = Cypress.config().baseUrl;

describe("news", () => {
	beforeEach(() => {
		cy.setupUI({
			preferences: BASE_PREFERENCES_NEWS,
		});
		cy.route(
			"GET",
			"https://paperboy-proxy-server.herokuapp.com/top-headlines?sources=**",
			"fx:get-all-latest-news",
		).as("getAllLatestNews");
		cy.url().should("be", NEWS_URL);
	});

	describe("render", () => {
		beforeEach(() => {
			cy.wait("@getAllLatestNews");
		});

		it("should render the news page", () => {
			// 1. News tab should be active
			cy.getBottomBarLink("tab-link-news").should("exist").and("have.attr", "aria-current", "page");

			// 2. Latest tab should be active
			cy.findAllByRole("tab")
				.eq(0)
				.should("exist")
				.and("have.class", "tab-list__tab--selected")
				.and("have.text", "latest");
		});
	});
});
