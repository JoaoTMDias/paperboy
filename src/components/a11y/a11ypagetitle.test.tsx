import * as React from "react";
import { render, cleanup } from "@testing-library/react";

import A11yPageTitle from "./a11ypagetitle.component";

afterEach(cleanup);

describe("<A11yPageTitle />", () => {
	it("renders the title", () => {
		const testTitle = "Accessible Page Title";
		const testId = "a11y-page-title";
		const { getByTestId } = render(
			<div>
				<A11yPageTitle title={testTitle} />
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toMatch(`Page Title: ${testTitle}`);
	});
});
