// Libraries
import * as React from "react";
import { connect } from 'react-redux';

import { EAppThemeType } from "../../../data/interfaces/theme.interfaces";
import { IGlobalStoreState } from "../../../data/interfaces/index.interface";


// Interface
interface IChangeAppThemeProps {
    currentTheme: EAppThemeType | undefined;
}

interface IChangeAppThemeState {
    rootElement: HTMLElement | null;
    hasNewTheme: boolean | null;
}


/**
 * @description Sets the current theme of the app
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IChangeAppThemeProps>}
 */
class ChangeAppTheme extends React.PureComponent<IChangeAppThemeProps, IChangeAppThemeState> {
    static defaultProps = {
        currentTheme: EAppThemeType.LIGHT,
    };

    constructor (props: IChangeAppThemeProps) {
        super(props);

        this.state = {
            rootElement: null,
            hasNewTheme: false,
        }
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


            this.setState({
                rootElement,
                hasNewTheme: false
            }, () => {
                if (currentTheme) {
                    const hasDarkModeInSystemPreferences = window.matchMedia("preferes-color-scheme: dark").matches ? window.matchMedia("preferes-color-scheme: dark").matches : false;
                    const theme = hasDarkModeInSystemPreferences ? EAppThemeType.DARK : currentTheme;
                    this.handleChangeCurrentAppTheme(theme);
                }
            });

            return true;
        }

        return false;
    }

    componentDidUpdate(nextProps: IChangeAppThemeProps) {
        const { currentTheme } = this.props;
        if (nextProps.currentTheme && nextProps.currentTheme !== currentTheme) {
            this.handleChangeCurrentAppTheme(nextProps.currentTheme);
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
            this.setState({
                hasNewTheme,
            }, () => {
                this.changeCurrentTheme(theme);
            })
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

        if (rootElement) {
            rootElement.classList.add('theme-transition')
            rootElement.setAttribute('data-theme', theme);
            window.setTimeout(function () {
                rootElement.classList.remove('theme-transition')
            }, 1000);
        }
    }

    render() {
        const { currentTheme } = this.props;

        console.log('currentTheme: ', currentTheme);

        return (
            <aside data-theme={currentTheme} tabIndex={-1} />
        );
    }
};

function mapStateToProps(state: IGlobalStoreState) {
    return {
        currentTheme: state.preferences.theme,
    }
}

export default connect(mapStateToProps)(ChangeAppTheme);
