/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { EAppThemeType } from "data/interfaces";

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
	value?: EAppThemeType;
	onChange: () => void;
}

export interface ISectionListItemProps {
	id: string;
	center?: boolean;
}
