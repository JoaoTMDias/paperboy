/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		"cypress/globals": true,
	},
	extends: [
		"plugin:cypress/recommended",
		"plugin:chai-friendly/recommended",
		"plugin:jest/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"airbnb",
		"prettier",
		"prettier/react",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		window: true,
		document: true,
		localStorage: true,
		FormData: true,
		FileReader: true,
		Blob: true,
		navigator: true,
		Headers: true,
		Request: true,
		fetch: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["cypress", "chai-friendly", "react", "react-hooks", "@typescript-eslint", "prettier"],
	rules: {
		"@typescript-eslint/interface-name-prefix": [2, "always"],
		"@typescript-eslint/class-name-casing": 2,
		"@typescript-eslint/explicit-member-accessibility": 0,
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-var-requires": 0,
		"react/prop-types": 0,
		"no-underscore-dangle": 0,
		"import/imports-first": ["error", "absolute-first"],
		"import/newline-after-import": "error",
		"import/prefer-default-export": 0,
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-props-no-spreading": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["draftState"] }],
		"no-unused-expressions": 0,
		"chai-friendly/no-unused-expressions": 2,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				directory: "./",
			},
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				moduleDirectory: ["node_modules", "src/"],
			},
		},
	},
};
