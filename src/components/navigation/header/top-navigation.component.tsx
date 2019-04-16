// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

// Component Props
interface IUITopNavigationBarProps {
	theme?: any;
	shadow?: 'default' | 'hairline' | 'none';
}

/**
 * @description Top Navigation Wrapper
 * @author  João Dias
 * @date  12/December/2018 at 15:42
 * @extends {React.SFC}
 */
class UITopNavigationBar extends React.Component<IUITopNavigationBarProps> {
	shouldComponentUpdate(nextProps: IUITopNavigationBarProps) {
		return nextProps.shadow !== this.props.shadow;
	}

	public render() {
		return <Wrapper>{this.props.children}</Wrapper>;
	}
}

// Styling
const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: auto;
	min-height: ${rem('48px')};
	padding-left: ${rem('16px')};
	padding-right: ${rem('16px')};
	background-color: var(--color-white);
	box-shadow: ${(props: IUITopNavigationBarProps) => {
		if (props.shadow) {
			if (props.shadow === 'default') {
				return '0 0 4px 0 rgba(0, 0, 0, 0.24), 0 4px 4px 0 rgba(0, 0, 0, 0.12)';
			}
			if (props.shadow === 'hairline') {
				return '0 1px 0 var(--color-gray4)';
			}
			if (props.shadow === 'none') {
				return 'none';
			}
		}
	}};
	z-index: 3;
`;

export default UITopNavigationBar;
