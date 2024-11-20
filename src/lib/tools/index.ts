// place files you want to import through the `$lib` alias in this folder.
export const formInputs = [
	{ title: 'Full Name', key: 'name', type: 'input', required: true, hasError: false },
	{ title: 'Email', key: 'email', type: 'input', required: true, hasError: false },
	{ title: 'Phone', key: 'phone', type: 'input', required: true, hasError: false },
	{ title: 'Zipcode', key: 'zipcode', type: 'input', required: true, hasError: false },
	{
		title: 'Prefered Contact Method',
		key: 'contactMethod',
		type: 'radio',
		options: ['Text', 'Call', 'Email'],
		required: false,
		hasError: false
	},
	{ title: 'Message', key: 'message', type: 'textarea', required: false, hasError: false }
];
