import * as Yup from 'yup';

export const ChooseSourcesValidationSchema = Yup.object().shape({
	list: Yup.array()
		.of(
			Yup.object().shape({
				name: Yup.string().required('Please add a source name'),
				category: Yup.string().required('Please add a source category'),
			}),
		)
		.min(3, 'Add at least three options')
		.required('This field is required'),
});

export default ChooseSourcesValidationSchema;
