// Libraries
import { combineReducers } from 'redux';

// Reducers
import news from './news-reducer';
import preferences from './preferences-reducer';

const rootReducer = combineReducers({
  preferences,
  news,
});

export default rootReducer;
