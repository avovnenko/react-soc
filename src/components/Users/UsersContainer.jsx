import React from "react";
import Users from "./Users";
import {connect} from "react-redux"
import {followAC, setUsersAC, showMoreAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		showUsers: state.usersPage.showUsers
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		showMore: () => {
			dispatch(showMoreAC())
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);