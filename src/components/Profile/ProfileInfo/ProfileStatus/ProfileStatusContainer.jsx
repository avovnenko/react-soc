import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {connect} from "react-redux";
import {updateUserProfileStatus} from "../../../../redux/profileReducer";


class ProfileStatusContainer extends React.Component {

	updateUserStatus = (status) => {
		this.props.updateUserProfileStatus(status);
	};

	render() {
		return <ProfileStatus {...this.props} updateProfileStatus={this.updateUserStatus} />;
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