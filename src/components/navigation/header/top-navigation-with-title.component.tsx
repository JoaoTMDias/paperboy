// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface ITopNavigationWithTitleProps {
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
class TopNavigationWithTitle extends React.Component<ITopNavigationWithTitleProps> {
	shouldComponentUpdate(nextProps: ITopNavigationWithTitleProps, nextState): boolean {
		if (nextProps.title !== this.props.title || nextProps.subtitle !== this.props.subtitle) {
			return true;
		}
		return false;
	}

	/**
	 * render
	 */
	public render() {
		const { title, subtitle } = this.props;

		return (
			<Container id="top-navigation-with-title" className="shrink-when-sticky">
				<h2 className="top-navigation-with-title__title title">{title}</h2>
				<p className="hide-when-sticky top-navigation-with-title__subtitle">{subtitle}</p>
			</Container>
		);
	}
}

// Styling
const Container = styled.div`
	--top-bar-background-color: var(--color-white);

	html[data-theme="DARK"] & {
		--top-bar-background-color: var(--body-background);
	}

	width: 100%;
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-top: ${rem("20px")};
	margin-right: 0;

	margin-bottom: ${rem("20px")};
	margin-left: 0;
	background-color: var(--top-bar-background-color);

	.top-navigation {
		&-with-title {
			&__title {
				font-family: var(--heading-font-family);
				font-size: ${rem("20px")};
				color: var(--heading-1-color);

				letter-spacing: 0;
				margin-bottom: 0;
			}

			&__subtitle {
				font-family: var(--body-font-family);
				font-size: ${rem("14px")};
				color: var(--color-gray7);

				html[data-theme="DARK"] && {
					color: var(--color-gray4);
				}

				letter-spacing: 0;
				margin: 0;
			}
		}
	}
`;

export default TopNavigationWithTitle;
