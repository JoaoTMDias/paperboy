import * as React from 'react';
import { isAndroid, isBrowser, isIOS } from 'react-device-detect';
import { connect } from 'react-redux';

// Redux
import {
  setFeatureSupport,
  setOnlineStatus,
  setPlatform,
  setStandaloneStatus,
} from '../../../data/redux/actions/index.actions';

export interface IAuditProps {
  theme?: any
  isOnline: boolean
  isStandalone: boolean
  platform: string
  dispatch: any
}

export interface IAuditState {
  isOnline: boolean | null
  isStandalone: boolean
}

class Audit extends React.Component<IAuditProps, any> {
  constructor(props: IAuditProps) {
    super(props);

    this.state = {
      isOnline: null,
      isStandalone: false,
    };
  }

  componentDidMount() {
    this.handleNetworkAudit();
    this.handleDeviceAudit();
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
    window.addEventListener('online', event => this.setOnlineStatus(true));
    window.addEventListener('offline', event => this.setOnlineStatus(false));
    this.setOnlineStatus(navigator.onLine);
  }

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
   * @description Checks the OS of the device
   * @date 2019-01-05
   * @memberof Audit
   */
  setOSPlatform() {
    const android: string = 'android';
    const iOS: string = 'ios';
    let platform: string = 'unknown';

    if (isIOS) {
      platform = iOS;
    } else if (isAndroid) {
      platform = android;
    } else if (isBrowser) {
      platform = 'desktop';
    }

    this.props.dispatch(setPlatform(platform));
  }

  /**
   * @description
   * @date 2019-01-05
   * @memberof Audit
   */
  setFeatureSupport() {
    const supportsGeolocation: boolean = !!(navigator && navigator.geolocation);
    const supportsBatteryInformation: boolean = 'getBattery' in window.navigator;
    let supportsNetworkInformation;

    if (window.navigator.connection) {
      if ('effectiveType' in window.navigator.connection || 'type' in window.navigator.connection) {
        supportsNetworkInformation = true;
      }
    }
    const supportsWebNotifications: boolean = 'Notification' in window;

    const features = {
      geoLocation: supportsGeolocation,
      batteryStatus: supportsBatteryInformation,
      networkInformation: supportsNetworkInformation,
      notifications: supportsWebNotifications,
    };

    this.props.dispatch(setFeatureSupport(features));
  }

  /**
   * @description Check if is standalone mode (added to homescreen)
   * @date 2019-01-05
   * @memberof Audit
   */
  setStandaloneStatus() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const isInWebAppiOS = window.navigator.standalone === true;
      const isInWebAppChrome = window.matchMedia('(display-mode: standalone)').matches;
      const status: boolean = !!(isInWebAppiOS || isInWebAppChrome);

      this.props.dispatch(setStandaloneStatus(status));
    }
  }

  /**
   * @description
   * @memberof Audit
   */
  setOnlineStatus = (status: boolean) => {
    if (status) {
      this.props.dispatch(setOnlineStatus(status));
    }
  }

  public render() {
    const {
      children, isOnline, isStandalone, platform,
    } = this.props;

    return (
      <div
        id="device-audit"
        data-online={`${isOnline}`}
        data-standalone={`${isStandalone}`}
        data-platform={`${platform}`}
      >
        {children}
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('online', () => this.setOnlineStatus(true));
    window.removeEventListener('offline', () => this.setOnlineStatus(false));
  }
}

const mapStateToProps = (state: any) => ({
  isOnline: state.general.isOnline,
  isStandalone: state.general.isStandalone,
  platform: state.general.platform,
});

export default connect(mapStateToProps)(Audit);
