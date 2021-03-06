/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, memo, useRef, useCallback, useMemo } from "react";
import { Formik, FieldArray, FieldArrayRenderProps } from "formik";
import { useKeyPressEvent } from "react-use";
import { IListOfCategorizedSources, IAllAvailableNewsSource, ChosenNewsSources } from "data/interfaces/index";
import Top20EditorSuggestions from "data/dummy/news-sources-suggestions";
import { filterSources } from "helpers/filter-sources";
import UISection from "components/section";
import SourcesList from "components/data-entry/sources/source-list.component";
import UICallToAction from "components/call-to-action";
import { UIButton } from "components/button";
import Container from "components/container/index";
import { IChosenSource } from "pages/onboarding/choose-sources";
import ContentSpinner from "components/content-spinner";
import ErrorMessage from "components/errors";
import ChooseSourcesValidationSchema from "./choose-sources-validation-schema";

interface IChooseSourcesForm {
	error: Error | null;
	loading: boolean;
	result: IListOfCategorizedSources[] | null;
	handleSubmitForm(list: ChosenNewsSources): void;
}

const MINIMUM_SELECTED = 3;

const ChooseSourcesForm: FunctionComponent<IChooseSourcesForm> = ({ error, loading, result, handleSubmitForm }) => {
	const submitButtonRef = useRef<HTMLButtonElement>();

	const setFocusOnSubmitButtonFn = useCallback(() => {
		if (submitButtonRef && submitButtonRef.current) {
			submitButtonRef.current.focus();
		}
	}, [submitButtonRef]);

	useKeyPressEvent("Escape", setFocusOnSubmitButtonFn);
	/**
	 *
	 *
	 * @param {string} target
	 * @param {string} category
	 * @param {IChosenSource[]} arrayValues
	 * @param {FieldArrayRenderProps} arrayHelpers
	 * @returns
	 */
	function handleClickOnItem(
		target: string,
		category: string,
		arrayValues: IChosenSource[],
		arrayHelpers: FieldArrayRenderProps,
	) {
		const clickedItem: IChosenSource = {
			name: target,
			category,
		};

		const index = arrayValues.findIndex((item) => {
			return item.name === clickedItem.name;
		});
		const hasSelectedItemAlready = index >= 0;

		if (hasSelectedItemAlready) {
			arrayHelpers.remove(index);
			return false;
		}

		arrayHelpers.push(clickedItem);
		return true;
	}

	/**
	 * @description Displays a list of different categories of news sources.
	 * While there is no data, a spinner is shown.
	 * @date 2019-01-08
	 * @param {ListOfCategories} data
	 * @param {IChosenSource[]} selectedOptions
	 * @returns
	 * @memberof ChooseSourcesPage
	 */
	function renderListOfCategories(data: IListOfCategorizedSources[], selectedOptions: IChosenSource[]) {
		const list = (
			<FieldArray
				name="list"
				render={(arrayHelpers) => {
					return (
						<article data-testid="all-sources-sections">
							{data?.map((category: IListOfCategorizedSources) => {
								const title = category.name;
								const id = `sources-${title}`;

								return (
									<UISection key={id} id={id} title={title} amount={category.length} grouped>
										<SourcesList
											layout="vertical"
											label="Language Specific News Sources"
											data={category.items}
											selectedOptions={selectedOptions}
											handleChange={(target, category) => {
												handleClickOnItem(target, category, selectedOptions, arrayHelpers);
											}}
										/>
									</UISection>
								);
							})}
						</article>
					);
				}}
			/>
		);

		return list;
	}

	function renderContent(values: IChosenSource[]) {
		if (loading) {
			return <ContentSpinner />;
		}
		if (error) {
			return <ErrorMessage />;
		}

		if (result) {
			return renderListOfCategories(result, values);
		}
	}

	/**
	 * @description Render a list of suggested editorial sources
	 * @author João Dias
	 * @date 2019-06-21
	 * @param {IAllAvailableNewsSource[]} data
	 * @param {IChosenSource[]} values
	 * @returns
	 * @memberof ChooseSourcesPage
	 */
	function renderListOfSuggestedSources(data: IAllAvailableNewsSource[], values: IChosenSource[]) {
		return (
			<FieldArray
				name="list"
				render={(arrayHelpers: FieldArrayRenderProps) => {
					return (
						<UISection id="sources-editors-suggestions" amount={data.length} title="Editor's Suggestions">
							<SourcesList
								layout="horizontal"
								label="The Top 20 Editor's Suggestions for news sources."
								data={data}
								selectedOptions={values}
								handleChange={(target, category: string) => {
									handleClickOnItem(target, category, values, arrayHelpers);
								}}
							/>
						</UISection>
					);
				}}
			/>
		);
	}

	return (
		<Formik
			initialValues={{
				list: [],
			}}
			onSubmit={(values, actions) => {
				if (values.list.length >= MINIMUM_SELECTED) {
					const filtered = filterSources(values.list);
					handleSubmitForm(filtered);
				}

				setTimeout(() => {
					actions.setSubmitting(false);
				}, 10000);
			}}
			validationSchema={ChooseSourcesValidationSchema}
			validateOnBlur
			validateOnChange
		>
			{({ values, dirty, isSubmitting, handleSubmit, submitForm }) => {
				const hasMinimum = !!(values.list && values.list.length >= MINIMUM_SELECTED);
				const hasTouchedForm = dirty || !isSubmitting;
				const isEnabled = hasMinimum && hasTouchedForm;

				const selectText =
					values.list.length > 0
						? `Select ${MINIMUM_SELECTED - values.list.length} more items`
						: `Select at least ${MINIMUM_SELECTED} items`;

				return (
					<form id="choose-sources-form" onSubmit={handleSubmit} className="modal-dialog__container">
						{hasMinimum && (
							<div className="sr-only" aria-live="polite" aria-atomic="true">
								Press Escape to set focus on the submit button
							</div>
						)}
						<Container fullwidth isFixed offsetTop="1rem">
							{Top20EditorSuggestions && renderListOfSuggestedSources(Top20EditorSuggestions, values.list)}
							{renderContent(values.list)}
						</Container>
						<UICallToAction>
							<UIButton
								type="submit"
								ref={submitButtonRef}
								text={!isEnabled ? selectText : "Let's Go!"}
								label="Click to set these as your news sources."
								onClick={() => submitForm()}
								disabled={!isEnabled}
							/>
						</UICallToAction>
					</form>
				);
			}}
		</Formik>
	);
};

export default memo(ChooseSourcesForm);
