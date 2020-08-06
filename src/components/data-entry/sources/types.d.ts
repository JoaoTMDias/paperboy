/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { IAllAvailableNewsSource } from "data/interfaces/index";
import { IChosenSource } from "../../../pages/onboarding/choose-sources";

export interface ISourcesListProps {
	layout?: "horizontal" | "vertical";
	label: string;
	data: IAllAvailableNewsSource[] | null;
	handleChange(target: string, category: string): void;
	selectedOptions: IChosenSource[];
}

export interface ISourceListItemProps {
	id: string;
	label: string;
	category: string;
	src: string;
	handleChange(target: string): void;
	checked: boolean;
	style?: React.CSSProperties;
}

export interface ISourceCardProps {
	id: string;
	label: string;
	category: string;
	src: string;
	handleChange(target: string): void;
	checked: boolean;
	style?: React.CSSProperties;
}
