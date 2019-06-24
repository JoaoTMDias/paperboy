module.exports = {
	plugins: ['import'],

	env: {
		es6: true,
		jest: true,
		browser: true,
	},

	globals: {
		window: true,
		document: true,
		localStorage: true,
		FormData: true,
		FileReader: true,
		Blob: true,
		navigator: true,
	},

	rules: {
		'import/no-unresolved': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.js',
					'**/*.spec.js',
					'**/*.stories.tsx',
					'**/*.stories.jsx',
				],
			},
		],
		'comma-dangle': [1, 'always-multiline'],

		'no-param-reassign': [
			'error',
			{ ignorePropertyModificationsFor: ['draftState', 'draft'] },
		],
		'class-methods-use-this': 'off',
		'require-jsdoc': 2,
		'lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				afterBlockComment: false,
				beforeLineComment: true,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
			},
		],
		quotes: ['warn', 'single'],
		indent: 'off',
	},
};
