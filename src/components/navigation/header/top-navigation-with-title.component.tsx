// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

// Component Props
interface IUITopNavigationBarWithTitleProps {
	title: string;
	subtitle: string;
	theme?: any;
}

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.SFC}
 */
class UITopNavigationBarWithTitle extends React.Component<
	IUITopNavigationBarWithTitleProps
	> {
	shouldComponentUpdate(
		nextProps: IUITopNavigationBarWithTitleProps,
		nextState,
	): boolean {
		if (
			nextProps.title !== this.props.title ||
			nextProps.subtitle !== this.props.subtitle
		) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * render
	 */
	public render() {
		const { title, subtitle } = this.props;

		return (
			<Container>
				<h2 className="top-navigation-with-title__title">{title}</h2>
				<p className="top-navigation-with-title__subtitle">
					{subtitle}
				</p>
			</Container>
		);
	}
}

// Styling
const Container = styled.div`
	width: 100%;
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-top: ${rem('20px')};
	margin-right: ${rem('16px')};
	margin-bottom: ${rem('20px')};
	margin-left: 0;
	background-color: var(--body-background);

	.top-navigation {
		&-with-title {
			&__title {
				font-family: var(--heading-font-family);
				font-size: ${rem('20px')};
				color: var(--heading-1-color);

				letter-spacing: 0;
				margin-bottom: 0;
			}

			&__subtitle {
				font-family: var(--body-font-family);
				font-size: ${rem('14px')};
				color: var(--color-gray7);

				html[dark-theme="DARK"] && {
					color: var(--color-gray4);
				}

				letter-spacing: 0;
				margin: 0;
			}
		}
	}
`;

export default UITopNavigationBarWithTitle;
