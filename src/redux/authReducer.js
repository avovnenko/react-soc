import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA',
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT';

let initialState = {
	userId: null,
	email: null,
	login: null,
	img: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			};
		case LOGIN:
			return {
				...state,
				userId: action.userId,
				isAuth: true
			};
		case LOGOUT:
			return {
				...state,
				userId: null,
				email: null,
				login: null,
				img: null,
				isAuth: false
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const login = (userId) => ({type: LOGIN, userId});
export const logout = () => ({type: LOGOUT});


export default authReducer;

export const authMe = () =>
	(dispatch) => {
		authAPI.me()
			.then(response => {
				if (response.resultCode === 0) {
					let {id, email, login} = response.data;
					dispatch(setAuthUserData(id, email, login));
				}
			});
	};
export const userLogin = (email, password, rememberMe, captcha) =>
	(dispatch) => {
		authAPI.login(email, password, rememberMe, captcha)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(authMe());
				}
			});
	};
export const userLogout = () =>
	(dispatch) => {
		authAPI.logout()
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(logout());
				}
			});
	};
