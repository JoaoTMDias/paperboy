import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/data/redux/store/index';

const store = configureStore();

// eslint-disable-next-line
export default ({ element }) => <Provider store={store}>{element}</Provider>;
