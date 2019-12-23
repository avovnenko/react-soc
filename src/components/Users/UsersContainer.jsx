import React from "react";
import {connect} from "react-redux"
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	showMore, turnOffPreloader, turnOnPreloader,
	unfollow
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
		if (pageNumber !== this.props.currentPage) {
			this.props.setCurrentPage(pageNumber);
			this.getUsers(pageNumber);
		}
	};

	turnOnPreloader = () => {
		this.props.turnOnPreloader();
	};
	turnOffPreloader = () => {
		this.props.turnOffPreloader();
	};

	getUsers(pageNumber) {
		this.turnOnPreloader();
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
			.then(() => {
				this.turnOffPreloader();
			});
	};

	componentDidMount() {
		if (this.props.users.length === 0) {
			this.getUsers(this.props.currentPage);
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
				unFollowUser={this.unFollowUser}
				followUser={this.followUser}
				setCurrentPage={this.setCurrentPage}
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		showUsers: state.usersPage.showUsers,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
};

const mapDispatchToProps = {
	follow, unfollow,
	showMore, setUsers,
	setTotalUsersCount, setCurrentPage,
	turnOnPreloader, turnOffPreloader
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);