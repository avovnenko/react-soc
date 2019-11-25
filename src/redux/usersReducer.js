const SHOW_MORE = 'SHOW-MORE',
	SET_USERS = 'SET-USERS',
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW';

let initialState = {
	users: [],
	showUsers: 2
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
				users: [ ...state.users , ...action.users ]
			};

		case SHOW_MORE:
			return {
				...state,
				showUsers: state.showUsers + 2
			};
		default:
			return state;
	}
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const showMoreAC = () => ({type: SHOW_MORE});