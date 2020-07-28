import { object, array, string } from "yup";

export const ChooseSourcesValidationSchema = object().shape({
	list: array()
		.of(
			object().shape({
				name: string().required("Please add a source name"),
				category: string().required("Please add a source category"),
			}),
		)
		.min(3, "Add at least three options")
		.required("This field is required"),
});

export default ChooseSourcesValidationSchema;
