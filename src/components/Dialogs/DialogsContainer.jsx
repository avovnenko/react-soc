import React from 'react';

import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/AuthRedirect/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component {
	addMessage = (message) => {
		this.props.addMessage(message);
	}

	render() {
		return <Dialogs {...this.props} addMessage={this.addMessage}/>
	}
}

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};

const mapDispatchToProps = {
	addMessage
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(DialogsContainer);