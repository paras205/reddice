import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessages';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends Component {
	render() {
		const alertMessage = this.props.messages.map((message) => (
			<FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
		));
		return <div>{alertMessage}</div>;
	}
}
function mapStateToProps(state) {
	return {
		messages: state.flashMessages
	};
}
export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
