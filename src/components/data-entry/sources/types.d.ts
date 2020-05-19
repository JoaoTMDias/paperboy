import { IAllAvailableNewsSource } from "data/interfaces/index";
import { IChosenSource } from "../../../pages/onboarding/choose-sources";

export interface ISourcesListProps {
	layout?: "horizontal" | "vertical";
	label: string;
	data: IAllAvailableNewsSource[] | null;
	handleChange(event: React.SyntheticEvent, position: number, category: string): void;
	selectedOptions: IChosenSource[];
}

export interface ISourceListItemProps {
	id: string;
	label: string;
	category: string;
	src: string;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
	checked: boolean;
	style?: React.CSSProperties;
}

export interface ISourceCardProps {
	id: string;
	label: string;
	category: string;
	src: string;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
	checked: boolean;
	style?: React.CSSProperties;
}
