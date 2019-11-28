const SHOW_MORE = 'SHOW-MORE',
	SET_USERS = 'SET-USERS',
	SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
	users: [],
	showUsers: 2,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followStatus: true};
					}
					return u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followStatus: false};
					}
					return u;
				}),
			};

		case SET_USERS:
			return {
				...state,
				users: [ ...action.users ]
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
		default:
			return state;
	}
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users, totalUsersCount) => ({type: SET_USERS, users: users, totalUsersCount: totalUsersCount});
export const showMoreAC = () => ({type: SHOW_MORE});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});