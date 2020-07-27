import React, { useState, useEffect, useMemo } from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { Formik, FieldArray, FieldArrayRenderProps, FormikHelpers } from "formik";
import { navigate } from "gatsby";
import Meta from "components/meta/index";
import {
	Confirm,
	Container,
	Layout,
	Modal,
	SourcesList,
	UIButton,
	UICallToAction,
	ContentSpinner,
	TopNavigation,
	TopNavigationWithTitle,
	UISection,
} from "components/index.components";

// Redux
import {
	IGlobalStoreState,
	IListOfCategorizedSources,
	IAllAvailableNewsSource,
	IBasePageProps,
	ChosenNewsSources,
	IGetAllNewsSources,
} from "data/interfaces/index";
import {
	getAvailableNewSourcesFromLanguage,
	getUserCountryCodeByCoordinates,
	SetChosenNewsSources,
} from "data/redux/actions/index.actions";

import { NEWS_PAGE, ONBOARDING_PRELOADER } from "data/constants/index.constants";

// Data
import Top20EditorSuggestions from "data/dummy/news-sources-suggestions";

// Validation Schema
import ChooseSourcesValidationSchema from "./choose-sources-validation-schema";
import useNewsApi from "helpers/custom-hooks/useNewsAPI";
import { filterData } from "helpers/filter-data";

interface LanguageSupport {
	hasLocation: boolean;
	data: any;
}

export interface IChosenSource {
	name: string;
	category: string;
}

export interface ChosenSources {
	list: IChosenSource[];
}

export interface IChooseSourcesPageActionsProps {
	getAvailableNewSourcesFromLanguage: (language: string) => (dispatch: Dispatch<AnyAction>) => void;
	getUserCountryCodeByCoordinates: (latitude: number, longitude: number) => (dispatch: Dispatch<AnyAction>) => void;
	SetChosenNewsSources: (
		sources: IChosenSource[],
	) => {
		type: string;
		payload: {
			data: ChosenNewsSources;
		};
	};
}

export interface IChooseSourcesPageProps extends IBasePageProps {
	authenticated: boolean;
	geoLocation: boolean;
	userLanguage: LanguageSupport | null;
	chosenSources: any;
	actions: IChooseSourcesPageActionsProps;
}

const MINIMUM_SELECTED = 3;

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 */
const ChooseSourcesPage: React.FunctionComponent<IChooseSourcesPageProps> = ({
	authenticated,
	geoLocation,
	userLanguage,
	chosenSources,
	actions,
}) => {
	const { data, error, loading } = useNewsApi<IGetAllNewsSources>({
		type: "sources",
	});
	const result = useMemo(() => filterData(data?.sources), [data]);
	const [askForLocation, setAskForLocation] = useState(false);

	useEffect(() => {
		getUserSourcesByLanguage(userLanguage);
	}, [userLanguage]);

	useEffect(() => {
		setAskForLocation(true);
	}, [geoLocation]);

	// When the user submit its sources and the prop is updated, it redirects to the preloader page
	useEffect(() => {
		if (Object.keys(chosenSources?.latest).length > 0) {
			navigate(ONBOARDING_PRELOADER);
		}
	}, [chosenSources]);

	/**
	 * @description Attemps to find the user's location using the HTML5 GeoLocation API.
	 * The important info needed are the latitude and longitude.
	 * If they are present, then dispatches an action to try to find the user's country code.
	 * @date 2019-01-07
	 * @memberof ChooseSourcesPage
	 */
	function getUserCountry() {
		/**
		 * @description The getCurrentPosition request treated as a Promise.
		 * On first attempt, the browser will ask the user for permission to
		 * use the GPS or other location features on the device.
		 * @date 2019-01-07
		 */
		const getPosition = () =>
			new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});

		if (askForLocation) {
			getPosition()
				.then((position: any) => {
					if (position.coords) {
						const { latitude } = position.coords;
						const { longitude } = position.coords;

						actions.getUserCountryCodeByCoordinates(latitude, longitude);
					}
				})
				.catch((err) => {
					console.error(err.message);
				});
		}
	}

	/**
	 * @description Fetches a list of available news sources from a specific country code.
	 * @date 2019-01-08
	 * @param {*} content
	 * @memberof ChooseSourcesPage
	 */
	function getUserSourcesByLanguage(content: any) {
		if (content.hasLocation && content.data.countryCode) {
			const language: string = `${content.data.countryCode}`.toLowerCase();
			actions.getAvailableNewSourcesFromLanguage(language);
		}
	}

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
	 * @description Updates the store with the new chosen sources.
	 * @date 2019-01-16
	 * @param {MouseEvent} event
	 * @memberof ChooseSourcesPage
	 */
	function handleSubmit(list: IChosenSource[]) {
		if (list.length >= MINIMUM_SELECTED) {
			actions.SetChosenNewsSources(list);
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
			<Modal>
				<Confirm
					title="Use location services?"
					description="Can I use your devices' location to find any news sources related to your country/language?"
					onCancel={() => console.log("canceled")}
					onConfirm={() => getUserCountry()}
				/>
			</Modal>
			<Formik
				initialValues={{
					list: [],
				}}
				onSubmit={(values: ChosenSources, actions: FormikHelpers<ChosenSources>) => {
					handleSubmit(values.list);
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

					const selectText = values.list.length > 0
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

ChooseSourcesPage.defaultProps = {
	authenticated: false,
	chosenSources: null,
};

function mapStateToProps(state: IGlobalStoreState) {
	return {
		authenticated: state.preferences.authenticated,
		sources: state.news.sources,
		chosenSources: state.preferences.chosenSources.items,
		geoLocation: state.general.supports.geoLocation,
		userLanguage: state.general.userLanguage,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(
			{
				getAvailableNewSourcesFromLanguage,
				getUserCountryCodeByCoordinates,
				SetChosenNewsSources,
			},
			dispatch,
		),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSourcesPage);
