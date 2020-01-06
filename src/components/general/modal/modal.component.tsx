import * as React from "react";
import styled from "styled-components";

import { Portal, UIDialog } from "../../index.components";

interface IModalProps {
	theme?: any;
	isModalOpen: boolean;
	backgroundOpacity?: number;
	align?: "top" | "middle" | "bottom";
	delay?: number | null;
	handleClickToCloseModal?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

interface IModalState {
	shouldOpenModal: boolean;
}

class Modal extends React.PureComponent<IModalProps, IModalState> {
	static defaultProps = {
		backgroundOpacity: 0.3,
		align: "bottom",
		delay: null,
	};

	public timer: any = null;

	constructor(props: IModalProps) {
		super(props);
		this.state = {
			shouldOpenModal: false,
		};
	}

	/**
	 * @description When the component mounts, sets a 15sec timeout and then shows.
	 * @date 2019-01-06
	 * @memberof Modal
	 */
	componentDidMount() {
		const { delay, isModalOpen } = this.props;

		if (delay && delay > 0) {
			this.timer = setTimeout(() => this.handleOpenModal(isModalOpen), delay);
		} else {
			this.handleOpenModal(isModalOpen);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	handleOnClickOnBackground(event) {
		const { handleClickToCloseModal } = this.props;

		event.preventDefault();

		if (handleClickToCloseModal) {
			handleClickToCloseModal(event);
		}
	}

	handleOpenModal(status: boolean) {
		if (status) {
			this.setState({
				shouldOpenModal: true,
			});
		}
	}

	public render() {
		const { children, backgroundOpacity, align, delay } = this.props;

		const { shouldOpenModal } = this.state;

		if (shouldOpenModal) {
			return (
				<Portal>
					<ModalWrapper
						backgroundOpacity={backgroundOpacity}
						align={align}
						delay={delay}
						onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => this.handleOnClickOnBackground(event)}
						tabIndex={-1}
					>
						<UIDialog
							onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
								return event.preventDefault();
							}}
						>
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
	background-color: ${(props: IModalProps) => `rgba(0,0,0,${props.backgroundOpacity})`};

	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: ${(props: IModalProps) => {
		switch (props.align) {
			case "top":
				return "flex-start";

			case "middle":
				return "center";

			case "bottom":
				return "flex-end";

			default:
				return "flex-end";
		}
	}};
`;

export default Modal;
