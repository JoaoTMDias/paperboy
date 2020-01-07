import React from "react";
import { Container, TopBarButton, TopBarLink } from "./styles";
import CNN_LOGO from "../../../assets/images/sources/icon-cnn.svg";
import { LazyLoadingImage, IconClose, IconShare } from "../../index.components";

// Constants
import { NEWS_PAGE } from "../../../data/constants/index.constants";
import { ITopNavigationWithCloseProps, ITopNavigationWithCloseState } from "./types";

// Utility functions
const getScrollPosition = (el = window) => ({
	y: el.pageYOffset !== undefined ? el.pageYOffset : document.body.scrollTop,
});

const debounce = (func: any) => {
	// This holds the requestAnimationFrame reference, so we can cancel it if we wish
	let frame: any;

	// The debounce function returns a new function that can receive a variable number of arguments
	return (...params: any) => {
		// If the frame variable has been defined, clear it now, and queue for next frame
		if (frame) {
			cancelAnimationFrame(frame);
		}

		// Queue our function call for the next frame
		frame = requestAnimationFrame(() => {
			// Call our function and pass any params we received
			func(...params);
		});
	};
};

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.FC}
 */
class TopNavigationWithClose extends React.Component<ITopNavigationWithCloseProps, ITopNavigationWithCloseState> {
	private navBar = React.createRef<HTMLDivElement>();

	constructor(props: ITopNavigationWithCloseProps) {
		super(props);

		// example how to bind object in React ES6
		this.handleScroll = this.handleScroll.bind(this);

		this.state = {
			root: null,
			speed: 0.2,
			hero: {
				element: null,
				title: {
					element: null,
					height: 107,
				},
				height: 384,
				trigger: 277,
			},
			navbar: null,
		};
	}

	componentDidMount() {
		if (document !== undefined) {
			const hero: HTMLDivElement | null = document.querySelector(".above-the-fold");
			const heroHeight = 384;
			const heroTitleWrapper: HTMLDivElement | null = document.querySelector(".hero__title");
			const herotitleWrapperHeight: number | null = heroTitleWrapper ? heroTitleWrapper.offsetHeight : 107;

			const pastScrollHeightTrigger = heroHeight - herotitleWrapperHeight;
			const navbar: HTMLDivElement | null = this.navBar.current;

			this.setState(
				{
					root: document.documentElement,
					hero: {
						element: hero,
						title: {
							element: heroTitleWrapper,
							height: herotitleWrapperHeight,
						},
						trigger: pastScrollHeightTrigger,
						height: heroHeight,
					},
					navbar,
				},
				() => {
					document.addEventListener("scroll", debounce(this.handleScroll), {
						passive: true,
					});
				},
			);
		}
	}

	shouldComponentUpdate(nextProps: ITopNavigationWithCloseProps): boolean {
		const { title, source } = this.props;

		if (nextProps.title !== title || nextProps.source !== source) {
			return true;
		}
		return false;
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", debounce(this.handleScroll));
	}

	/**
	 * Handles the scrolling distance and the fixed-nav functionality
	 *
	 * @returns
	 * @memberof Header
	 */
	handleScroll() {
		const { root, hero, navbar } = this.state;

		if (hero && navbar && root) {
			const ScrollPosition = getScrollPosition();
			if (ScrollPosition.y >= hero.trigger) {
				root.style.setProperty("--top-navigation-bar--detail-foreground", "var(--color-gray9)");
				navbar.classList.add("is-scrolling");
			} else if (ScrollPosition.y < hero.trigger) {
				root.style.setProperty("--top-navigation-bar--detail-foreground", "var(--color-white)");
				navbar.classList.remove("is-scrolling");
			}
		}

		return false;
	}

	/**
	 * render
	 */
	public render() {
		const { title, source } = this.props;

		return (
			<Container ref={this.navBar}>
				<TopBarLink className="close" to={NEWS_PAGE} aria-label="Close this window and go back to the news page">
					<IconClose />
				</TopBarLink>
				<div className="center">
					<LazyLoadingImage id="brand-logo" width="24" height="24" src={CNN_LOGO} alt="CNN Logo" />
					<h2 className="title">{title}</h2>
				</div>
			</Container>
		);
	}
}

export default TopNavigationWithClose;
