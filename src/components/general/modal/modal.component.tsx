import * as React from 'react';
import styled from 'styled-components';

import { Portal, UIDialog } from '../../index';

interface IModalProps {
	theme?: any;
	backgroundOpacity?: number;
	align?: 'top' | 'middle' | 'bottom';
	delay?: number | null;
}

interface IModalState {
	isModalOpen: boolean;
}

class Modal extends React.PureComponent<IModalProps, IModalState> {
	static defaultProps = {
		backgroundOpacity: 0.3,
		align: 'bottom',
		delay: null,
	};

	public timer: any = null;

	constructor(props: IModalProps) {
		super(props);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		this.state = {
			isModalOpen: false,
		};
	}

	/**
	 * @description When the component mounts, sets a 15sec timeout and then shows.
	 * @date 2019-01-06
	 * @memberof Modal
	 */
	componentDidMount() {
		const { delay } = this.props;

		if (delay && delay > 0) {
			this.timer = setTimeout(() => this.handleOpenModal(), delay);
		} else {
			this.handleOpenModal();
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleOpenModal() {
		this.setState({
			isModalOpen: true,
		});
	}

	/**
	 * @description Closes the modal
	 * @date 2019-01-06
	 * @memberof Modal
	 */
	handleCloseModal() {
		this.setState({
			isModalOpen: false,
		});
	}

	public render() {
		const { children, backgroundOpacity, align, delay } = this.props;
		const { isModalOpen } = this.state;

		if (isModalOpen) {
			return (
				<Portal>
					<ModalWrapper
						backgroundOpacity={backgroundOpacity}
						align={align}
						delay={delay}
						onClick={this.handleCloseModal}
						tabIndex={0}
					>
						<UIDialog onClick={this.handleCloseModal}>
							{children}
						</UIDialog>
					</ModalWrapper>
				</Portal>
			);
		}
		return null;
	}
}

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 103;
	overflow: hidden;
	background-color: ${(props: IModalProps) =>
		`rgba(0,0,0,${props.backgroundOpacity})`};

	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: ${(props: IModalProps) => {
		switch (props.align) {
			case 'top':
				return 'flex-start';

			case 'middle':
				return 'center';

			case 'bottom':
				return 'flex-end';

			default:
				return 'flex-end';
		}
	}};
`;

export default Modal;
