import React from "react";
import { Wrapper } from "./styles";
import { ITopNavigationProps, ITopNavigationState } from "./types";

/**
 * Top Navigation Wrapper
 *
 * @class TopNavigation
 * @extends {React.Component<ITopNavigationProps, ITopNavigationState>}
 */
class TopNavigation extends React.Component<ITopNavigationProps, ITopNavigationState> {
	private observer: IntersectionObserver | null = null;

	static defaultProps = {
		isSticky: true,
	};

	constructor(props: ITopNavigationProps) {
		super(props);

		this.state = {
			rootContainer: {
				parentContainer: null,
				threshold: 0.5,
			},
			navigationElement: null,
			containerElement: null,
			hasInitializedIntersectionObserver: false,
		};
	}

	componentDidMount(): boolean {
		if (document !== undefined) {
			const parentContainer: HTMLElement | null = document.documentElement;
			const nElement: HTMLElement | null = document.querySelector("#page-top-navigation");
			const cElement: HTMLElement | null = document.querySelector("#container-trigger");

			if (parentContainer && nElement && cElement) {
				this.setState(
					(prevState: ITopNavigationState) => ({
						rootContainer: {
							...prevState.rootContainer,
							parentContainer,
						},
						containerElement: cElement,
						navigationElement: nElement,
					}),
					() => {
						const { containerElement, navigationElement } = this.state;
						if (containerElement && navigationElement) {
							this.initObserver();
						}
					},
				);
			}

			return true;
		}

		return false;
	}

	/**
	 *
	 *
	 * @param {ITopNavigationProps} nextProps
	 * @param {ITopNavigationState} nextState
	 * @returns
	 * @memberof TopNavigation
	 */
	shouldComponentUpdate(nextProps: ITopNavigationProps, nextState: ITopNavigationState) {
		const { isSticky, shadow } = this.props;
		const { rootContainer, navigationElement, containerElement, hasInitializedIntersectionObserver } = this.state;

		if (nextProps.isSticky !== isSticky || nextProps.shadow !== shadow) {
			return true;
		}

		if (
			nextState.containerElement !== containerElement ||
			nextState.rootContainer !== rootContainer ||
			nextState.navigationElement !== navigationElement ||
			nextState.hasInitializedIntersectionObserver !== hasInitializedIntersectionObserver
		) {
			return true;
		}

		return false;
	}

	/**
	 *
	 *
	 * @memberof TopNavigation
	 */
	componentWillUnmount() {
		const { containerElement } = this.state;

		if (this.observer && containerElement) {
			this.observer.unobserve(containerElement);
		}
	}

	/**
	 *
	 *
	 * @returns {boolean}
	 * @memberof TopNavigation
	 */
	initObserver(): boolean {
		const { containerElement, rootContainer, navigationElement } = this.state;

		if (rootContainer && containerElement && navigationElement) {
			this.observer = new IntersectionObserver(
				(entries: IntersectionObserverEntry[]) => {
					const element = entries[0];

					if (element.isIntersecting) {
						navigationElement.classList.remove("is-sticky");
					} else {
						navigationElement.classList.add("is-sticky");
					}
				},
				{
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

	render() {
		const { children, isSticky, style } = this.props;
		return (
			<Wrapper id="page-top-navigation" isSticky={isSticky} style={style}>
				{children}
			</Wrapper>
		);
	}
}

export default TopNavigation;
