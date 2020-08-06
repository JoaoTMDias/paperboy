/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
