import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

	let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

	let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

	let msg = React.createRef();

	let sendMsg = () => {

		props.dispatch(addMessageActionCreator());
	};

	let onMessageChange = (e) => {
		let text = e.target.value;

		props.dispatch(updateNewMessageTextActionCreator(text));
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div>
				<div className={s.messages}>
					{messageElements}
				</div>
				<textarea ref={ msg } value={props.state.newMessageBody} onChange={onMessageChange} />
				<button onClick={ sendMsg }>Send</button>
			</div>
		</div>
	)
};

export default Dialogs;