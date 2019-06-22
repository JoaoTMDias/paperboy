import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/data/redux/store/index';
import { UIContentSpinner } from './src/components/index.components';

// eslint-disable-next-line
export default ({ element }) => (
	<Provider store={store}>
		<PersistGate
			persistor={persistor}
			loading={
				<UIContentSpinner
					isFullPage
					center
					color="var(--color-primary)"
				/>
			}
		>
			{element}
		</PersistGate>
	</Provider>
);
