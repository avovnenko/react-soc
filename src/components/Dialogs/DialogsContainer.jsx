import React from 'react';

import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;