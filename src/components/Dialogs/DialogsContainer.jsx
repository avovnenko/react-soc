import React from 'react';

import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/AuthRedirect/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (body) => {
			dispatch(updateNewMessageTextActionCreator(body));
		},
		sendMsg: () => {
			dispatch(addMessageActionCreator());
		}
	}
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);