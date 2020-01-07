// Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * @description Portal description
 * @author  João Dias
 * @date  07/January/2019 at 11:37
 * @extends {React.FC}
 */
class Portal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
		this.state = {
			root: null,
		};
	}

	componentDidMount() {
		const portalRoot = document.getElementById('portal');
		this.setState(
			{
				root: portalRoot,
			},
			() => {
				this.state.root.appendChild(this.el);
			},
		);
	}

	componentWillUnmount() {
		this.state.root.removeChild(this.el);
	}

	render() {
		const { children } = this.props;
		return ReactDOM.createPortal(children, this.el);
	}
}

export default Portal;
