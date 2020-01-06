import { IThemeProps } from "./index.interface";

export enum EModalAlignType {
	TOP = "top",
	MIDDLE = "middle",
	BOTTOM = "bottom",
}

export interface IModalProps {
	theme?: IThemeProps;
	isModalOpen?: boolean | null;
	maxWidth?: number;
	backgroundOpacity?: number;
	align?: EModalAlignType;
	handleClickToCloseModal?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}
