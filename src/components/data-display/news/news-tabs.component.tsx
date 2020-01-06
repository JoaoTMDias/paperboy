// Libraries
import * as React from "react";
import { connect } from "react-redux";

// Tabs
import Tab from "@material-ui/core/Tab";
import { TabsContainer, TabsHeader, TabsWrapper } from "./news-tabs.styled";

// Helpers
import { debounce, Logger, getScrollPosition } from "../../../helpers/index.helpers";

// Interfaces
import { IGlobalStoreState } from "../../../data/interfaces/redux.interfaces";

interface IHeaderTabs {
	id: string;
	label: string;
}

interface INewsTabsProps {
	id: string;
	hasHeader: boolean;
	tabsHeader: IHeaderTabs[];
	style?: React.CSSProperties;
	platform: string;
}

interface INewsTabsState {
	trigger: number | undefined;
	tabBarHeader: HTMLDivElement | null;
	currentTabIndex: number;
	hasChangedTabs: boolean;
}

/**
 * @description Returns the hash...without the hash, just the name :)
 * @author João Dias
 * @date 2019-04-02
 * @returns
 */
function getHash(): string {
	const hash = window.location.hash.slice(1);
	return hash;
}

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsTabs
 * @extends {React.Component<INewsTabsProps, any>}
 */
class NewsTabs extends React.Component<INewsTabsProps, INewsTabsState> {
	static defaultProps = {
		hasHeader: true,
	};

	private tabsHeader = React.createRef<HTMLElement>();

