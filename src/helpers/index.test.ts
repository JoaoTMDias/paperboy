/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { Logger } from "./index.helpers";
import { logType } from "./logger.helper";

describe("Helpers", () => {
	describe("Logger", () => {
		/**
		 * Tests the console output for the Logger function
		 *
		 * @param {logType} type
		 * @param {string} [message="default message"]
		 * @param {boolean} [showOnProduction]
		 * @returns
		 */
		function testConsole(type: logType, message = "default message", showOnProduction?: boolean) {
			const result = Logger({
				type,
				message,
				showOnProduction,
			});

			return {
				result,
			};
		}

		it("should return null if it isn't supposed to show on production", () => {
			const type: logType = "log";
			const { result } = testConsole(type, "custom message", false);

			expect(result).toBeNull();
		});

		it("should return a console log (default)", () => {
			const type: logType = "log";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});

		it("should return a console info", () => {
			const type: logType = "info";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});

		it("should return a console warn", () => {
			const type: logType = "warning";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});

		it("should return a console error", () => {
			const type: logType = "error";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});

		it("should return a console time", () => {
			const type: logType = "time";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});

		it("should return a console timeEnd", () => {
			const type: logType = "timeEnd";
			const { result } = testConsole(type);

			expect(result).toBe(type);
		});
	});
});
