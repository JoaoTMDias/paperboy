import * as React from 'react';
import { cleanup, render } from '@testing-library/react';

import ShareSheetPortal from './ShareSheet';

afterEach(cleanup);

describe('<ShareSheet />', () => {
	it('renders', () => {
		const handleClickOnWhatsapp = jest.fn();
		const handleClickOnFacebook = jest.fn();
		const handleClickOnTwitter = jest.fn();

		const { getByTestId, debug } = render(
			<div>
				<ShareSheetPortal
					groupId="1"
					handleClickOnWhatsapp={handleClickOnWhatsapp}
					handleClickOnFacebook={handleClickOnFacebook}
					handleClickOnTwitter={handleClickOnTwitter}
				/>
			</div>,
		);

		const ShareSheet = getByTestId('share-sheet');

		debug();
		expect(ShareSheet).toMatchSnapshot();
	});
});