	constructor(props: INewsTabsProps) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);

		this.state = {
			trigger: 50,
			tabBarHeader: null,
			currentTabIndex: 0,
			hasChangedTabs: false,
		};
	}

	componentDidMount() {
		this.setupEventListeners();
		const hasHashOnUrl = getHash();

		if (hasHashOnUrl) {
			this.checkIfHashExists(hasHashOnUrl);
		}
	}

	shouldComponentUpdate(nextProps: INewsTabsProps, nextState: INewsTabsState): boolean {
		const { id, tabsHeader, hasHeader } = this.props;
		const { currentTabIndex, tabBarHeader, trigger } = this.state;

		if (
			nextProps.id !== id ||
			nextProps.tabsHeader !== tabsHeader ||
			nextProps.hasHeader !== hasHeader ||
			nextState.currentTabIndex !== currentTabIndex ||
			nextState.tabBarHeader !== tabBarHeader ||
			nextState.trigger !== trigger
		) {
			return true;
		}

		return false;
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", debounce(this.handleScroll));
	}

	/**
	 * @description When the Tabs Pages component renders,
	 * queries the DOM to find the tab bar header and also the navigation header of the page.
	 * It also adds the trigger distance for the Handle Scroll method.
	 * @author João Dias
	 * @date 2019-03-24
	 * @memberof NewsTabs
	 */
	setupEventListeners() {
		const { hasHeader } = this.props;
		if (document !== undefined) {
			const tabBarHeader: HTMLDivElement | null = document.querySelector(".tabs-page--header");
			const navigationBar = document.querySelector(".navigation-bar");
			const navigationBarHeight = hasHeader && navigationBar ? navigationBar.getBoundingClientRect().top : 50;

			const trigger = hasHeader && navigationBarHeight ? navigationBarHeight : 50;

			this.setState(
				{
					tabBarHeader,
					trigger,
				},
				() => {
					document.addEventListener("scroll", debounce(this.handleScroll), {
						passive: true,
					});
				},
			);
		}
	}

	/**
	 * @description Handles the swipe to change the index
	 * @author João Dias
	 * @date 2019-03-26
	 * @param {number} index
	 * @returns {boolean}
	 * @memberof NewsTabs
	 */
	handleOnSwipeToChangeIndex = (index: number, indexLatest: number) => {
		Logger({
			type: "log",
			message: `previous tab index: ${indexLatest}`,
		});

		this.changeTabIndex(index);
		this.initTabsChanged();
	};

	/**
	 * @description On Clicking on a Tab changes the Index
	 * @memberof NewsTabs
	 */
	handleOnClickToChangeTab = (event: any, value: number) => {
		Logger({
			type: "info",
			message: event,
		});

		this.changeTabIndex(value);
		this.initTabsChanged();
	};

	/**
	 * @description Changes the Tabs Initializer state
	 * @author João Dias
	 * @date 2019-05-03
	 * @returns {boolean}
	 * @memberof TabsPages
	 */
	initTabsChanged(): boolean {
		const { hasChangedTabs } = this.state;

		if (hasChangedTabs) {
			return false;
		}

		this.setState({
			hasChangedTabs: true,
		});

		return true;
	}

	/**
	 * @description Change Tab
	 * @author João Dias
	 * @date 2019-04-02
	 * @param {string} hash
	 * @memberof NewsTabs
	 */
	checkIfHashExists(hash: string) {
		const { tabsHeader } = this.props;

		const tabIndex = tabsHeader.findIndex((tab: IHeaderTabs) => tab.id === hash);

		Logger({
			type: "info",
			message: `index: ${tabIndex}`,
		});

		this.changeTabIndex(tabIndex);
	}

	/**
	 * @description Changes the Tab index and hash.
	 * @author João Dias
	 * @date 2019-04-02
	 * @param {number} index
	 * @memberof NewsTabs
	 */
	changeTabIndex(index: number) {
		if (index !== null && index !== undefined) {
			this.setState({
				currentTabIndex: index,
			});

			return true;
		}

		return false;
	}

	/**
	 * @description Monitors wether the tab bar is below the nav header
	 * or out of the viewport. If so, adds a sticky class.
	 * @author João Dias
	 * @date 2019-03-24
	 * @returns
	 * @memberof NewsTabs
	 */
	handleScroll() {
		const { trigger, tabBarHeader } = this.state;

		if (tabBarHeader && trigger) {
			const ScrollPosition = getScrollPosition();
			if (ScrollPosition && ScrollPosition.y >= trigger) {
				tabBarHeader.classList.add("is-scrolling");
			} else if (ScrollPosition && ScrollPosition.y < trigger) {
				tabBarHeader.classList.remove("is-scrolling");
			}

			return true;
		}

		return false;
	}

	/**
	 * @description Renders the Tab Header of the container
	 * @memberof NewsTabs
	 */
	renderTabHeader = (): JSX.Element => {
		const { tabsHeader, style } = this.props;
		const { currentTabIndex } = this.state;

		const tabs: JSX.Element[] = tabsHeader.map((tab: IHeaderTabs, index: number) => {
			return (
				<Tab
					key={tab.id}
					id={`tab-${index}-${tab.id}`}
					label={tab.label}
					classes={{
						root: "tabs-page--tab",
						selected: "tabs-page--is-selected",
					}}
				/>
			);
		});

		return (
			<TabsHeader
				innerRef={this.tabsHeader}
				action={() =>
					Logger({
						type: "info",
						message: "Tabs Header was mounted",
					})
				}
				className="tabs-page--header"
				value={currentTabIndex}
				onChange={this.handleOnClickToChangeTab}
				classes={{
					root: "tabs-page--header",
					indicator: "tabs-page--indicator",
				}}
				style={style}
			>
				{tabs}
			</TabsHeader>
		);
	};

	/**
	 * @description Renders the Tab Items. When the component starts only renders one child.
	 * @author João Dias
	 * @date 2019-05-03
	 * @returns
	 * @memberof TabsPages
	 */
	renderTabItems() {
		const { children } = this.props;
		const { hasChangedTabs, currentTabIndex } = this.state;

		if (hasChangedTabs === false) {
			const filteredChildren = React.Children.map(children, (child: React.ReactNode, childrenIndex: number) => {
				if (childrenIndex === currentTabIndex) {
					return child;
				}
				return <div className="tabs-page--placeholder">&nbsp;</div>;
			});

			return filteredChildren;
		}

		return children;
	}

	render() {
		const { id } = this.props;
		const { currentTabIndex } = this.state;

		return (
			<TabsWrapper id={id} className="tabs-page--wrapper">
				{this.renderTabHeader()}
				<TabsContainer
					id="tabs-page--content"
					className="tabs-page--content"
					index={currentTabIndex}
					animateHeight={false}
					onChangeIndex={this.handleOnSwipeToChangeIndex}
					disableLazyLoading={false}
					hysteresis={1}
					enableMouseEvents
					style={{
						height: "var(--tabs-container-height)",
					}}
				>
					{this.renderTabItems()}
				</TabsContainer>
			</TabsWrapper>
		);
	}
}

/**
 * @description
 * @author João Dias
 * @date 2019-06-22
 * @param {IGlobalStoreState} state
 * @returns
 */
function mapStateToProps(state: IGlobalStoreState) {
	return {
		platform: state.general.platform,
	};
}

export default connect(mapStateToProps)(NewsTabs);
