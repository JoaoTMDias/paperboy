export enum EListItemButtonType {
	NORMAL = "NORMAL",
	PRIMARY = "PRIMARY",
	SECONDARY = "SECONDARY",
}

export interface IListItemWithButtonProps {
	id: string;
	title: string;
	flavour: EListItemButtonType;
	subtitle?: string | null;
	onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
	style?: React.CSSProperties;
}

export interface IListItemWithLinkProps {
	id: string;
	to: string;
	title: string;
	subtitle?: string | null;
}

export interface IListItemWithSwitchProps {
	id: string;
	title: string;
	subtitle?: string | null;
	defaultValue: string;
	value: string;
	onClick?(event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void;
}

export interface ISectionListItemProps {
	id: string;
	center?: boolean;
}
