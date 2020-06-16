import * as React from "react";
import { isAndroid, isBrowser, isIOS } from "react-device-detect";
import { connect } from "react-redux";
import { IGlobalStoreState, FeatureSupport } from "data/interfaces/index";
import { setFeatureSupport, setOnlineStatus, setPlatform, setStandaloneStatus } from "data/redux/actions/index.actions";
import { IAuditProps, IAuditState } from "./types";

class Audit extends React.Component<IAuditProps, any> {
	static defaultProps = {
		hasAudited: false,
	};

	constructor (props: IAuditProps) {
		super(props);

		this.state = {
			isOnline: null,
			isStandalone: false,
		};
	}

	componentDidMount() {
		const { hasAudited } = this.props;

		if (hasAudited === false) {
			this.handleNetworkAudit();
			this.handleDeviceAudit();
		}
	}

	/**
	 * @description
	 * @date 2019-01-29
	 * @param {IAuditProps} nextProps
	 * @param {IAuditState} nexState
	 * @returns {boolean}
	 * @memberof Audit
	 */
	shouldComponentUpdate(nextProps: IAuditProps, nexState: IAuditState): boolean {
		const { hasAudited } = this.props;
		if (nextProps.hasAudited !== hasAudited) {
			return true;
		}

		return false;
	}

	/**
	 * @description
	 * @date 2019-01-29
	 * @param {IAuditProps} nextProps
	 * @param {IAuditState} nexState
	 * @memberof Audit
	 */
	componentDidUpdate(nextProps: IAuditProps, nexState: IAuditState): void {
		const { hasAudited } = this.props;
		if (nextProps.hasAudited === hasAudited && hasAudited === false) {
			this.handleNetworkAudit();
			this.handleDeviceAudit();
		}
	}

	componentWillUnmount() {
		window.removeEventListener("online", () => this.setOnlineStatus(true));
		window.removeEventListener("offline", () => this.setOnlineStatus(false));
	}

	/**
	 * @description Check if is standalone mode (added to homescreen)
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	setStandaloneStatus() {
		const { dispatch } = this.props;
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			const WindowNavigator: any = window.navigator;
			const isInWebAppiOS = WindowNavigator.standalone === true;
			const isInWebAppChrome = window.matchMedia("(display-mode: standalone)").matches;
			const status = !!(isInWebAppiOS || isInWebAppChrome);
			dispatch(setStandaloneStatus(status));
		}
	}

	/**
	 * @description
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	setFeatureSupport() {
		const { dispatch } = this.props;
		const supportsGeolocation = !!(navigator && navigator.geolocation);
		const supportsBatteryInformation = "getBattery" in window.navigator;
		let supportsNetworkInformation = false;
		const WindowNavigator: any = window.navigator;

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

		dispatch(setFeatureSupport(features));
	}

	/**
	 * @description Checks the OS of the device
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	setOSPlatform() {
		const { dispatch } = this.props;
		const android = "android";
		const iOS = "ios";
		let platform = "unknown";

		if (isIOS) {
			platform = iOS;
		} else if (isAndroid) {
			platform = android;
		} else if (isBrowser) {
			platform = "desktop";
		}

		dispatch(setPlatform(platform));
	}

	/**
	 * @description
	 * @memberof Audit
	 */
	setOnlineStatus = (status: boolean) => {
		const { dispatch } = this.props;
		if (status) {
			dispatch(setOnlineStatus(status));
		}
	};

	/**
	 * @description
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	handleDeviceAudit() {
		this.setOSPlatform();
		this.setStandaloneStatus();
		this.setFeatureSupport();
	}

	/**
	 * @description Performs a network audit for these conditions
	 * Is the device online or offline?
	 *
	 *
	 * @date 2019-01-05
	 * @memberof Audit
	 */
	handleNetworkAudit() {
		window.addEventListener("online", (event) => this.setOnlineStatus(true));
		window.addEventListener("offline", (event) => this.setOnlineStatus(false));
		this.setOnlineStatus(navigator.onLine);
	}

	public render() {
		const { isOnline, isStandalone, platform } = this.props;

		return (
			<aside
				id="device-audit"
				className="sr-only"
				data-online={isOnline}
				data-standalone={isStandalone}
				data-platform={platform}
				tabIndex={-1}
			/>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	hasAudited: state.general.hasAudited,
	isOnline: state.general.isOnline,
	isStandalone: state.general.isStandalone,
	platform: state.general.platform,
});

export default connect(mapStateToProps)(Audit);
