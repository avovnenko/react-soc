import {usersAPI} from "../api/api";

const SHOW_MORE = 'SHOW-MORE',
	SET_USERS = 'SET-USERS',
	SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
	TURN_ON_PRELOADER = 'TURN-ON-PRELOADER',
	TURN_OFF_PRELOADER = 'TURN-OFF-PRELOADER',
	FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	showUsers: 2,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true};
					}
					return u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false};
					}
					return u;
				}),
			};

		case SET_USERS:
			return {
				...state,
				users: [...action.users]
			};

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			};

		case SHOW_MORE:
			return {
				...state,
				showUsers: state.showUsers + 2
			};

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};

		case TURN_ON_PRELOADER:
			return {
				...state,
				isFetching: true
			};

		case TURN_OFF_PRELOADER:
			return {
				...state,
				isFetching: false
			};

		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(i => i !== action.userId)
			};
		default:
			return state;
	}
};

export default usersReducer;

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users: users, totalUsersCount: totalUsersCount});
export const showMore = () => ({type: SHOW_MORE});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const turnOnPreloader = () => ({type: TURN_ON_PRELOADER});
export const turnOffPreloader = () => ({type: TURN_OFF_PRELOADER});
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});


export const requestUsers = (currentPage, pageSize) =>
	(dispatch) => {
		dispatch(turnOnPreloader);

		usersAPI.getUsers(currentPage, pageSize)
			.then(response => {
				dispatch(setUsers(response.items));
				dispatch(setTotalUsersCount(response.totalCount));
			})
			.then(() => {
				dispatch(turnOffPreloader);
			});
	};
export const followUser = (userId) =>
	(dispatch) => {
		dispatch(followingInProgress(true, userId));
		usersAPI.followUser(userId)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(followSuccess(userId));
				}
				dispatch(followingInProgress(false, userId));
			});
	};
export const unFollowUser = (userId) =>
	(dispatch) => {
		dispatch(followingInProgress(true, userId));
		usersAPI.unfollowUser(userId)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(unfollowSuccess(userId));
				}
				dispatch(followingInProgress(false, userId));
			});
	};

