export interface PreferecesReducer {
  type: null;
  sources: ChosenNewsSources;
  authenticated: boolean;
}

export interface ChosenNewsSources {
  quantity: number;
  items: string[];
}
