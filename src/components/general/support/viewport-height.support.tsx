import * as React from 'react';
import { connect } from 'react-redux';

import { IGlobalStoreState } from '../../../data/interfaces/index.interfaces';
import { debounce } from '../../../helpers/index.helpers';

// Interfaces
export interface IViewportHeightProps {
	platform: string;
}

export interface IViewportHeightState {
	viewportUnit: number;
	viewportHeight: number;
}

class ViewportHeight extends React.Component<
    IViewportHeightProps,
    IViewportHeightState
    > {
	constructor (props: IViewportHeightProps) {
		super(props);

		this.getDevicePlatform = this.getDevicePlatform.bind(this);

		this.state = {
			viewportUnit: 1,
			viewportHeight: 100,
		};
	}

	componentDidMount() {
		this.getDevicePlatform();

		window.addEventListener('resize', () => {
			debounce(this.getDevicePlatform);
		});
	}

	/**
	 * @description
	 * @date 2019-01-29
	 * @param {IViewportHeightProps} nextProps
	 * @param {IViewportHeightState} nexState
	 * @returns {boolean}
	 * @memberof ViewportHeight
	 */
	shouldComponentUpdate(
		nextProps: IViewportHeightProps,
		nextState: IViewportHeightState,
	): boolean {
		const { platform } = this.props;
		const { viewportUnit, viewportHeight } = this.state;

		if (
			nextProps.platform !== platform ||
            (nextState && nextState.viewportUnit !== viewportUnit) ||
            (nextState && nextState.viewportHeight !== viewportHeight)
		) {
			return true;
		}

		return false;
	}

	/**
	 * @description When the component updates
	 * @author João Dias
	 * @date 2019-04-11
	 * @param {IViewportHeightProps} nextProps
	 * @returns {boolean}
	 * @memberof ViewportHeight
	 */
	componentDidUpdate(nextProps: IViewportHeightProps): boolean {
		const { platform } = this.props;

		if (nextProps.platform !== platform) {
			this.getDevicePlatform();
			return true;
		}

		return false;
	}

	componentWillUnmount() {
		window.removeEventListener('resize', () => {
			debounce(this.getDevicePlatform);
		});
	}

	/**
	 * @description Checks the OS of the device
	 * @date 2019-01-05
	 * @memberof ViewportHeight
	 */
	getDevicePlatform() {
		const { platform } = this.props;
		const iOS = 'ios';

		switch (platform) {
			case iOS:
				this.handleFixViewportHeightUnits();
				break;

			default:
				break;
		}
	}

	/**
	 * @description This method asserts the viewport height by javascript and
	 * updates a custom property to fix the issue on Safari for iOS.
	 * Based on the solution found on:
	 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#article-header-id-0
	 * @author João Dias
	 * @date 2019-04-11
	 * @memberof ViewportHeight
	 */
	handleFixViewportHeightUnits() {
		const vHeight = window.innerHeight;
		const vUnit = vHeight * 0.01;

		this.setState(
			{
				viewportUnit: vUnit,
				viewportHeight: vHeight,
			},
			() => {
				const { viewportUnit, viewportHeight } = this.state;

				if (viewportUnit && viewportHeight) {
					document.documentElement.style.setProperty(
						'--viewport-height-unit',
						`${viewportUnit}px`,
					);
					document.documentElement.style.setProperty(
						'--viewport-height',
						`${viewportHeight}px`,
					);
				}
			},
		);
	}

	render(): JSX.Element {
		const { viewportUnit, viewportHeight } = this.state;

		return (
			<aside
				id="device-viewport-height"
				className="show-for-screen-readers"
				data-viewport-height-unit={`${viewportUnit}`}
				data-viewport-height={`${viewportHeight}`}
				tabIndex={-1}
			/>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	platform: state.general.platform,
});

export default connect(mapStateToProps)(ViewportHeight);
