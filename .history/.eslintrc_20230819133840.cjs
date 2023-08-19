module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'airbnb-base',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'no-var': 2,
		'indent': [2, 2],
		'no-tabs': 1,
		'comma-dangle': [2, 'never'],
		'quote-props': [1, 'always']
	}
};
