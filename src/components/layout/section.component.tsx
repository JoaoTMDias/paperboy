// Libraries
import { rem } from 'polished';
import * as React from 'react';
import { render } from 'react-dom';
import styled, { css } from 'styled-components';

// Component Props
interface IUISectionProps {
	theme?: any;
	layout?: 'vertical' | 'horizontal';
	title?: string;
	id: string;
	role?: string;
	grouped?: boolean;
	children?: React.ReactNode;
}

/**
 * @description Page Section Component
 * @author  João Dias
 * @date  24/December/2018 at 01:23
 * @extends {React.SFC}
 */
class UISection extends React.PureComponent<IUISectionProps> {
	static defaultProps = {
		layout: 'vertical',
		id: `${Math.random()}`,
		grouped: false,
	};

	renderTitle() {
		const { id, title, grouped } = this.props;

		if (title) {
			return (
				<SectionTitle id={`${id}-section-title`} grouped={grouped}>
					{title}
				</SectionTitle>
			);
		}

		return null;
	}

	public render() {
		const { id, title, children, role, layout, grouped } = this.props;

		if (grouped) {
			return (
				<SectionWrapper
					id={id}
					aria-labelledby={`${id}-section-title`}
					title={title}
					layout={layout}
					role={`${role}`}
					grouped={grouped}
				>
					{this.renderTitle()}
					<Wrapper id={`wrapper-${id}`} grouped={grouped}>
						{children}
					</Wrapper>
				</SectionWrapper>
			);
		}
		return (
			<SectionWrapper
				id={id}
				aria-labelledby={`${id}-section-title`}
				title={title}
				layout={layout}
				role={`${role}`}
			>
				{this.renderTitle()}
				{children}
			</SectionWrapper>
		);
	}
}

// Styling
const Wrapper = styled.div`
	width: 100%;
	background-color: var(--color-white);
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-left: 1rem;
	padding-right: 1rem;

	${(props: IUISectionProps) =>
		props.grouped &&
		css`
			padding-left: 0;
			padding-right: 0;
		`};
`;

const SectionWrapper = styled.section`
	width: 100%;
	max-width: 100%;
	padding: 0
		${(props: IUISectionProps) => (props.grouped === true ? '0' : '1rem')};

	overflow-x: hidden;
	display: flex;
	flex-direction: ${(props: IUISectionProps) => {
		if (props.layout === 'horizontal') {
			return 'row';
		}
		return 'column';
	}};
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${(props: IUISectionProps) => {
		switch (props.role) {
			case 'search':
				return '2rem';

			default:
				return `${rem('48px')}`;
		}
	}};

	&:only-child {
		margin-bottom: 0;
	}
`;

const SectionTitle = styled.h3`
	--section-title-color: var(--color-gray8);

	html[data-theme="DARK"] & {
		color: var(--color-gray4);
	};

	font-family: var(--body-font-family);
	font-size: ${rem('14px')};
	text-transform: capitalize;
	color: var(--section-title-color);



	letter-spacing: ${rem('0.17px')};
	line-height: ${rem('14px')};
	margin-bottom: var(--global-padding);
	padding: 0;

	${(props: IUISectionProps) =>
		props.grouped &&
		css`
			padding-left: 1rem;
			padding-right: 1rem;
		`};
`;

export default UISection;
