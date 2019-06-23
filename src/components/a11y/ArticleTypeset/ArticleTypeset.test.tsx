import * as React from 'react';
import { shallow } from 'enzyme';
import ArticleTypeset from './ArticleTypeset';

describe('<ArticleTypeset />', () => {
	test('renders', () => {
		const wrapper = shallow(<ArticleTypeset />);
		expect(wrapper).toMatchSnapshot();
	});
});
