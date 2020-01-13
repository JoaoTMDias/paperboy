import { IGeneral } from "./general";
import { INewsReducer } from "./news";
import { PreferencesReducer } from "./preferences";

export interface IReduxActions {
	type: string;
	payload: any;
}

export interface IGlobalStoreState {
	general: IGeneral;
	preferences: PreferencesReducer;
	news: INewsReducer;
}
