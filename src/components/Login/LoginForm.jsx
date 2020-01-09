import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {

	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component={Input}
				   name={'login'}
				   type="text"
				   placeholder={'Login'}
				   validate={[requiredField]}/>
		</div>
		<div>
			<Field component={Input}
				   name={'password'}
				   type="password"
				   placeholder={'Password'}
				   validate={[requiredField]}/>
		</div>
		<div>
			<Field component={Input}
				   type="checkbox"
				   name={'rememberMe'}/>
			<label htmlFor={'remember-me'}>Remember me</label>
		</div>
		{props.error && <div className={s.formError}>{props.error}</div> }
		<div>
			<button disabled={props.submitting} type={'submit'}>Login</button>
		</div>
	</form>;
};

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

export default LoginReduxForm;