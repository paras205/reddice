import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signUpActions';
import { addFlashMessages } from '../../actions/flashMessages';
class SignupPage extends Component {
	render() {
		const { userSignUpRequest, addFlashMessages } = this.props;
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessages={addFlashMessages} />
				</div>
			</div>
		);
	}
}
export default connect(null, { userSignUpRequest, addFlashMessages })(SignupPage);
