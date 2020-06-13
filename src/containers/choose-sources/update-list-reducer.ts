import { defaultChooseSourcesContext } from "./context";
import { IChosenSource } from "pagesonboarding/choose-sources";

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
