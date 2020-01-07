import * as React from "react";
import { Portal, UIDialog } from "../../index.components";
import { IModalProps, IModalState } from "./types";
import { ModalWrapper } from "./styles";

class Modal extends React.PureComponent<IModalProps, IModalState> {
	public timer: any = null;

	static defaultProps = {
		backgroundOpacity: 0.3,
		align: "bottom",
		delay: null,
	};

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

	handleOnClickOnBackground(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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

export default Modal;
