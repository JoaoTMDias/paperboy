/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import getUrl from "../get-url";

describe("Get url function", () => {
	test("returns me passed url", () => {
		const url = getUrl("string");
		expect(url).toBe("string");
	});

	test("returns me current url", () => {
		window = Object.create(window);
		Object.defineProperty(window, "location", {
			value: {
				href: "string",
			},
		});
		const url = getUrl("string");
		expect(url).toBe("string");
	});

	test("returns me canonical url", () => {
		document.body.innerHTML = `
      <link rel="canonical" href="string" />
    `;
		const url = getUrl("string");
		expect(url).toBe("string");
	});
});
