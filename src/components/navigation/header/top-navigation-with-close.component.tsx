// Libraries
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

// Components
import { LazyLoadingImage, IconClose, IconShare } from '../../index.components';

// Constants
import { NEWS_PAGE } from '../../../data/constants/index.constants';

import CNN_LOGO from '../../../assets/images/sources/icon-cnn.svg';

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

// Component Props
interface ITopNavigationWithCloseProps {
	title: string;
	source: string;
	theme?: any;
}

interface HeroTitle {
	element: HTMLDivElement | null;
	height: number;
}

interface Hero {
	element: HTMLDivElement | null;
	title: HeroTitle;
	height: number;
	trigger: number;
}

interface ITopNavigationWithCloseState {
	root: HTMLElement | null;
	speed?: number;
	hero: Hero;
	navbar: HTMLDivElement | null;
}

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.SFC}
 */
class TopNavigationWithClose extends React.Component<
	ITopNavigationWithCloseProps,
	ITopNavigationWithCloseState
> {
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

	private navBar = React.createRef<HTMLDivElement>();

	componentDidMount() {
		if (document !== undefined) {
			const hero: HTMLDivElement | null = document.querySelector(
				'.above-the-fold',
			);
			const heroHeight = 384;
			const heroTitleWrapper: HTMLDivElement | null = document.querySelector(
				'.hero__title',
			);
			const herotitleWrapperHeight: number | null = heroTitleWrapper
				? heroTitleWrapper.offsetHeight
				: 107;

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
					document.addEventListener(
						'scroll',
						debounce(this.handleScroll),
						{
							passive: true,
						},
					);
				},
			);
		}
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', debounce(this.handleScroll));
	}

	shouldComponentUpdate(nextProps: ITopNavigationWithCloseProps): boolean {
		const { title, source } = this.props;

		if (nextProps.title !== title || nextProps.source !== source) {
			return true;
		}
		return false;
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
				root.style.setProperty(
					'--top-navigation-bar--detail-foreground',
					'var(--color-gray9)',
				);
				navbar.classList.add('is-scrolling');
			} else if (ScrollPosition.y < hero.trigger) {
				root.style.setProperty(
					'--top-navigation-bar--detail-foreground',
					'var(--color-white)',
				);
				navbar.classList.remove('is-scrolling');
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
				<TopBarLink
					className="close"
					to={NEWS_PAGE}
					aria-label="Close this window and go back to the news page"
				>
					<IconClose />
				</TopBarLink>
				<div className="center">
					<LazyLoadingImage
						id="brand-logo"
						width="24"
						height="24"
						src={CNN_LOGO}
						alt="CNN Logo"
					/>
					<h2 className="title">{title}</h2>
				</div>
			</Container>
		);
	}
}

// Styling
const Container = styled.div`
	--top-navigation-bar--detail-background: transparent;
	--top-navigation-bar--title-color: var(--color-gray9);
	--top-navigation-bar--height:  ${rem('44px')};
	width: 100%;
	flex: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: var(--top-navigation-bar--detail-background);
	margin: 0;
	padding: 0 ${rem('8px')};
	position: fixed;
	z-index: 10;
	transition: all 200ms ease-in-out;

	.center {
		width: calc(100% - 44px);
		height: var(--top-navigation-bar--height);
		overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;

		.title {
			font-family: var(--heading-font-family);
			font-size: ${rem('14px')};
			color: var(--top-navigation-bar--title-color);
			letter-spacing: 0;
			margin-bottom: 0;
			position: absolute;
			z-index: -1;
			opacity: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: center;
			max-height: var(--top-navigation-bar--height);
			width: calc(100vw - 112px);

		}
	}

	img,
	#brand-logo {
		width: ${rem('24px')};
		height: ${rem('24px')};
		border-radius: ${rem('24px')};
		opacity: 1;
		transform: scale(1);
		flex-basis: width: ${rem('24px')};
		flex-shrink: 0;
		flex-grow: 0;
	}

	.close,
	.share {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: transparent;
		border-radius: 50%;
	}

	.share {
		background-color: rgba(0,0,0,0.1);
	}

	&.is-scrolling {
		--top-navigation-bar--detail-background: var(--color-white);

		html[data-theme='DARK'] && {
			--top-navigation-bar--detail-background: var(--color-black);
			--top-navigation-bar--detail-foreground: var(--color-gray4);
			--top-navigation-bar--title-color: var(--color-gray1);
		}

		.title {
			opacity: 1;
			position: relative;
			width: 100%;
			text-align: center;
			flex: auto;
		}

		#brand-logo, img {
			opacity: 0;
			transform: scale(0);
			position: absolute;
			left: 0;
		}
	}
`;

const TopBarLink = styled(Link)`
	width: ${rem('44px')};
	height: ${rem('44px')};
`;

const TopBarButton = styled.button`
	width: ${rem('44px')};
	height: ${rem('44px')};
	-webkit-appearance: none;
	border: none;
`;

export default TopNavigationWithClose;
