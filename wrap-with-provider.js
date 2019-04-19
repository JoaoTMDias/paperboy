import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/data/redux/store/index';

// eslint-disable-next-line
export default ({ element }) => (
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={<div>Loading...</div>}>
			{element}
		</PersistGate>
	</Provider>
);
