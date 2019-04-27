// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

// Component Props
interface ITopNavigationProps {
	isSticky?: boolean;
	shadow?: 'default' | 'hairline' | 'none';
}

interface ITopNavigationState {
	containerElement: HTMLElement | null;
	navigationElement: HTMLElement | null;
	rootContainer: {
		parentContainer: HTMLElement | null;
		threshold: number;
	};
	hasInitializedIntersectionObserver: boolean;
}

/**
 * @description Top Navigation Wrapper
 * @author  João Dias
 * @date  12/December/2018 at 15:42
 * @extends {React.SFC}
 */
class TopNavigation extends React.Component<ITopNavigationProps, ITopNavigationState> {
	static defaultProps = {
		isSticky: true,
	}

	private observer: IntersectionObserver | null = null;

	constructor (props: ITopNavigationProps) {
		super(props);

		this.state = {
			rootContainer: {
				parentContainer: null,
				threshold: 0.9,
			},
			navigationElement: null,
			containerElement: null,
			hasInitializedIntersectionObserver: false,
		}
	}

	componentDidMount(): boolean {
		if (document !== undefined) {
			const parentContainer: HTMLElement | null = document.documentElement;
			const navigationElement: HTMLElement | null = document.querySelector('#page-top-navigation');
			const containerElement: HTMLElement | null = document.querySelector('#container-trigger');

			if (parentContainer && navigationElement && containerElement) {
				this.setState(
					(prevState: ITopNavigationState) => ({
						rootContainer: {
							...prevState.rootContainer,
							parentContainer,
						},
						containerElement,
						navigationElement,
					}),
					() => {
						const { containerElement, navigationElement } = this.state;
						if (
							containerElement && navigationElement
						) {
							this.initObserver();
						}
					},
				);
			}

			return true;
		}

		return false;
	}

	shouldComponentUpdate(nextProps: ITopNavigationProps) {
		return nextProps.shadow !== this.props.shadow;
	}

	initObserver(): boolean {
		const { containerElement, rootContainer, navigationElement } = this.state;

		if (
			rootContainer &&
			containerElement &&
			navigationElement
		) {
			this.observer = new IntersectionObserver(
				(entries: IntersectionObserverEntry[]) => {
					const element = entries[0];

					if (element.isIntersecting) {
						console.log('is intersecting');
						navigationElement.classList.remove('is-out-of-bounds');
					} else {
						console.log('is not intersecting');
						navigationElement.classList.add('is-out-of-bounds');
					}
				},
				{
					root: rootContainer.parentContainer,
					threshold: rootContainer.threshold,
				},
			);

			this.observer.observe(containerElement);

			return true;
		}

		this.setState({
			hasInitializedIntersectionObserver: true,
		});

		return false;
	}

	getStickyPosition(itemY: number, rootY: number): string {
		if (itemY > rootY) {
			return 'is-out-of-bounds--bottom';
		} else {
			return 'is-out-of-bounds--top';
		}
	}

	render() {
		const { children, isSticky } = this.props;
		return <Wrapper id="page-top-navigation" isSticky={isSticky}>{children}</Wrapper>;
	}
}

// Styling
const Wrapper = styled.header`
	position: ${(props: ITopNavigationProps) => {
		if (props.isSticky) {
			return 'sticky';
		}

		return 'fixed';
	}};
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
	background-color: var(--body-background);
	box-shadow: ${(props: ITopNavigationProps) => {
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

export default TopNavigation;
