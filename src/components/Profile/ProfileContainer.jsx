import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId && this.props.isAuth) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.getUserProfile(userId);
	}

	render() {
		return (
			<Profile {...this.props} />
		);
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
};
let mapDispatchToProps = {
	getUserProfile
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect
)(ProfileContainer);

