import React, { FunctionComponent, useEffect, useMemo, useContext, useCallback } from "react";
import { Redirect } from "@reach/router";
import { Formik, FieldArray, FieldArrayRenderProps, FormikHelpers } from "formik";
import { navigate } from "gatsby";
import Meta from "components/meta/index";
import {
	Container,
	Layout,
	SourcesList,
	UIButton,
	UICallToAction,
	ContentSpinner,
	TopNavigation,
	TopNavigationWithTitle,
	UISection,
} from "components/index.components";
import { IListOfCategorizedSources, IAllAvailableNewsSource, IGetAllNewsSources } from "data/interfaces/index";
import { NEWS_PAGE, ONBOARDING_PRELOADER } from "data/constants/index.constants";
import Top20EditorSuggestions from "data/dummy/news-sources-suggestions";
import ChooseSourcesValidationSchema from "./choose-sources-validation-schema";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import { filterData } from "helpers/filter-data";
import { filterSources } from "helpers/filter-sources";
import PreferencesContext from "./../../containers/preferences/context";

export interface IChosenSource {
	name: string;
	category: string;
}

export interface ChosenSources {
	list: IChosenSource[];
}

const MINIMUM_SELECTED = 3;

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 */
const ChooseSourcesPage: FunctionComponent = () => {
	const { authenticated, chosenSources, setChosenNewsSources } = useContext(PreferencesContext);
	const { data, error, loading } = useNewsApi<IGetAllNewsSources>({
		type: "sources",
	});

	const result = useMemo(() => filterData(data?.sources), [data]);

	// When the user submit its sources and the prop is updated, it redirects to the preloader page
	useEffect(() => {
		if (Object.keys(chosenSources?.items?.latest).length > 0) {
			navigate(ONBOARDING_PRELOADER);
		}
	}, [chosenSources]);

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

	const handleSubmitForm = useCallback(
		(list: IChosenSource[]) => {
			if (list.length >= MINIMUM_SELECTED) {
				const filtered = filterSources(list);
				setChosenNewsSources(filtered);
			}
		},
		[setChosenNewsSources]);

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
			return <p>{`${error}`}</p>;
		}

		if (result) {
			return renderListOfCategories(result, values);
		}
	}

	if (authenticated) {
		return <Redirect to={NEWS_PAGE} noThrow />;
	}

	return (
		<Layout authenticated={authenticated}>
			<Meta title="Choose your favorite sources" location={location} />
			<TopNavigation shadow="hairline">
				<TopNavigationWithTitle title="What do you fancy reading?" subtitle="Breaking news from over 30,000 sources" />
			</TopNavigation>
			<Formik
				initialValues={{
					list: [],
				}}
				onSubmit={(values: ChosenSources, actions: FormikHelpers<ChosenSources>) => {
					handleSubmitForm(values.list);

					setTimeout(() => {
						actions.setSubmitting(false);
					}, 1000);
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
							<Container fullwidth isFixed offsetTop="1rem">
								{Top20EditorSuggestions && renderListOfSuggestedSources(Top20EditorSuggestions, values.list)}
								{renderContent(values.list)}
							</Container>
							<UICallToAction>
								<UIButton
									type="submit"
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
		</Layout>
	);
};

export default ChooseSourcesPage;
