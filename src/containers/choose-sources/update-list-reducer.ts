/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { IChosenSource } from "pagesonboarding/choose-sources";
import { defaultChooseSourcesContext } from "./context";

export type ACTION_TYPE = "ADD" | "REMOVE";

export interface IUpdateListReducerAction {
	type: ACTION_TYPE;
	payload: IChosenSource | number;
}

export function updateListReducer(
	state = defaultChooseSourcesContext.list,
	action: IUpdateListReducerAction,
): IChosenSource[] {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload as IChosenSource];

		case "REMOVE":
			delete state[action.payload as number];
			return state;
	}
}
