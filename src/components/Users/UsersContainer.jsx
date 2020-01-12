import React from "react";
import {connect} from "react-redux"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	followUser, requestUsers,
	setCurrentPage,
	showMore, turnOffPreloader, turnOnPreloader,
		unFollowUser
} from "../../redux/usersReducer";
import withAuthRedirect from "../../hoc/AuthRedirect/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage, getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getShowUsers,
	getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
	showMore = () => {
		this.props.showMore();
	};
	setCurrentPage = (currentPage) => {
		if (currentPage !== this.props.currentPage) {
			this.props.setCurrentPage(currentPage);
			this.requestUsers(currentPage);
		}
	};

	turnOnPreloader = () => {
		this.props.turnOnPreloader();
	};
	turnOffPreloader = () => {
		this.props.turnOffPreloader();
	};

	requestUsers(currentPage) {
		this.props.requestUsers(currentPage, this.props.pageSize);
	};

	componentDidMount() {
		if (this.props.users.length === 0) {
			this.requestUsers(this.props.currentPage);
		}
	};


	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				isFetching={this.props.isFetching}
				showMore={this.showMore}
				unFollowUser={this.props.unFollowUser}
				followUser={this.props.followUser}
				setCurrentPage={this.setCurrentPage}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

/*
const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		showUsers: state.usersPage.showUsers,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
};
*/

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		showUsers: getShowUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
};

const mapDispatchToProps = {
	showMore, setCurrentPage,
	turnOnPreloader, turnOffPreloader,
	requestUsers,
	followUser,
	unFollowUser
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersContainer);