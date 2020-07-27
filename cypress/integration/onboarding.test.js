/// <reference types="cypress" />
/// <reference types="../support/index" />
import BASE_PREFERENCES_STORAGE from "../fixtures/localstorage-paperboy-persist.json";

const NEWS_URL = `${Cypress.config().baseUrl}/news`;

describe("onboarding", () => {
	beforeEach(() => {
		cy.setupUI({});
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

			it("should render the sticky top header when scrolling", () => {
				cy.scrollTo(0, 200);
				cy.get("@pageTopNavigation").should("have.class", "is-sticky");
				cy.get("@pageTopNavigation").find(".top-navigation-with-title__subtitle").should("not.be.visible");
				cy.scrollTo(0, -180);
				cy.get("@pageTopNavigation").should("not.have.class", "is-sticky");
			});
		});
	});
});
