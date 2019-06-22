import { produce } from 'immer';
import { Redirect } from '@reach/router';
import * as React from 'react';
import { connect } from 'react-redux';
import {
	Formik,
	FormikActions,
	FieldArray,
	FieldArrayRenderProps,
	FormikProps,
} from 'formik';
import { findIndex, isMatch } from 'lodash';
import { navigate } from 'gatsby';
import {
	Confirm,
	Container,
	Layout,
	Modal,
	SourcesList,
	UIButton,
	UICallToAction,
	UIContentSpinner,
	TopNavigation,
	TopNavigationWithTitle,
	UISection,
} from '../../components/index.components';

// Redux
import {
	NewsSourcesCategories,
	IGlobalStoreState,
	IListOfCategorizedSources,
	IAllAvailableNewsSource,
} from '../../data/interfaces/index.interface';
import {
	getAllAvailableNewsSources,
	getAvailableNewSourcesFromLanguage,
	getUserCountryCodeByCoordinates,
	SetChosenNewsSources,
} from '../../data/redux/actions/index.actions';

import {
	NEWS_PAGE,
	ONBOARDING_PRELOADER,
} from '../../data/constants/index.constants';

// Data
import Top20EditorSuggestions from '../../data/dummy/news-sources-suggestions';

// Validation Schema
import ChooseSourcesValidationSchema from './choose-sources-validation-schema';

interface LanguageSupport {
	hasLocation: boolean;
	data: any;
}

export interface IChosenSource {
	name: string;
	category: string;
}

interface ChosenSources {
	list: IChosenSource[];
}

interface IChooseSourcesPageProps {
	authenticated: boolean;
	dispatch: any;
	sources: IListOfCategorizedSources[] | null;
	geoLocation: boolean;
	userLanguage: LanguageSupport | null;
	chosenSources: any;
}

interface IChooseSourcesPageState {
	searchBarIsVisible: boolean;
	hasData: boolean;
	askForLocation: boolean;
	chosen: ChosenSources;
}

/**
 * @description The Choose Sources Page is where the user can pick his favorite news sources from a list.
 * @date 2019-01-06
 * @class ChooseSourcesPage
 * @extends {React.Component<IChooseSourcesPageProps, IChooseSourcesPageState>}
 */
class ChooseSourcesPage extends React.PureComponent<
	ChooseSourcesPageProps,
	ChooseSourcesPageState
