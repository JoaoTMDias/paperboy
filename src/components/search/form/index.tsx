// Libraries
import React, { FunctionComponent } from "react";
import { useFormik } from "formik";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import UISection from "components/section";
import { IconSearch } from "components/icons";
import ContentSpinner from "components/content-spinner";
import { INewsArticle } from "data/interfaces";
import ErrorMessage from "components/errors";
import SearchFormValidationSchema from "./validation-schema";
import { Form, Input, Fieldset, SearchButton } from "./styles";

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent}
 */
const SearchForm: FunctionComponent = () => {
	const { data, error, loading, searchForTerm } = useNewsApi<INewsArticle>({
		type: "everything",
		options: [],
	});
	const formik = useFormik({
		initialValues: {
			term: "",
		},
		validateOnBlur: true,
		validateOnChange: true,
		validationSchema: SearchFormValidationSchema,
		onSubmit: (values) => {
			searchForTerm(values.term);
		},
	});

	const numberOfArticles = data?.totalResults || 0;

	function renderListOfArticles() {
		if (!loading) {
			<p>{data}</p>;
		}

		if (error) {
			return <ErrorMessage />;
		}
		return <ContentSpinner />;
	}

	return (
		<>
			<UISection
				id="search-form-wrapper"
				style={{
					marginBottom: "calc(var(--global-margin) * 2)",
				}}
			>
				<Form id="search-form" data-testid="search-form" onSubmit={formik.handleSubmit}>
					<Fieldset>
						<label htmlFor="term" className="sr-only">
							Search News articles
						</label>
						<Input
							id="term"
							data-testid="search-form-input"
							name="term"
							type="search"
							onChange={formik.handleChange}
							value={formik.values.term}
							placeholder="Search for news, articles, people..."
							minLength={3}
							maxLength={100}
						/>
						<SearchButton type="submit">
							<IconSearch />
							<span className="sr-only">Submit search</span>
						</SearchButton>
					</Fieldset>
				</Form>
			</UISection>
			<UISection id="search-results" title={`Results found (${numberOfArticles})`}>
				{formik.touched.term && renderListOfArticles()}
			</UISection>
		</>
	);
};

export default React.memo(SearchForm);
