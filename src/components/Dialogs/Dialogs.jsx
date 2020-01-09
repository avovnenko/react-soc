import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Dialogs = (props) => {

	let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);

	let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}  key={m.id}/>);


	let onSubmit = (formData) => {
		props.addMessage(formData.message);
		formData.message = '';
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
				<AddMessageFormRedux onSubmit={onSubmit} />
			</div>
		</div>
	)
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<Field component={Textarea}
			   name={'message'}
			   validate={[requiredField, maxLength50]}/>
		<button type={'submit'}>Send</button>
	</form>
};

const AddMessageFormRedux = reduxForm({
	form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;