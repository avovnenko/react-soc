import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST',
	DELETE_POST = 'profile/DELETE-POST',
	SET_USER_PROFILE = 'profile/SET-USER-PROFILE',
	SET_USER_PROFILE_STATUS = 'profile/SET-USER-PROFILE-STATUS';

let initialState = {
	posts: [
		{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
		{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
		{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'},
		{id: 4, name: 'NewCat', status: 'Dog', message: 'Meow, blyat!', likesCount: '1'}
	],
	profile: null,
	profileStatus: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts[state.posts.length - 1].id + 1,
				name: 'Anonymus',
				status: 'noname',
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		case SET_USER_PROFILE_STATUS:
			return {
				...state,
				profileStatus: action.profileStatus
			};
		default:
			return state;
	}
};

export default profileReducer;

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserProfileStatus = (profileStatus) => ({type: SET_USER_PROFILE_STATUS, profileStatus});


export const getUserProfile = (userId) =>
	async (dispatch) => {
		let response = await profileAPI.getUserProfile(userId);

		dispatch(setUserProfile(response));

		let responseStatus = await profileAPI.getUserProfileStatus(userId);

		dispatch(setUserProfileStatus(responseStatus));
	};

export const getUserProfileStatus = (userId) =>
	async (dispatch) => {
		let response = await profileAPI.getUserProfileStatus(userId)

		dispatch(setUserProfileStatus(response));
	};

export const updateUserProfileStatus = (profileStatus) =>
	async (dispatch) => {
		let response = await profileAPI.updateUserProfileStatus(profileStatus);

		if (response.resultCode === 0) {
			dispatch(setUserProfileStatus(profileStatus));
		}
	};