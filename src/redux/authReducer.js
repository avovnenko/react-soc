import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

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
				...action.payload
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


export default authReducer;

export const authMe = () =>
	(dispatch) => {
		return authAPI.me()
			.then(response => {
				if (response.resultCode === 0) {
					let {id, email, login} = response.data;
					dispatch(setAuthUserData(id, email, login, true));
				}
			});
	};
export const userLogin = (email, password, rememberMe, captcha) =>
	(dispatch) => {
		authAPI.login(email, password, rememberMe, captcha)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(authMe());
				} else {
					dispatch(stopSubmit("login", {_error: response.messages.length > 0 ? response.messages[0] : 'Some error!' }));
				}
			});
	};
export const userLogout = () =>
	(dispatch) => {
		authAPI.logout()
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
				}
			});
	};