> {
	constructor(props: IChooseSourcesPageProps) {
		super(props);

		this.state = {
			searchBarIsVisible: false,
			hasData: false,
			askForLocation: false,
			chosen: {
				list: [],
			},
		};
	}

	static defaultProps = {
		sources: null,
		authenticated: false,
		chosenSources: null,
	};

	/**
	 * @description When the Page mounts, adds an event listener for the search bar
	 * scroll event, and also fetches a list of all the available news sources to choose
	 * from
	 * @date 2018-12-29
	 * @memberof ChooseSourcesPage
	 */
	componentDidMount() {
		this.props.dispatch(getAllAvailableNewsSources());
	}

	/**
	 * @description Dispatches a number of actions depending on updated props
	 * @date 2018-12-29
	 * @param {*} prevProps
	 * @param {*} prevState
	 * @memberof ChooseSourcesPage
	 */
	componentDidUpdate(prevProps: any, prevState: any) {
		// If there are news sources to display as a list
		if (prevProps.sources !== this.props.sources) {
			this.setState({
				hasData: true,
			});
		}

		// If there is a userLanguage found
		if (prevProps.userLanguage !== this.props.userLanguage) {
			this.getUserSourcesByLanguage(this.props.userLanguage);
		}

		// If the user's device supports geoLocation features
		if (prevProps.geoLocation !== this.props.geoLocation) {
			this.setState({
				askForLocation: true,
			});
		}

		if (prevProps.chosenSources !== this.props.chosenSources) {
			navigate(ONBOARDING_PRELOADER);
		}
	}

	/**
	 * @description Attemps to find the user's location using the HTML5 GeoLocation API.
	 * The important info needed are the latitude and longitude.
	 * If they are present, then dispatches an action to try to find the user's country code.
	 * @date 2019-01-07
	 * @memberof ChooseSourcesPage
	 */
	getUserCountry() {
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

		if (this.state.askForLocation) {
			getPosition()
				.then((position: any) => {
					if (position.coords) {
						const { latitude } = position.coords;
						const { longitude } = position.coords;

						this.props.dispatch(
							getUserCountryCodeByCoordinates(
								latitude,
								longitude,
							),
						);
					}
				})
				.catch(err => {
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
	getUserSourcesByLanguage(content: any) {
		if (content.hasLocation && content.data.countryCode) {
			const language: string = `${content.data.countryCode}`.toLowerCase();
			this.props.dispatch(getAvailableNewSourcesFromLanguage(language));
		}
	}

	/**
	 * @description Render a list of suggested editorial sources
	 * @author João Dias
	 * @date 2019-06-21
	 * @param {IAllAvailableNewsSource[]} data
	 * @param {FormikProps<ChosenSources>} formProps
	 * @returns
	 * @memberof ChooseSourcesPage
	 */
	renderListOfSuggestedSources(
		data: IAllAvailableNewsSource[],
		formProps: FormikProps<ChosenSources>,
	) {
		const { values } = formProps;

		return (
			<FieldArray
				name="list"
				render={(arrayHelpers: FieldArrayRenderProps) => {
					return (
						<UISection
							id="sources-editors-suggestions"
							title="Editor's Suggestions"
						>
							<SourcesList
								layout="horizontal"
								label="The Top 20 Editor's Suggestions for news sources."
								data={data}
								selectedOptions={formProps.values.list}
								handleChange={(
									event: React.SyntheticEvent,
									position: number,
									category: string,
								) => {
									this.handleClickOnItem(
										event,
										position,
										category,
										values,
										arrayHelpers,
									);
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
	 * @returns
	 * @memberof ChooseSourcesPage
	 */
	renderListOfCategories(
		data: IListOfCategorizedSources[],
		formProps: FormikProps<ChosenSources>,
	) {
		const { values } = formProps;
		return (
			<FieldArray
				name="list"
				render={(arrayHelpers: FieldArrayRenderProps) => {
					return (
						<article>
							{data.map(
								(
									category: IListOfCategorizedSources,
									index,
								) => {
									const title = category.name;
									return (
										<UISection
											key={`sources-${title}-${index}`}
											id={`sources-${title}`}
											title={title}
											grouped
										>
											<SourcesList
												layout="vertical"
												label="Language Specific News Sources"
												data={category.items}
												selectedOptions={
													formProps.values.list
												}
												handleChange={(
													event: React.SyntheticEvent,
													position: number,
													category: string,
												) => {
													this.handleClickOnItem(
														event,
														position,
														category,
														values,
														arrayHelpers,
													);
												}}
											/>
										</UISection>
									);
								},
							)}
						</article>
					);
				}}
			/>
		);
	}

	/**
	 * @description
	 * @date 2019-01-09
	 * @param {React.SyntheticEvent} event
	 * @param {string} key
	 * @param {number} position
	 * @memberof ChooseSourcesPage
	 */
	handleClickOnItem(
		event: React.SyntheticEvent,
		position: number,
		category: string,
		arrayValues: ChosenSources,
		arrayHelpers: FieldArrayRenderProps,
	) {
		event.preventDefault();
		const inputTarget = event.target as HTMLInputElement;
		const clickedItem: IChosenSource = {
			name: inputTarget.value,
			category,
		};

		const hasSelectedItemAlready =
			findIndex(arrayValues.list, (item: IChosenSource) => {
				return isMatch(item, clickedItem);
			}) > -1;

		if (hasSelectedItemAlready) {
			arrayHelpers.remove(position);
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
	handleSubmit(list: IChosenSource[]) {
		const { dispatch } = this.props;

		if (list.length >= 3) {
			dispatch(SetChosenNewsSources(list));
		}
	}

	public render() {
		const { authenticated, sources } = this.props;
		const { hasData, chosen } = this.state;

		if (authenticated) {
			return <Redirect to={NEWS_PAGE} noThrow />;
		}
		return (
			<Layout authenticated={authenticated}>
				<TopNavigation shadow="hairline">
					<TopNavigationWithTitle
						title="What do you fancy reading?"
						subtitle="Breaking news from over 30,000 sources"
					/>
				</TopNavigation>
				<Modal delay={100000}>
					<Confirm
						title="Use location services?"
						description="Can I use your devices' location to find any news sources related to your country/language?"
						onCancel={() => console.log('canceled')}
						onConfirm={() => this.getUserCountry()}
					/>
				</Modal>
				<Formik
					initialValues={chosen}
					onSubmit={(
						values: ChosenSources,
						actions: FormikActions<ChosenSources>,
					) => {
						this.handleSubmit(values.list);
						setTimeout(() => {
							actions.setSubmitting(false);
						}, 2000);
					}}
					validationSchema={ChooseSourcesValidationSchema}
					validateOnBlur
					validateOnChange
				>
					{props => {
						const {
							values,
							dirty,
							isSubmitting,
							handleSubmit,
							submitForm,
						} = props;

						const disableSubmitButton = !!(
							values &&
							values.list.length < 3 &&
							(!dirty || isSubmitting)
						);

						return (
							<form
								id="choose-sources-form"
								onSubmit={handleSubmit}
								className="modal-dialog__container"
							>
								<Container
									fullwidth
									isFixed
									title="Current Page is: Choose News Sources."
									offsetTop="1rem"
								>
									{Top20EditorSuggestions &&
										this.renderListOfSuggestedSources(
											Top20EditorSuggestions,
											props,
										)}
									{hasData && sources ? (
										this.renderListOfCategories(
											sources,
											props,
										)
									) : (
										<UIContentSpinner isFullPage />
									)}
								</Container>
								<UICallToAction>
									<UIButton
										type="submit"
										text="Let's Go"
										label="Click to set these as your news sources."
										onClick={() => submitForm()}
										disabled={disableSubmitButton}
									/>
								</UICallToAction>
							</form>
						);
					}}
				</Formik>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
	sources: state.news.sources,
	chosenSources: state.preferences.chosenSources.items,
	geoLocation: state.general.supports.geoLocation,
	userLanguage: state.general.userLanguage,
});

export default connect(mapStateToProps)(ChooseSourcesPage);
