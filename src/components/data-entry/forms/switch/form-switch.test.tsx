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
import { EAppThemeType } from "data/interfaces/index";
import FormSwitch from "./form-switch.component";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<FormSwitch />", () => {
	beforeEach(cleanup);

	it("is off at first", () => {
		const defaultValue = EAppThemeType.DARK;
		const value = null;
		const isChecked = value === defaultValue;
		const onChangeHandler = jest.fn();

		const inputId = "toggle";
		const wrapperTestId = "form-switch";

		const { getByTestId } = render(
			<FormSwitch id={inputId} value={defaultValue} checked={isChecked} onChange={onChangeHandler} />,
		);

		const wrapper = getByTestId(wrapperTestId);

		expect(wrapper.getAttribute("aria-checked")).toBe("false");
	});
});
