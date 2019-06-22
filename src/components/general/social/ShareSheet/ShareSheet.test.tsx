import * as React from 'react';
import { cleanup, render } from '@testing-library/react';

import ShareSheetPortal from './ShareSheet';

afterEach(cleanup);

const dummyArticleData = {
	author: 'Divya Karthikeyan and Swati Gupta, CNN',
	content: '',
	description:
		'As Manjula Sridhar went into the operation theater of a maternity ward in Chennai, the capital of the southern Indian state of Tamil Nadu, her mother began arguing with the doctor over a water shortage that threatened to delay the delivery.',
	key: '1561229147600',
	publishedAt: '2019-06-22T18:21:35Z',
	source: { id: 'cnn', name: 'CNN' },
	title:
		"'I'm scared for my daughter': Life in India's first city that's almost out of water",
	url:
		'http://us.cnn.com/2019/06/22/india/chennai-india-water-crisis-intl/index.html',
	urlToImage:
		'https://cdn.cnn.com/cnnnext/dam/assets/190620121712-05-chennai-india-drought-2019-super-tease.jpg',
};

describe('<ShareSheet />', () => {
	it('renders', () => {
		const handleClickOnWhatsapp = jest.fn();
		const handleClickOnFacebook = jest.fn();
		const handleClickOnTwitter = jest.fn();

		const { getByTestId, debug } = render(
			<div>
				<ShareSheetPortal
					articleData={dummyArticleData}
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
