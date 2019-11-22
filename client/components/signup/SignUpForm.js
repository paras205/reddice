import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import validateInput from '../../../server/shared/validations/signup';
import TextGroupField from '../common/TextGroupField';

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfrimation: '',
			timezone: '',
			errors: {},
			isLoading: false
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		}
		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignUpRequest(this.state).then(
				() => {
					this.props.addFlashMessages({
						type: 'success',
						text: 'You signed up successfully. Welcome!'
					});
					// this.context.router.push('/');
				},
				({ data }) =>
					this.setState({
						errors: data,
						isLoading: false
					})
			);
		}
	}
	render() {
		const { errors } = this.state;
		const options = map(timezones, (val, key) => (
			<option key={val} value={val}>
				{key}
			</option>
		));
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join Our Community</h1>
				<TextGroupField
					error={errors.username}
					label="Username"
					onChange={this.onChange}
					type="text"
					name="username"
					value={this.state.username}
					field="username"
				/>
				<TextGroupField
					error={errors.email}
					label="Email"
					onChange={this.onChange}
					type="email"
					name="email"
					value={this.state.email}
					field="email"
				/>
				<TextGroupField
					error={errors.password}
					label="Password"
					onChange={this.onChange}
					type="password"
					name="password"
					value={this.state.password}
					field="password"
				/>
				<TextGroupField
					error={errors.passwordConfrimation}
					label="password Confrimation"
					onChange={this.onChange}
					type="password"
					name="passwordConfrimation"
					value={this.state.passwordConfrimation}
					field="passwordConfrimation"
				/>
				<div className="form-group">
					<label className="control-label">Timezone</label>
					<select
						value={this.state.timezone}
						onChange={this.onChange}
						name="timezone"
						className="form-control"
					>
						<option value="" disabled>
							Choose Your Timezone
						</option>
						{options}
					</select>
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
				</div>
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-large">
						Register
					</button>
				</div>
			</form>
		);
	}
}

export default SignUpForm;
