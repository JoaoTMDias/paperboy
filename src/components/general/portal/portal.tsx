// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { IPortalState } from "./types";

/**
 * @description Portal description

 * @date  07/January/2019 at 11:37
 * @extends {React.FC}
 */
class Portal extends React.Component<{}, IPortalState> {
	private element: HTMLDivElement | null = null;

	constructor(props: {}) {
		super(props);

		this.element = document.createElement("div");

		this.state = {
			root: null,
		};
	}

	componentDidMount() {
		const portalRoot = document.getElementById("portal");

		if (portalRoot) {
			this.setState(
				{
					root: portalRoot,
				},
				() => {
					const { root } = this.state;

					if (root && this.element) {
						root.appendChild(this.element);
					}
				},
			);
		}
	}

	componentWillUnmount() {
		const { root } = this.state;

		if (root && this.element) {
			root.removeChild(this.element);
		}
	}

	render() {
		const { children } = this.props;

		if (this.element) {
			return ReactDOM.createPortal(children, this.element);
		}

		return null;
	}
}

export default Portal;
