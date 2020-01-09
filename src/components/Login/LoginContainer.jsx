import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {userLogin} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
	onLogin = (email, password, rememberMe, captcha) => {
		this.props.userLogin(email, password, rememberMe, captcha);
	};

	render() {
		if (this.props.isAuth)
			return <Redirect to={'/profile'} />;
		else
			return <Login {...this.props} onLogin={this.onLogin} />
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
};

const mapDispatchToProps = {
	userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);