import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem id={1} name={`Anton`}/>
				<DialogItem id={2} name={`Natasha`}/>
				<DialogItem id={3} name={`Masik`}/>
			</div>
			<div className={s.messages}>
				<Message message={`Hello`}/>
				<Message message={`Hello, how are you?`}/>
				<Message message={`Good`}/>
			</div>
		</div>
	)
};

export default Dialogs;