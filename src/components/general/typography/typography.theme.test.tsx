/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import * as React from "react";
import { render, cleanup } from "@testing-library/react";

import { UIDisplay, UILead, UISubtitle } from "./typography.theme";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<Typography.Theme />", () => {
	beforeEach(cleanup);

	it("renders the UI Display title", () => {
		const testId = "ui-display-title";
		const dummyTitle = "Dummy Title";
		const { getByTestId } = render(
			<div>
				<UIDisplay text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});

	it("renders the UI Lead title", () => {
		const testId = "ui-lead-title";
		const dummyTitle = "Dummy Title";
		const { getByTestId } = render(
			<div>
				<UILead text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});

	it("renders the UI Subtitle title", () => {
		const testId = "ui-subtitle-title";
		const dummyTitle = "Dummy Title";
		const { getByTestId } = render(
			<div>
				<UISubtitle text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});
});
