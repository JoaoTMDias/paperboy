// Libraries
import * as React from "react";
import { connect } from "react-redux";
import { IGlobalStoreState } from "data/interfaces/index";
import { setBaseFontRatio } from "data/redux/actions/index.actions";
import { IconChangeTypeSize, EIconChangeTypeSize } from "components/icons/index";
import * as S from "./styles";
import { IArticleTypesetProps, IArticleTypesetState } from "./types";

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
export class ArticleTypeset extends React.Component<IArticleTypesetProps, IArticleTypesetState> {
	static defaultProps = {
		baseFontRatio: 1,
	};

	constructor(props: IArticleTypesetProps) {
		super(props);

		this.state = {
			currentBaseFontSizeRatio: 1,
			htmlElement: null,
		};
	}

	componentDidMount() {
		const { baseFontRatio } = this.props;
		const rootElement: HTMLElement = document.documentElement;

		if (rootElement) {
			this.setState(
				{
					htmlElement: rootElement,
					currentBaseFontSizeRatio: baseFontRatio,
				},
				() => {
					this.updateRootbaseFontRatio(baseFontRatio);
				},
			);
		}
	}

	public componentDidUpdate(prevProps: IArticleTypesetProps) {
		const { baseFontRatio } = this.props;
		const { currentBaseFontSizeRatio } = this.state;
		if (prevProps.baseFontRatio !== baseFontRatio && baseFontRatio !== currentBaseFontSizeRatio) {
			this.updateRootbaseFontRatio(baseFontRatio);
		}
	}

	/**
	 * @description On changing the value on the input:
	 * - updates the redux store
	 * - updates the root element
	 * @author João Dias
	 * @date 2019-06-24
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 * @memberof ArticleTypeset
	 */
	handleOnChangeRangeValue(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const { dispatch } = this.props;

		const { value } = event.target;
		if (dispatch) {
			dispatch(setBaseFontRatio(parseFloat(value)));
			this.updateRootbaseFontRatio(value);
		}
	}

	/**
	 * @description Updates the Root Element with a new font size value
	 * @author João Dias
	 * @date 2019-06-24
	 * @param {number} size
	 * @memberof ArticleTypeset
	 */
	updateRootbaseFontRatio(size: number | string) {
		const { htmlElement } = this.state;

		if (htmlElement) {
			htmlElement.style.setProperty("--base-font-ratio", `${size}`);
		}
	}

	render() {
		const { baseFontRatio } = this.props;
		return (
			<S.PanelWrapper id="article-typeset" className="article-typeset">
				<header className="article-typeset__header">
					<h4 className="article-typeset__title">Change font size</h4>
				</header>
				<div className="article-typeset__content">
					<IconChangeTypeSize type={EIconChangeTypeSize.SMALL} />
					<label htmlFor="typeset" className="article-typeset__label">
						<input
							id="typeset"
							className="article-typeset__input "
							name="typeset"
							type="range"
							min="0.75"
							max="1.25"
							defaultValue={`${baseFontRatio}`}
							step="0.25"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleOnChangeRangeValue(event)}
						/>
					</label>
					<IconChangeTypeSize type={EIconChangeTypeSize.LARGE} />
				</div>
			</S.PanelWrapper>
		);
	}
}

/**
 * @description
 * @author João Dias
 * @date 2019-06-23
 * @param {IGlobalStoreState} state
 * @returns
 */
function mapStateToProps(state: IGlobalStoreState) {
	return {
		baseFontRatio: state.preferences.baseFontRatio,
	};
}

export default connect(mapStateToProps)(ArticleTypeset);
