import React, { useEffect, useRef } from "react";
import { useNetwork } from "react-use";
import { isAndroid, isIOS } from "react-device-detect";
import { connect } from "react-redux";
import { IGlobalStoreState, FeatureSupport } from "data/interfaces/index";
import { setFeatureSupport, setOnlineStatus, setPlatform, setStandaloneStatus } from "data/redux/actions/index.actions";
import { IAuditProps } from "./types";
import { Dispatch, bindActionCreators } from 'redux';

const Audit: React.FunctionComponent<IAuditProps> = ({
	hasAudited,
	isOnline,
	isStandalone,
	actions,
	platform
}) => {
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
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			const isInWebAppiOS = WindowNavigator.standalone === true;
			const isInWebAppChrome = window.matchMedia("(display-mode: standalone)").matches;
			const status = !!(isInWebAppiOS || isInWebAppChrome);

			actions.setStandaloneStatus(status)
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

		actions.setFeatureSupport(features);
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

		actions.setPlatform(platform);
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
			actions.setOnlineStatus(online);
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
}

function mapStateToProps(state: IGlobalStoreState) {
	return {
		hasAudited: state.general.hasAudited,
		isOnline: state.general.isOnline,
		isStandalone: state.general.isStandalone,
		platform: state.general.platform,
	}
};

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(
			{
				setStandaloneStatus,
				setOnlineStatus,
				setPlatform,
				setFeatureSupport,
			},
			dispatch,
		),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Audit);
