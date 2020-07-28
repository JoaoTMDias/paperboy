import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import isNil from "lodash/isNil";
import { useNetwork } from "react-use";
import { isAndroid, isIOS } from "react-device-detect";
import { FeatureSupport } from "data/interfaces/index";
import AuditContext from "src/containers/audit/context";

const Audit: FunctionComponent = () => {
	const {
		hasAudited,
		isOnline,
		isStandalone,
		platform,
		setStandaloneStatus,
		setFeatureSupport,
		setPlatform,
		setOnlineStatus,
	} = useContext(AuditContext);
	const { current: WindowNavigator } = useRef(window.navigator as any);
	const { online } = useNetwork();

	useEffect(() => {
		if (!hasAudited) {
			handlePlatform();
			handleStandaloneStatus();
			handleFeatureSupport();
		}
	}, [hasAudited]);

	useEffect(() => {
		handleNetworkAudit();
	}, [online]);

	/**
	 * @description Check if is standalone mode (added to homescreen)
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	function handleStandaloneStatus() {
		if (!isNil(window) && !isNil(document)) {
			const isInWebAppiOS = WindowNavigator.standalone === true;
			const isInWebAppChrome = window.matchMedia("(display-mode: standalone)").matches;
			const status = !!(isInWebAppiOS || isInWebAppChrome);

			setStandaloneStatus(status);
		}
	}

	/**
	 * @description
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	function handleFeatureSupport() {
		const supportsGeolocation = !!(navigator && navigator.geolocation);
		const supportsBatteryInformation = "getBattery" in window.navigator;
		let supportsNetworkInformation = false;

		if (WindowNavigator && WindowNavigator.connection) {
			if ("effectiveType" in WindowNavigator.connection || "type" in WindowNavigator.connection) {
				supportsNetworkInformation = true;
			}
		}

		const supportsWebNotifications: boolean = "Notification" in window;

		const features: FeatureSupport = {
			hasAudited: true,
			supports: {
				geoLocation: supportsGeolocation,
				batteryStatus: supportsBatteryInformation,
				networkInformation: supportsNetworkInformation,
				notifications: supportsWebNotifications,
			},
		};

		setFeatureSupport(features);
	}

	/**
	 * @description Checks the OS of the device
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	function handlePlatform() {
		let platform = "desktop";

		if (isIOS) {
			platform = "ios";
		}

		if (isAndroid) {
			platform = "android";
		}

		setPlatform(platform);
	}

	/**
	 * @description Performs a network audit for these conditions
	 * Is the device online or offline?
	 *
	 *
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	function handleNetworkAudit() {
		if (online !== undefined && online !== null) {
			setOnlineStatus(online);
		}
	}

	return (
		<div
			id="device-audit"
			data-testid="device-audit"
			className="sr-only"
			data-online={isOnline}
			data-standalone={isStandalone}
			data-platform={platform}
			tabIndex={-1}
			hidden
		/>
	);
};

export default Audit;
