import React from 'react';
import LoginReduxForm from "./LoginForm";

const Login = (props) => {

	const onSubmit = (formData) => {
		props.onLogin(formData.login, formData.password, formData.rememberMe);
	};

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>;
};


export default Login;