import React from 'react';
import Header from "./Header";
import {userLogout} from "../../redux/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

	userLogout = () => {
		this.props.userLogout();
	};

	render() {
		return <Header {...this.props} userLogout={this.userLogout}/>
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
};

const mapDispatchToProps = {
	userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);