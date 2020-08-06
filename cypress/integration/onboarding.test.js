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
import BASE_PREFERENCES_STORAGE from "../fixtures/localstorage-paperboy-persist.json";
import CATEGORIZED_SOURCES from "../fixtures/categorized-sources.json";
import SOURCE from "../selectors/choose-sources";

/**
 * @typedef {object} ICategorizedSources
 * @property {any[]} data
 */

/**
 * @typedef {ICategorizedSources} CategorizedSources
 */
const categorized = CATEGORIZED_SOURCES;

const NEWS_URL = Cypress.config().baseUrl;

describe("onboarding", () => {
	beforeEach(() => {
		cy.setupUI({});
		cy.route({
			method: "GET",
			url: "https://paperboy-proxy-server.herokuapp.com/sources",
			response: "fx:get-sources",
		}).as("getAllAvailableSources");
	});

	afterEach(() => {
		cy.clearLocalStorage();
	});

	describe("no preferences", () => {
		it("should render the welcome page by default", () => {
			// Step 1 - URL should be the root
			cy.url().should("be", Cypress.config().baseUrl);

			// Step 2 - Should have the expected text
			cy.title().should("eq", "Welcome");

			// Step 3 - Should have the expected text
			cy.getByTestId("ui-subtitle-title").contains("Welcome!");
			cy.getByTestId("ui-display-title").contains("Paperboy");
			cy.getByTestId("ui-lead-title").should("exist");
			cy.getByTestId("ui-anchor")
				.contains("Choose your favorite sources")
				.invoke("attr", "aria-disabled")
				.should("be", false);
		});

		it("should render the news page when the user has setup preferences", () => {
			// Step 1 - Mock local storage with preferences
			cy.setupUI({
				preferences: BASE_PREFERENCES_STORAGE,
			});

			// Step 2 - URL should be the root
			cy.url().should("be", NEWS_URL);
		});

		it("should render the dark mode by default", () => {
			// Step 1 - Browser/OS settings should have dark color scheme enabled
			expect(window.matchMedia("(prefers-color-scheme: dark)").matches).to.be.true;

			// Step 2 - root element should have the data-theme attr set to 'DARK'
			cy.get("html").should("have.attr", "data-theme", "DARK");
		});
	});

	describe("choose sources", () => {
		beforeEach(() => {
			cy.getByTestId("ui-anchor").click();
			cy.wait("@getAllAvailableSources");
			cy.getByTestId("ui-button").as("submit-button");
		});

		describe("render", () => {
			beforeEach(() => {
				// Step 1 - Should render the top navigation and not have it to be sticky
				cy.get("#page-top-navigation").as("pageTopNavigation");
				cy.get("@pageTopNavigation").should("be.visible");
				cy.get("@pageTopNavigation").should("not.have.class", "is-sticky");
			});

			it("should render the top header", () => {
				// Step 1 - Top navigation should have expected titles and subtitles
				cy.get("@pageTopNavigation")
					.find(".top-navigation-with-title__title")
					.should("have.text", "What do you fancy reading?");
				cy.get("@pageTopNavigation")
					.find(".top-navigation-with-title__subtitle")
					.should("have.text", "Breaking news from over 30,000 sources");
			});

			it("should have the submit button disabled by default", () => {
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("have.attr", "aria-disabled", "true")
					.and("be.disabled")
					.and("have.text", "Select at least 3 items");
			});

			it("should render the sticky top header when scrolling", () => {
				// Step 1 - Scroll 200px down the page
				cy.scrollTo(0, 200);

				// Step 2 - Verify class `is-sticky` has been added and subtitle has been hidden
				cy.get("@pageTopNavigation").should("have.class", "is-sticky");
				cy.get("@pageTopNavigation").find(".top-navigation-with-title__subtitle").should("not.be.visible");

				// Step 3 - Scroll 180px to the top (resulting in scrolled 20px)
				cy.scrollTo(0, -180);

				// Step 4 - Shoud not have class `is-sticky` and subtitle is visible
				cy.get("@pageTopNavigation").should("not.have.class", "is-sticky");
				cy.get("@pageTopNavigation").find(".top-navigation-with-title__subtitle").should("be.visible");
			});

			it("should render the Editor's suggestions", () => {
				// Step 1 - Get wrapper
				cy.getByAttr("id", "sources-editors-suggestions-section-title").as("editorsSuggestions");

				// Step 2 - Find the section title has expected text
				cy.get("@editorsSuggestions")
					.find(".section-title--text")
					.should("have.text", "Editor's Suggestions")
					.and("be.visible");

				// Step 3 - Each input is not checked
				cy.get("@editorsSuggestions")
					.get("[name='source-input']")
					.then(($input) => {
						expect($input.attr("checked")).to.be.undefined;
					});

				// Step 4 - Should have 9 cards
				// TODO: This is brittle
				cy.get("@editorsSuggestions").get("[name='source-input']").should("have.length", 9);
			});

			it("should render the sources sections", () => {
				// 1- Check that the amount of sources equals the data
				cy.getByTestId("all-sources-sections")
					.getByTestId("section-wrapper")
					.should("have.length", categorized.data.length);

				// 2- For each category
				categorized.data.forEach((section) => {
					// Check its visibility
					cy.getByAttr("title", section.name).should("be.visible");

					// Check its section heading content
					cy.getByAttr("title", section.name).find(".section-title--text").should("have.text", section.name);
					cy.getByAttr("title", section.name).find(".section-title--amount").should("have.text", section.length);

					// Check that the amount of rendered list items equals the length of the data
					cy.getByAttr("title", section.name).find(".source__item").should("have.length", section.length);
					cy.getByAttr("title", section.name)
						.find(".source__input")
						.then(($input) => {
							expect($input.attr("checked")).to.be.undefined;
						});
				});
			});
		});

		describe("pick news sources", () => {
			it("should change the copy on the submit button", () => {
				// Step 1 - Toggle CNN and verify submit button text
				cy.toggleSource(SOURCE.CARD.LABEL, "cnn").getSourceCheckStatus(SOURCE.CARD.INPUT, "cnn", "checked");
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select 2 more items");
			});

			it("should enable the submit button", () => {
				// Step 1 - Toggle CNN and verify submit button text
				cy.toggleSource(SOURCE.CARD.LABEL, "cnn").getSourceCheckStatus(SOURCE.CARD.INPUT, "cnn", "checked");
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select 2 more items");

				// Step 2 - Toggle CNN again and verify submit button text has been reset
				cy.toggleSource(SOURCE.CARD.LABEL, "cnn").getSourceCheckStatus(SOURCE.CARD.INPUT, "cnn", "unchecked");
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select at least 3 items");

				// Step 3 - Toggle BBC and verify submit button text
				cy.toggleSource(SOURCE.CARD.LABEL, "bbc-news").getSourceCheckStatus(SOURCE.CARD.INPUT, "bbc-news", "checked");
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select 2 more items");

				// Step 4 - Toggle BBC and verify submit button text
				cy.toggleSource(SOURCE.CARD.LABEL, "cnn").getSourceCheckStatus(SOURCE.CARD.INPUT, "cnn", "checked");
				cy.get("@submit-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select 1 more items");

				// Step 5 - Toggle Fox News and verify submit button has been enabled
				cy.toggleSource(SOURCE.CARD.LABEL, "fox-news").getSourceCheckStatus(SOURCE.CARD.INPUT, "cnn", "fox-news");
				cy.get("@submit-button").should("have.attr", "type", "submit").and("be.enabled").and("have.text", "Let's Go!");
			});
		});
	});
});
