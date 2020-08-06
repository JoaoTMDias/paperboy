/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import logger from "js-logger";

export type logType = "log" | "error" | "warning" | "info" | "time" | "timeEnd";

export interface ILoggerOptions {
	type: logType;
	message?: string;
	showOnProduction?: boolean;
}

export const Logger = ({ type, message, showOnProduction }: ILoggerOptions): string | null => {
	if (showOnProduction === false) {
		return null;
	}

	let style = `
							color: #ffffff;
							background-color: #346aea;
							font-weight: bold;
							font-size: 9px;
							text-transform: uppercase;
							letter-spacing: 3px;
							font-family: 'Dank Mono', 'Fira Code', 'Lucida Console', monospace
					`;

	switch (type) {
		case "error":
			style = `
							color: white;
							background-color: #e60000;
							font-weight: bold;
							font-size: 9px;
							text-transform: uppercase;
							letter-spacing: 3px;
							font-family: 'Dank Mono', 'Fira Code', 'Lucida Console', monospace
					`;
			logger.error("%c 🚨 Error ", style, message);
			break;

		case "warning":
			style = `
							color: #111111;
							background-color: #eb9800;
							font-weight: bold;
							font-size: 9px;
							text-transform: uppercase;
							letter-spacing: 3px;
							font-family: 'Dank Mono', 'Fira Code', 'Lucida Console', monospace
					`;
			logger.warn("%c ⚠ Warning ", style, message);
			break;

		case "info":
			style = `
							color: #ffffff;
							background-color: #34ea58;
							font-weight: bold;
							font-size: 9px;
							text-transform: uppercase;
							letter-spacing: 3px;
							font-family: 'Dank Mono', 'Fira Code', 'Lucida Console', monospace
					`;
			logger.log("%c ℹ Info ", style, message);
			break;

		case "time":
			logger.time("⏱ Timer");
			break;

		case "timeEnd":
			logger.timeEnd("⏱ Timer");
			break;

		case "log":
		case undefined:
		default:
			logger.log("%c 📄 Log ", style, message);
			break;
	}

	return type;
};

Logger.defaultProps = {
	type: "log",
	showOnProduction: false,
};

export default Logger;
