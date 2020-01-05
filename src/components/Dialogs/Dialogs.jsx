import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);

	let messageElements = state.messages.map(m => <Message message={m.message}  key={m.id}/>);

	let msg = React.createRef();

	let onMendMsg = () => {
		props.sendMsg();
	};

	let onMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessage(body);
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
				<textarea ref={msg} value={state.newMessageBody} onChange={onMessageChange}/>
				<button onClick={onMendMsg}>Send</button>
			</div>
		</div>
	)
};

export default Dialogs;