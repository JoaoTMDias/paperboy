/* eslint-disable jsx-a11y/label-has-associated-control */
// Libraries
import React, { FunctionComponent, useRef } from "react";
import { useToggle } from "react-use";
import { useFormik } from "formik";
import useNewsApi, { ISearchOptions } from "helpers/custom-hooks/useNewsAPI";
import UISection from "components/section";
import { IconSearch } from "components/icons";
import IconSearchSettings from "components/icons/search-settings";
import ContentSpinner from "components/content-spinner";
import { INewsArticle } from "data/interfaces";
import ErrorMessage from "components/errors";
import ArticleThumbnail from "components/thumbnails/thumbnails-large.component";
import { EThumbnailType } from "components/thumbnails/types.d";
import { DisplayFormikState } from "helpers/formik";
import SearchFormValidationSchema from "./validation-schema";
import { Form, Input, Fieldset, Button, Select, SelectWrapper } from "./styles";
import { Item, List } from "../../news/styles";

const SORT_BY_OPTIONS = ["relevancy", "popularity", "publishedAt"];
const SORT_BY_OPTIONS_LABEL = [
	{
		label: "Most relevant",
		value: SORT_BY_OPTIONS[0],
	},
	{
		label: "Most Popular",
		value: SORT_BY_OPTIONS[1],
	},
	{
		label: "Last published",
		value: SORT_BY_OPTIONS[2],
	},
];

const PAGE_SIZE_OPTIONS = [20, 40, 60, 80, 100];

const INITIAL_VALUES: ISearchOptions = {
	term: "",
	sortBy: "publishedAt",
	pageSize: 20,
};

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent}
 */
const SearchForm: FunctionComponent = () => {
	const [showFilters, setShowFilters] = useToggle(false);
	const { current: isProduction } = useRef(process.env.NODE_ENV === "production");

	const { data, error, loading, searchForTerm } = useNewsApi<INewsArticle>({
		type: "everything",
		options: [],
	});
	const formik = useFormik({
		initialValues: INITIAL_VALUES,
		validateOnBlur: true,
		validateOnChange: true,
		validationSchema: SearchFormValidationSchema,
		onSubmit: (values) => {
			searchForTerm(values);
		},
	});

	const numberOfArticles = data?.articles?.length || 0;

	/**
	 * Renders the Sort By select
	 *
	 * @returns {JSX.Element}
	 */
	function renderSortBySelect() {
		const options = SORT_BY_OPTIONS_LABEL.map((opt) => {
			return <option key={opt.value} value={opt.value} label={opt.label} />;
		});

		return (
			<SelectWrapper className="select">
				<label htmlFor="select-sort-by" className="select__label">
					Sort By
				</label>
				<div className="select__input">
					<Select
						id="select-sort-by"
						name="sortBy"
						onChange={formik.handleChange}
						defaultValue={INITIAL_VALUES.sortBy}
						onBlur={formik.handleBlur}
					>
						<option value="" label="Sort by..." disabled />
						{options}
					</Select>
					<div className="select__arrow" />
				</div>
			</SelectWrapper>
		);
	}

	/**
	 * Renders the Page Size select
	 *
	 * @returns {JSX.Element}
	 */
	function renderPageSizeSelect() {
		const options = PAGE_SIZE_OPTIONS.map((opt) => {
			const label = `${opt}`;
			return (
				<option key={opt} label={label}>
					{opt}
				</option>
			);
		});

		return (
			<SelectWrapper className="select">
				<label htmlFor="select-page-size" className="select__label">
					Results
				</label>
				<div className="select__input">
					<Select
						id="select-page-size"
						name="pageSize"
						defaultValue={INITIAL_VALUES.pageSize}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					>
						<option defaultValue="" label="Results..." disabled />
						{options}
					</Select>
					<div className="select__arrow" />
				</div>
			</SelectWrapper>
		);
	}

	/**
	 * Renders the results
	 *
	 * @returns {JSX.Element}
	 */
	function renderResults() {
		const src = data?.articles.map((article, index) => {
			const key = `search-news__article__${article.url}-${index}-key`;
			const id = `search-news__article__${article.url}-${index}-id`;

			return (
				<Item className="list__item" key={key} id={key}>
					<ArticleThumbnail id={id} options={article} type={EThumbnailType.SMALL} />
				</Item>
			);
		});

		return <List data-layout="search">{src}</List>;
	}

	/**
	 * Renders the content
	 *
	 * @returns {JSX.Element}
	 */
	function renderResultsContent() {
		if (!loading) {
			return renderResults();
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
					<Fieldset role="group" type="input">
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
							placeholder="Find articles, people..."
							minLength={3}
							maxLength={100}
						/>
						<Button type="submit">
							<IconSearch />
							<span className="sr-only">Submit search</span>
						</Button>
						<Button type="button" onClick={() => setShowFilters()}>
							<IconSearchSettings isActive={showFilters} />
							<span className="sr-only">Submit search</span>
						</Button>
					</Fieldset>
					{showFilters && (
						<Fieldset role="group" type="filter">
							{renderSortBySelect()}
							{renderPageSizeSelect()}
						</Fieldset>
					)}
				</Form>
				{!isProduction && (
					<DisplayFormikState
						values={formik.values}
						errors={formik.errors}
						touched={formik.touched}
						isSubmitting={formik.isSubmitting}
					/>
				)}
			</UISection>

			{formik.touched && !loading && (
				<UISection id="search-results" title={`Results found (${numberOfArticles})`}>
					{renderResultsContent()}
				</UISection>
			)}
		</>
	);
};

export default React.memo(SearchForm);
