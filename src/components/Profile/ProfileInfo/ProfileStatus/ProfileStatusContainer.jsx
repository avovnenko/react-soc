import React from 'react';
import {connect} from "react-redux";
import {updateUserProfileStatus} from "../../../../redux/profileReducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


class ProfileStatusContainer extends React.Component {

	updateUserStatus = (status) => {
		this.props.updateUserProfileStatus(status);
	};

	render() {
		return <ProfileStatusWithHooks {...this.props} updateProfileStatus={this.updateUserStatus} />;
	}
}

const mapStateToProps = (state) => {
	return {
		profileStatus: state.profilePage.profileStatus
	}
};
const mapDispatchToProps = {
	updateUserProfileStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatusContainer);