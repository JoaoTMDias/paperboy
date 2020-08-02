import React, { FunctionComponent, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useClickAway, useKeyPressEvent, useLockBodyScroll, useToggle } from "react-use";
import UIDialog from "components/feedback/dialog/dialog.component";
import { IModalProps } from "./types";
import { Wrapper, Mask } from "./styles";

const Modal: FunctionComponent<IModalProps> = ({ isOpen, backgroundOpacity, align, close, children }) => {
	const ref = useRef(null);
	const { current: portaId } = useRef(document.getElementById("portal"));

	const closeMenuFn = useCallback(() => {
		if (close) {
			close();
		}
	}, [close]);

	useClickAway(ref, () => {
		closeMenuFn();
	});

	useKeyPressEvent("Escape", closeMenuFn);

	if (isOpen && portaId) {
		return createPortal(
			<Wrapper align={align} tabIndex={-1}>
				<Mask onClick={close} backgroundOpacity={backgroundOpacity} />
				<UIDialog>
					<div ref={ref}>{children}</div>
				</UIDialog>
			</Wrapper>,
			portaId,
		);
	}

	return null;
};

Modal.defaultProps = {
	backgroundOpacity: 0.3,
	align: "bottom",
	delay: null,
};

const useModal = ({
	align = "bottom",
	backgroundOpacity = 0.3,
}: IModalProps): [({ children }: any) => JSX.Element, () => void, () => void, boolean] => {
	const [locked, toggleLocked] = useToggle(false);
	const [isOpen, setOpen] = useState(false);

	useLockBodyScroll(locked);

	/**
	 * Opens the modal
	 */
	const open = useCallback(() => {
		setOpen(true);
		toggleLocked();
	}, [setOpen]);

	/**
	 * Closes the modal
	 */
	const close = useCallback(() => {
		toggleLocked();
		setOpen(false);
	}, [setOpen]);

	/**
	 * Creates an instance of the Modal component
	 */
	const ModalComponent = useCallback(
		({ children }) => {
			return (
				<Modal isOpen={isOpen} close={close} align={align} backgroundOpacity={backgroundOpacity}>
					{children}
				</Modal>
			);
		},
		[isOpen, close, align, backgroundOpacity],
	);

	return [ModalComponent, open, close, isOpen];
};

export default useModal;
