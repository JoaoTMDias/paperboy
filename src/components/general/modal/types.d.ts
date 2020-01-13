export interface IModalProps {
	isModalOpen?: boolean;
	backgroundOpacity?: number;
	align?: "top" | "middle" | "bottom";
	delay?: number | null;
	handleClickToCloseModal?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export interface IModalState {
	shouldOpenModal: boolean;
}
