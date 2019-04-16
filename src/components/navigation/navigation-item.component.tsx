// Libraries
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';
import styled, { css } from 'styled-components';

// Component Props
interface ITabItemProps {
	to: string;
	label: string;
	layout?: 'vertical' | 'horizontal';
}

/**
 * @description Bottom Tab Item
 * @author  João Dias
 * @date  08/December/2018 at 15:41
 * @extends {React.SFC}
 */
class TabItem extends React.Component<ITabItemProps> {
	static defaultProps = {
		to: '/',
		label: 'Label',
		layout: 'horizontal',
	};

	shouldComponentUpdate(nextProps: ITabItemProps, nextState: any) {
		const { to, label } = this.props;

		if (nextProps.to !== to || nextProps.label !== label) {
			return true;
		}
		return false;
	}

	public render() {
		const { to, label, layout, children } = this.props;
		return (
			<Wrapper layout={layout}>
				<TabLink
					to={to}
					activeClassName="is-active"
					aria-label={`Click/Tap to go to the page: ${label}`}
					tabIndex={0}
					layout={layout}
				>
					<Icon>{children}</Icon>
					<Label className="label">{label}</Label>
				</TabLink>
			</Wrapper>
		);
	}
}

// Styling
const Wrapper = styled.li`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: ${rem('4px')} 0;
	flex: 1;

	${(props: ITabItemProps) =>
		props.layout === 'vertical' &&
		css`
			padding: 0;
		`};

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
`;

const TabLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	${(props: ITabItemProps) =>
		props.layout === 'vertical' &&
		css`
			flex-direction: row;
			width: 100%;
			padding: ${rem('8px')} var(--global-margin);

			&.is-active {
				background-color: var(--color-gray9);
			}

			.label {
				margin-left: calc(var(--global-margin) * 0.5);
			}
		`};

	&.is-active {
		.tab__icon  {
			&--default,
			&--negative {
				fill: var(--color-white);
			}

			&--positive {
				fill: var(--color-gray9);
			}
		}

		.label {
			color: var(--color-white);
		}
	}
`;

const Icon = styled.figure`
	width: ${rem('26px')};
	height: ${rem('26px')};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: ${rem('4px')} 0;
`;

const Label = styled.span`
	font-size: ${rem('10px')};
	text-align: center;
	color: var(--color-gray3);
`;
export default TabItem;
