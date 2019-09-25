import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogs = [
		{id: 1, name: 'Anton'},
		{id: 2, name: 'Natasha'},
		{id: 3, name: 'Masik'}
	];
	let dialogElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );

	let messages = [
		{id: 1, message: 'Hello'},
		{id: 2, message: 'Hello, how are you?'},
		{id: 3, message: 'Good'}
	];

	let messageElements = messages.map( m => <Message message={m.message}/>)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	)
};

export default Dialogs;