import styled from "styled-components";
import { rem } from "polished";
import { Field } from "formik";
import { above } from "helpers/index.helpers";
import fluidFontSize from "helpers/fluid-typography";

// Styling
export const SourcesListWrapper = styled.ol`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	margin: 0;
	padding: 4px;
	width: 100%;
	scroll-snap-type: x proximity;
	-webkit-overflow-scrolling: touch;
	background-color: var(--body-background);

	&[data-layout="vertical"] {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0;

		${above.medium`
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 0.5rem;
		`};

		${above.large`
			grid-template-columns: repeat(3, 1fr);
		`};

		${above.xlarge`
			grid-template-columns: repeat(4, 1fr);
		`};
	}

	.source__item {
		flex: 1;
	}
`;

export const Wrapper = styled.li`
	max-height: ${rem("64px")};
	width: 100%;
	display: flex;
	margin: 0;

	* {
		&:active,
		&:focus {
			outline: none;
		}
	}

	&.is-checked {
		transform: scale(1);
		background-image: linear-gradient(45deg, var(--color-select), var(--color-select-gradient));

		.source__status {
			.icon__circle {
				fill: var(--color-white);
			}

			.icon__check {
				fill: var(--color-select);
			}
		}

		label {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.16);
		}

		.source__label {
			background-color: transparent;
			.source__label__title {
				color: var(--color-white);
				text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
			}
		}
	}

	label {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding-top: ${rem("8px")};
		padding-right: 0;
		padding-bottom: ${rem("8px")};
		padding-left: ${rem("8px")};

		box-shadow: 0 2px 0 0px rgba(0, 0, 0, 0.05);
		border-radius: 0;
		transform: scale(0.98);
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		&:active {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.04), 0 0 4px 0 rgba(0, 0, 0, 0.08);
			transform: scale(0.96);
		}
	}
`;

export const Icon = styled.svg`
	position: absolute;
	top: ${rem("20px")};
	right: ${rem("8px")};
	width: ${rem("24px")};
	height: ${rem("24px")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1;

	.icon__circle {
		fill: var(--color-gray2);

		html[data-theme="DARK"] & {
			fill: var(--color-black);
		}
	}

	.icon__check {
		fill: var(--color-gray2);

		html[data-theme="DARK"] & {
			fill: var(--color-gray9);
		}
	}
`;

export const Logo = styled.figure`
	margin: 0;
	width: 100%;
	max-width: ${rem("48px")};
	height: auto;
	overflow: hidden;
	position: relative;
	border-radius: 8px;
	background-color: var(--color-gray3);

	img {
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: auto;
		background-color: var(--color-gray3);
	}
`;

export const Input = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	margin: 0;
	padding: 0;
	right: 0;
`;

export const Name = styled.div`
	display: flex;
	width: calc(100% - ${rem("72px")});
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	overflow: hidden;
	background-color: transparent;
	height: ${rem("48px")};
	line-height: ${rem("48px")};

	.source__label {
		&__title {
			--text-shadow-color: rgba(255, 255, 255, 0.2);
			--title-color: var(--color-gray9);

			html[data-theme="DARK"] & {
				--text-shadow-color: rgba(0, 0, 0, 0.2);
				--title-color: var(--color-gray2);
			}

			width: 100%;
			text-align: left;
			font-family: var(--body-font-family);
			${fluidFontSize(12, "2vw", 14)};
			line-height: 1.333;
			color: var(--title-color);
			letter-spacing: 0;
			margin: 0;
			padding: ${rem("4px")} ${rem("8px")};
			text-shadow: 0px 1px 1px var(--text-shadow-color);
			text-transform: capitalize;
		}
	}
`;

export const SourceCardWrapper = styled.li`
	position: relative;
	min-width: ${rem("105px")};
	min-height: ${rem("148px")};
	width: 100%;
	scroll-snap-align: center;
	display: flex;
	margin-right: 1rem;

	* {
		&:active,
		&:focus {
			outline: none;
		}
	}

	&.is-checked {
		transform: scale(1);
		.source__status {
			.icon__circle {
				fill: var(--color-select);
			}

			.icon__check {
				fill: var(--color-white);
			}
		}

		label {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.16);
		}

		.source__label {
			background-image: linear-gradient(45deg, var(--color-select), var(--color-select-gradient));

			.source__label__title {
				color: var(--color-white);
				text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
			}
		}
	}

	label {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.02), 0 0 3px 1px rgba(0, 0, 0, 0.04);
		border-radius: 8px;
		transform: scale(0.98);

		&:active {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.04), 0 0 4px 0 rgba(0, 0, 0, 0.08);
			transform: scale(0.96);
		}
	}
`;

export const SourceCardIcon = styled.svg`
	position: absolute;
	top: ${rem("8px")};
	right: ${rem("8px")};
	width: ${rem("24px")};
	height: ${rem("24px")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

export const SourceCardLogo = styled.figure`
	margin: 0;
	overflow: hidden;
	position: relative;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	background-color: var(--color-gray3);

	img {
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: auto;
		background-color: var(--color-gray3);
	}
`;

export const SourceCardInput = styled(Field)`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	margin: 0;
	padding: 0;
	right: 0;
`;

export const SourceCardName = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: var(--color-white);

	html[data-theme="DARK"] & {
		background-color: var(--color-gray9);
	}
	height: ${rem("44px")};

	.source__label {
		&__title {
			--text-shadow-color: rgba(255, 255, 255, 0.2);

			html[data-theme="DARK"] & {
				--text-shadow-color: rgba(0, 0, 0, 0.2);
			}

			width: 100%;
			text-align: center;
			font-family: var(--body-font-family);
			${fluidFontSize(12, "2vw", 14)};
			line-height: 1.333;
			color: var(--color-gray8);

			html[data-theme="DARK"] & {
				color: var(--color-gray3);
			}
			letter-spacing: 0;
			margin: 0;
			padding: ${rem("4px")} ${rem("8px")};
			text-shadow: 0px 1px 1px var(--text-shadow-color);
			text-transform: capitalize;
		}
	}
`;
