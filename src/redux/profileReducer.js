const ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
	SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	posts: [
		{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
		{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
		{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'},
		{id: 4, name: 'NewCat', status: 'Dog', message: 'Meow, blyat!', likesCount: '1'}
	],
	profile: null,
	newPostText: 'Hello Redux'
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				name: 'Anonymus',
				status: 'noname',
				message: state.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		default:
			return state;
	}
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});