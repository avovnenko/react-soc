import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserProfileStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 5518;
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
		profile: state.profilePage.profile
	}
};
let mapDispatchToProps = {
	getUserProfile
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);

