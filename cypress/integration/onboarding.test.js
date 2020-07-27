/// <reference types="cypress" />
/// <reference types="../support/index" />
import BASE_PREFERENCES_STORAGE from "../fixtures/localstorage-paperboy-persist.json";
import CATEGORIZED_SOURCES from "../fixtures/categorized-sources.json";

/**
 * @typedef {object} ICategorizedSources
 * @property {any[]} data
 */

/**
 * @typedef {ICategorizedSources} CategorizedSources
 */
const categorized = CATEGORIZED_SOURCES;

const NEWS_URL = `${Cypress.config().baseUrl}/news`;

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
			cy.url().should("be", Cypress.config().baseUrl);
			cy.getByTestId("ui-subtitle-title").contains("Welcome!");
			cy.getByTestId("ui-display-title").contains("Paperboy");
			cy.getByTestId("ui-lead-title").should("exist");
			cy.getByTestId("ui-anchor")
				.contains("Choose your favorite sources")
				.invoke("attr", "aria-disabled")
				.should("be", false);
			cy.title().should("eq", "Welcome");
		});

		it("should render the news page when the user has setup preferences", () => {
			cy.setupUI({
				preferences: BASE_PREFERENCES_STORAGE,
			});
			cy.url().should("be", NEWS_URL);
		});

		it("should render the dark mode by default", () => {
			expect(window.matchMedia("(prefers-color-scheme: dark)").matches).to.be.true;
			cy.get("html").should("have.attr", "data-theme", "DARK");
		});
	});

	describe("choose sources", () => {
		beforeEach(() => {
			cy.getByTestId("ui-anchor").click();
			cy.wait("@getAllAvailableSources");
		});

		describe("render", () => {
			beforeEach(() => {
				cy.get("#page-top-navigation").as("pageTopNavigation");
				cy.get("@pageTopNavigation").should("be.visible");
				cy.get("@pageTopNavigation").should("not.have.class", "is-sticky");
			});

			it("should render the top header", () => {
				cy.get("@pageTopNavigation")
					.find(".top-navigation-with-title__title")
					.should("have.text", "What do you fancy reading?");
				cy.get("@pageTopNavigation")
					.find(".top-navigation-with-title__subtitle")
					.should("have.text", "Breaking news from over 30,000 sources");
			});

			it("should have the submit button disabled by default", () => {
				cy.getByTestId("ui-button")
					.should("have.attr", "type", "submit")
					.and("be.disabled")
					.and("have.text", "Select at least 3 items");
			});

			it("should render the sticky top header when scrolling", () => {
				cy.scrollTo(0, 200);
				cy.get("@pageTopNavigation").should("have.class", "is-sticky");
				cy.get("@pageTopNavigation").find(".top-navigation-with-title__subtitle").should("not.be.visible");
				cy.scrollTo(0, -180);
				cy.get("@pageTopNavigation").should("not.have.class", "is-sticky");
			});

			it("should render the Editor's suggestions", () => {
				cy.getByAttr("id", "sources-editors-suggestions-section-title").as("editorsSuggestions");
				cy.get("@editorsSuggestions")
					.find(".section-title--text")
					.should("have.text", "Editor's Suggestions")
					.and("be.visible");
				cy.get("@editorsSuggestions")
					.get("[name='source-input']")
					.then(($input) => {
						expect($input.attr("checked")).to.be.undefined;
					});
				cy.get("@editorsSuggestions").get("[name='source-input']").should("have.length", 9);
			});

			it("should render the sources sections", () => {
				// 1- Check that the amount of sources equals the data
				cy.getByTestId("all-sources-sections")
					.getByTestId("section-wrapper")
					.should("have.length", categorized.data.length);

				// For each category
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
	});
});
