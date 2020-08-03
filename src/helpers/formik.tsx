import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { ISearchOptions } from './custom-hooks/useNewsAPI';

interface IDisplayFormikStateProps {
	touched: FormikTouched<ISearchOptions>;
	errors: FormikErrors<ISearchOptions>;
	values: any;
	isSubmitting: boolean;
}

export function DisplayFormikState({ touched, errors, values, isSubmitting }: IDisplayFormikStateProps): JSX.Element {
	return (
		<div style={{ margin: "1rem 0", background: "#f6f8fa", color: "black", padding: ".5rem" }}>
			<strong>Injected Formik props (the form's state)</strong>
			<div style={{}}>
				<code>touched:</code> {JSON.stringify(touched, null, 2)}
			</div>
			<div>
				<code>errors:</code> {JSON.stringify(errors, null, 2)}
			</div>
			<div>
				<code>values:</code> {JSON.stringify(values, null, 2)}
			</div>
			<div>
				<code>isSubmitting:</code> {JSON.stringify(isSubmitting, null, 2)}
			</div>
		</div>
	);
}
