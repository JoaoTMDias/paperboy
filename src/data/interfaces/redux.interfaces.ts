import { IGeneral } from './general.interface';
import { INewsReducer } from './news.interface';
import { PreferencesReducer } from './preferences.interface';

export interface IReduxActions {
	type: string;
	payload: any;
}

export interface IGlobalStoreState {
	general: IGeneral;
	preferences: PreferencesReducer;
	news: INewsReducer;
}
