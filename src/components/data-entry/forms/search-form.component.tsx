/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import { rem } from "polished";
import React, { FunctionComponent, memo } from "react";
import styled from "styled-components";
import { UISection } from "components/section";

// Component Props
interface IUISearchFormProps {
	legend: string;
	placeholder: string;
	label: string;
}

/**
 * @description Search Form Input

 * @date  28/December/2018 at 10:32
 * @extends {React.FC}
 */
const UISearchForm: FunctionComponent<IUISearchFormProps> = ({ legend, placeholder, label }) => {
	return (
		<UISection id="sources-search" role="search">
			<Form action="#" method="get">
				<fieldset>
					<legend className="screen-readers">{legend}</legend>
					<TextInput htmlFor="source-search">
						<input type="search" name="source-search" id="source-search" placeholder={placeholder} maxLength={50} />
					</TextInput>
				</fieldset>
				<Button type="submit" title={label}>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
						<path
							fill="var(--color-gray1)"
							fillRule="evenodd"
							d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 1 0-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
						/>
					</svg>
				</Button>
			</Form>
		</UISection>
	);
};

// Styling
const Form = styled.form`
	width: 100%;
	height: 3rem;

	background-color: var(--color-white, #ffffff);
	border-radius: var(--global-radius);
	padding: ${rem("8px")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);

	fieldset {
		width: calc(100% - 3rem);
		height: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-inline-start: 0;
		margin-inline-end: 0;
		padding-block-start: 0;
		padding-inline-start: 0;
		padding-inline-end: 0;
		padding-block-end: 0;
	}
`;

const TextInput = styled.label`
	display: flex;
	width: 100%;
	height: 3rem;
	margin: 0;
	padding: 0;
	position: relative;

	input {
		display: flex;
		width: 100%;
		height: 100%;
		border: none;
		-webkit-appearance: none;
	}
`;

const Button = styled.button`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	background-color: var(--color-white);
	&,
	&[type="submit"] {
		-webkit-appearance: none;
		margin: 0;
		padding: 0;
		border: none;
	}

	svg {
		width: ${rem("18px")};
		height: ${rem("18px")};
		display: flex;
	}
`;

export default memo(UISearchForm);
