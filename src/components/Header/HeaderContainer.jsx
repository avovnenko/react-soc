import React from 'react';
import Header from "./Header";
import {authMe, userLogout} from "../../redux/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMe();
	}

	userLogout = () => {
		this.props.userLogout();
	}

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
	authMe, userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);