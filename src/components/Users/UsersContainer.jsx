import React from "react";
import {connect} from "react-redux"
import * as axios from "axios";
import Users from "./Users.js";
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	showMoreAC,
	unfollowAC
} from "../../redux/usersReducer";


class UsersContainer extends React.Component {
	followUser = (userId) => {
		this.props.follow(userId);
	};
	unFollowUser = (userId) => {
		this.props.unFollow(userId);
	};
	showMore = () => {
		this.props.showMore();
	};
	setCurrentPage = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.getUsers(pageNumber);
	};
	getUsers(pageNumber) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	};
	componentDidMount() {
		if (this.props.users.length === 0) {
			this.getUsers(this.props.currentPage);
		}
	};



	render() {
		return <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			showMore={this.showMore}
			unFollowUser={this.unFollowUser}
			followUser={this.followUser}
			setCurrentPage={this.setCurrentPage}
		/>;
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		showUsers: state.usersPage.showUsers,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCountAC(totalUsersCount))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);