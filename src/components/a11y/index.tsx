// Libraries
import * as React from "react";

import Title from "./styles";

// Component Props
interface IA11yPageTitleProps {
	title: string;
}

/**
 * @description Accessible Page Title for Reach Router

 * @date  29/November/2018 at 23:42
 * @extends {React.FunctionComponent}
 */
const A11yPageTitle: React.FunctionComponent<IA11yPageTitleProps> = props => {
	const { title } = props;
	return (
		<Title
			id="a11y-page-title"
			data-testid="a11y-page-title"
			role="alert"
			aria-live="polite"
			aria-atomic="true"
			tabIndex={0}
		>
			{`Page Title: ${title}`}
		</Title>
	);
};

A11yPageTitle.defaultProps = {
	title: "Page Title",
};

export default A11yPageTitle;
