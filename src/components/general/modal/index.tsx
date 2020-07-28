import React, { FunctionComponent, useRef, useState, useCallback } from "react";
import { useMount, useUnmount, useClickAway } from "react-use";
import { Portal, UIDialog } from "components/index.components";
import { IModalProps } from "./types";
import { ModalWrapper } from "./styles";

const Modal: FunctionComponent<IModalProps> = ({
	isModalOpen,
	backgroundOpacity,
	align,
	delay,
	handleClickToCloseModal,
	children,
}) => {
	let { current: timer } = useRef<any>(null);
	const ref = useRef(null);
	const [shouldOpenModal, setShouldOpenModal] = useState(false);

	useClickAway(ref, () => {
		setShouldOpenModal(false);
	});

	/**
	 * @description When the component mounts, sets a 15sec timeout and then shows.
	 *
	 * @memberof Modal
	 */
	useMount(() => {
		if (delay && delay > 0) {
			timer = setTimeout(() => handleOpenModal(), delay);
		} else {
			handleOpenModal();
		}
	});

	useUnmount(() => {
		clearTimeout(timer);
	});

	const handleOnClickOnBackground = useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			event.preventDefault();

			if (handleClickToCloseModal) {
				handleClickToCloseModal(event);
			}
		},
		[handleClickToCloseModal],
	);

	const handleOpenModal = useCallback(() => {
		if (isModalOpen) {
			setShouldOpenModal(true);
		}
	}, [isModalOpen]);

	if (shouldOpenModal) {
		return (
			<Portal ref={ref}>
				<ModalWrapper
					role="dialog"
					backgroundOpacity={backgroundOpacity}
					align={align}
					delay={delay}
					onClick={handleOnClickOnBackground}
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
};

Modal.defaultProps = {
	backgroundOpacity: 0.3,
	align: "bottom",
	delay: null,
	isModalOpen: false,
};

export default Modal;
