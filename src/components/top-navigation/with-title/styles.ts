import { rem } from "polished";
import styled from "styled-components";
import fluidFontSize from "helpers/fluid-typography";
import { theme } from "helpers/theme.helper";

export const Container = styled.div`
	--top-bar-background-color: var(--color-white);
	--top-bar-subtitle-color: vaR(--color-gray7);

	width: 100%;
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-top: ${rem("20px")};
	margin-right: 0;

	margin-bottom: ${rem("20px")};
	margin-left: 0;
	background-color: var(--top-bar-background-color);

	.top-navigation {
		&-with-title {
			&__title {
				font-family: var(--heading-font-family);
				${fluidFontSize(20, "2.5vw", 24)};
				color: var(--heading-1-color);
				letter-spacing: 0;
				margin-bottom: 0;
			}

			&__subtitle {
				font-family: var(--body-font-family);
				${fluidFontSize(14, "2vw", 16)};
				color: var(--top-bar-subtitle-color);
				letter-spacing: 0;
				margin: 0;
			}
		}
	}

	${theme.dark`
		--top-bar-subtitle-color: var(--color-gray4);
		--top-bar-background-color: var(--body-background);
	`};
`;

export default Container;
