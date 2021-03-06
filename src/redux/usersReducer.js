import {usersAPI} from "../api/api";

const SHOW_MORE = 'users/SHOW-MORE',
	SET_USERS = 'users/SET-USERS',
	SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT',
	TOGGLE_FOLLOW = 'users/TOGGLE-FOLLOW',
	SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE',
	TURN_ON_PRELOADER = 'users/TURN-ON-PRELOADER',
	TURN_OFF_PRELOADER = 'users/TURN-OFF-PRELOADER',
	FOLLOWING_IN_PROGRESS = 'users/FOLLOWING-IN-PROGRESS';

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
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: !u.followed};
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

export const toggleFollowSuccess = (userId) => ({type: TOGGLE_FOLLOW, userId});

export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount});
export const showMore = () => ({type: SHOW_MORE});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const turnOnPreloader = () => ({type: TURN_ON_PRELOADER});
export const turnOffPreloader = () => ({type: TURN_OFF_PRELOADER});
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});


export const requestUsers = (currentPage, pageSize) =>
	async (dispatch) => {
		dispatch(turnOnPreloader);

		let response = await usersAPI.getUsers(currentPage, pageSize)

		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));

		dispatch(turnOffPreloader);
	};
export const toggleFollow = (toggle, userId) =>
	async (dispatch) => {
		dispatch(followingInProgress(true, userId));
		let response = toggle ? await usersAPI.followUser(userId) : await usersAPI.unfollowUser(userId);

		if (response.resultCode === 0) {
			dispatch(toggleFollowSuccess(userId));
		}

		dispatch(followingInProgress(false, userId));
	};