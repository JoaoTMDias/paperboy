// Libraries
import * as React from 'react';
import { connect } from 'react-redux';
import * as S from './ArticleTypeset.styled';
import { IconChangeTypeSize } from '../../general/icons/icons';
import { EIconChangeTypeSize } from '../../general/icons/icon.change-type';
import { IGlobalStoreState } from '../../../data/interfaces/index.interface';

// Interface
interface IArticleTypesetProps {
	theme?: any;
	baseFontSize: number;
}

interface IArticleTypesetState {
	currentFontSizeValue: number;
	htmlElement: HTMLElement | null;
}

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
class ArticleTypeset extends React.Component<
	IArticleTypesetProps,
	IArticleTypesetState
> {
	static defaultProps = {
		baseFontSize: 16,
	};

	constructor(props: IArticleTypesetProps) {
		super(props);

		this.state = {
			currentFontSizeValue: 16,
			htmlElement: null,
		};
	}

	componentDidMount() {
		const { baseFontSize } = this.props;
		const { currentFontSizeValue } = this.state;

		const rootElement: HTMLElement = document.documentElement;

		if (rootElement) {
			this.setState(
				{
					htmlElement: rootElement,
					currentFontSizeValue: baseFontSize,
				},
				() => {
					this.updateRootBaseFontSize(currentFontSizeValue);
				},
			);
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

		const { value } = event.target;

		this.updateRootBaseFontSize(value);
	}

	/**
	 * @description Updates the Root Element with a new font size value
	 * @author João Dias
	 * @date 2019-06-24
	 * @param {number} size
	 * @memberof ArticleTypeset
	 */
	updateRootBaseFontSize(size: number | string) {
		const { htmlElement } = this.state;

		if (htmlElement) {
			htmlElement.style.setProperty('--base-font-size', `${size}`);
		}
	}

	render() {
		const { baseFontSize } = this.props;
		return (
			<S.PanelWrapper id="article-typeset" className="article-typeset">
				<header className="article-typeset__header">
					<h4 className="article-typeset__title">Font Size</h4>
				</header>
				<div className="article-typeset__content">
					<IconChangeTypeSize type={EIconChangeTypeSize.SMALL} />
					<label htmlFor="typeset" className="article-typeset__label">
						<input
							id="typeset"
							className="article-typeset__input "
							name="typeset"
							type="range"
							min="14"
							max="18"
							defaultValue={`${baseFontSize}`}
							step="1"
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>,
							) => this.handleOnChangeRangeValue(event)}
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
		baseFontSize: state.preferences.baseFontSize,
	};
}

export default connect(mapStateToProps)(ArticleTypeset);
