/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useState, useEffect, useContext, useCallback } from "react";
import { debounce } from "helpers/index.helpers";
import AuditContext from "src/containers/audit/context";

// Interfaces
export interface IViewportHeightProps {
	platform: string;
}

export interface IViewportHeightState {
	viewportUnit: number;
	viewportHeight: number;
}

const ViewportHeight: FunctionComponent = () => {
	const { platform } = useContext(AuditContext);
	const [viewportUnit, setViewportUnit] = useState(1);
	const [viewportHeight, setViewportHeight] = useState(100);

	/**
	 * @description This method asserts the viewport height by javascript and
	 * updates a custom property to fix the issue on Safari for iOS.
	 * Based on the solution found on:
	 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#article-header-id-0
	 * @author João Dias
	 * @date 2019-04-11
	 * @memberof ViewportHeight
	 */
	const handleFixViewportHeightUnits = useCallback(
		(platform: string) => {
			const vHeight = window.innerHeight;
			const vUnit = vHeight * 0.01;
			const iOS = "ios";

			setViewportUnit(vUnit);
			setViewportHeight(vHeight);

			document.documentElement.style.setProperty("--viewport-height-unitless", `${viewportHeight}`);

			if (platform && platform === iOS) {
				document.documentElement.style.setProperty("--viewport-height-unit", `${viewportUnit}px`);
				document.documentElement.style.setProperty("--viewport-height", `${viewportHeight}px`);
			}
		},
		[setViewportUnit, setViewportHeight, platform],
	);

	/**
	 * @description Checks the OS of the device
	 * @date 2019-01-05
	 * @memberof ViewportHeight
	 */
	const getDevicePlatform = useCallback(() => {
		handleFixViewportHeightUnits(platform);
	}, [handleFixViewportHeightUnits, platform]);

	useEffect(() => {
		getDevicePlatform();
		window.addEventListener("resize", () => {
			debounce(getDevicePlatform);
		});

		return () => {
			window.removeEventListener("resize", () => {
				debounce(getDevicePlatform);
			});
		};
	}, [platform, getDevicePlatform]);

	return (
		<div
			id="device-viewport-height"
			className="sr-only"
			data-viewport-height-unit={`${viewportUnit}`}
			data-viewport-height={`${viewportHeight}`}
			aria-hidden
			tabIndex={-1}
		/>
	);
};

export default ViewportHeight;
