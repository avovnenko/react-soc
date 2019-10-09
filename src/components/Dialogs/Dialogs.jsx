import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

	let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

	let msg = React.createRef();

	let sendMsg = () => {
		console.log(msg.current.value);
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
				<textarea ref={ msg }></textarea>
				<button onClick={ sendMsg }>Send</button>
			</div>
		</div>
	)
};

export default Dialogs;