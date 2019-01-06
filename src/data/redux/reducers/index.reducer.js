// Libraries
import { combineReducers } from 'redux';

// Reducers
import general from './general.reducer';
import news from './news.reducer';
import preferences from './preferences.reducer';

const rootReducer = combineReducers({
  general,
  preferences,
  news,
});

export default rootReducer;
