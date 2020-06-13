import BASE_PREFERENCES_STORAGE from "../fixtures/localstorage-paperboy-persist.json";


const NEWS_URL = `${Cypress.config().baseUrl}/news`;

describe("homepage", () => {
	describe("no preferences", () => {
		it("should render the welcome page by default", () => {
			cy.setupUI({});
			cy.url().should("be", Cypress.config().baseUrl);
			cy.getByTestId("ui-subtitle-title").contains("This is Paperboy");
			cy.getByTestId("ui-display-title").contains("Information is Power");
			cy.getByTestId("ui-lead-title").should("exist");
			cy.getByTestId("ui-anchor")
				.contains("Choose your favorite sources")
				.invoke("attr", "aria-disabled")
				.should("be", false);
			cy.title().should("eq", "Start page");
		});

		it("should render the news page when the user has setup preferences", () => {
			cy.setupUI({
				preferences: BASE_PREFERENCES_STORAGE
			});
			cy.url().should("be", NEWS_URL);
		});
	});
});
