export interface PreferencesReducer {
	  type: null;
  	sources: ChosenNewsSources;
    authenticated: boolean;
}

export interface ChosenNewsSources {
	  quantity: number;
  	items: string[];
}
