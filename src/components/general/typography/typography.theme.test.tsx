import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import { UIDisplay, UILead, UISubtitle } from './typography.theme';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('<Typography.Theme />', () => {
	beforeEach(cleanup);

	it('renders the UI Display title', () => {
		const testId = 'ui-display-title';
		const dummyTitle = 'Dummy Title';
		const { getByTestId } = render(
			<div>
				<UIDisplay text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});

	it('renders the UI Lead title', () => {
		const testId = 'ui-lead-title';
		const dummyTitle = 'Dummy Title';
		const { getByTestId } = render(
			<div>
				<UILead text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});

	it('renders the UI Subtitle title', () => {
		const testId = 'ui-subtitle-title';
		const dummyTitle = 'Dummy Title';
		const { getByTestId } = render(
			<div>
				<UISubtitle text={dummyTitle} />w
			</div>,
		);

		const element = getByTestId(testId);

		expect(element.textContent).toBe(dummyTitle);
	});
});
