import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};
	if (Validator.isNull(data.username)) {
		errors.username = 'This Field is required';
	}
	if (Validator.isNull(data.email)) {
		errors.email = 'This Field is required';
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if (Validator.isNull(data.password)) {
		errors.password = 'This Field is required';
	}
	if (Validator.isNull(data.passwordConfrimation)) {
		errors.passwordConfrimation = 'This Field is required';
	}
	if (!Validator.equals(data.password, data.passwordConfrimation)) {
		errors.passwordConfrimation = 'Passwords does not match';
	}
	if (Validator.isNull(data.timezone)) {
		errors.timezone = 'This Field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}
