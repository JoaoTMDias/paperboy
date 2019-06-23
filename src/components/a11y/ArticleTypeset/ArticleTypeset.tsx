// Libraries
import * as React from 'react';
import * as S from './ArticleTypeset.styled';

// Interface
interface IArticleTypesetProps {
	theme?: any;
	baseFontSize: number;
}

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
const ArticleTypeset: React.FunctionComponent<IArticleTypesetProps> = props => {
	return <S.PanelWrapper>inner content</S.PanelWrapper>;
};

export default React.memo(ArticleTypeset);
