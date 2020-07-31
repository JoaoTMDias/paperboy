import { object, string } from "yup";

export const SearchFormValidationSchema = object().shape({
	term: string()
		.min(3, "Type at least 3 characters")
		.max(100, "The maximum is 100 characters")
		.required("This field is required"),
});

export default SearchFormValidationSchema;
