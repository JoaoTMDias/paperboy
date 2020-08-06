/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { object, string, number } from "yup";

export const SearchFormValidationSchema = object().shape({
	term: string()
		.min(3, "Type at least 3 characters")
		.max(100, "The maximum is 100 characters")
		.required("This field is required"),
	sortBy: string().oneOf(["relevancy", "popularity", "publishedAt"]).required("Choose on of the options from the list"),
	pageSize: number().oneOf([20, 40, 60, 80, 100]).required("Choose on of the options from the list"),
});

export default SearchFormValidationSchema;
