// Libraries
import * as React from "react";
import { connect } from "react-redux";

import { EAppThemeType } from "data/interfaces/theme";
import { IGlobalStoreState } from "data/interfaces/index";

// Interface
interface IChangeAppThemeProps {
	currentTheme: EAppThemeType | undefined;
}

interface IChangeAppThemeState {
	rootElement: HTMLElement | null;
	hasNewTheme: boolean | null;
	themeColor: string;
}

/**
 * @description Sets the current theme of the app
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IChangeAppThemeProps>}
 */
class ChangeAppTheme extends React.PureComponent<IChangeAppThemeProps, IChangeAppThemeState> {
	constructor(props: IChangeAppThemeProps) {
		super(props);

		this.state = {
			rootElement: null,
			hasNewTheme: false,
			themeColor: "#e81b1f",
		};
	}

	/**
	 * @description updates the rootElement with the document.documentElement.
	 * @author João Dias
	 * @date 2019-04-26
	 * @returns {boolean}
	 * @memberof ChangeAppTheme
	 */
	componentDidMount(): boolean {
		const { currentTheme } = this.props;
		if (document !== undefined) {
			const rootElement = document.documentElement ? document.documentElement : null;

			this.setState(
				{
					rootElement,
				},
				() => {
					if (currentTheme) {
						const hasDarkModeInSystemPreferences = window.matchMedia("preferes-color-scheme: dark").matches
							? window.matchMedia("preferes-color-scheme: dark").matches
							: false;
						const theme = hasDarkModeInSystemPreferences ? EAppThemeType.DARK : currentTheme;
						this.handleChangeCurrentAppTheme(theme);
					}
				},
			);

			return true;
		}

		return false;
	}

	componentDidUpdate(prevProps: IChangeAppThemeProps) {
		const { currentTheme } = this.props;
		if (prevProps.currentTheme && currentTheme && prevProps.currentTheme !== currentTheme) {
			this.handleChangeCurrentAppTheme(currentTheme);
		}
	}

	/**
	 * @description If there is a new theme coming from the store,
	 * updates the HTML Root Element with the data-theme attribute.
	 * @author João Dias
	 * @date 2019-04-26
	 * @param {EAppThemeType} theme
	 * @returns {boolean}
	 * @memberof ChangeAppTheme
	 */
	handleChangeCurrentAppTheme(theme: EAppThemeType): boolean {
		const { rootElement } = this.state;
		let hasNewTheme = false;

		if (theme && rootElement) {
			hasNewTheme = true;
			this.setState(
				{
					hasNewTheme,
				},
				() => {
					this.changeCurrentTheme(theme);
				},
			);
		}

		return hasNewTheme;
	}

	/**
	 * @description Updates the current theme
	 * @author João Dias
	 * @date 2019-04-26
	 * @param {EAppThemeType} theme
	 * @memberof ChangeAppTheme
	 */
	changeCurrentTheme(theme: EAppThemeType) {
		const { rootElement } = this.state;
		let themeColor = "#1c1e22";

		if (rootElement) {
			rootElement.classList.add("theme-transition");
			rootElement.setAttribute("data-theme", theme);
			window.setTimeout(function () {
				rootElement.classList.remove("theme-transition");
			}, 1000);
		}

		if (theme === EAppThemeType.LIGHT) {
			themeColor = "#ffffff";
		}

		this.setState(
			{
				themeColor,
			},
			() => {
				this.changeCurrentThemeColor(theme);
			},
		);
	}

	/**
	 * @description Updates the Current Meta Theme Color
	 * @author João Dias
	 * @date 2019-05-09
	 * @memberof ChangeAppTheme
	 */
	changeCurrentThemeColor(theme: EAppThemeType) {
		const { themeColor } = this.state;
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		const metaStatusBar = document.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");
		const statusBarColor = theme === EAppThemeType.DARK ? "black-translucent" : "default";
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", themeColor);
		}

		if (metaStatusBar) {
			metaStatusBar.setAttribute("content", statusBarColor);
		}
	}

	render() {
		const { currentTheme } = this.props;
		const { themeColor } = this.state;

		return <aside data-theme={currentTheme} data-theme-color={themeColor} tabIndex={-1} />;
	}
}

/**
 *
 *
 * @param {IGlobalStoreState} state
 * @returns
 */
function mapStateToProps(state: IGlobalStoreState) {
	return {
		currentTheme: state.preferences.theme,
	};
}

export default connect(mapStateToProps)(ChangeAppTheme);
