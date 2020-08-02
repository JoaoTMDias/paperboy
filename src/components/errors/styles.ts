import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: var(--global-padding);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.error-message {
		&__content {
			margin: calc(var(--global-margin) * 2) 0;
			padding: 0;
		}
	}
`;
