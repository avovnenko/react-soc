// export const addPost = () => {
//
// };
// export const updateNewPostText = (newText) => {
//
// };
//
// export const subscribe = (observer) => {
//
// };

const ADD_POST = 'ADD-POST',
	  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
				{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
				{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'},
				{id: 3, name: 'NewCat', status: 'Dog', message: 'Meow, blyat!', likesCount: '1'}
			],
			newPostText: 'Hello Redux'
		},
		dialogsPage: {
			messages: [
				{id: 1, message: 'Hello'},
				{id: 2, message: 'Hello, how are you?'},
				{id: 3, message: 'Good'}
			],
			dialogs: [
				{id: 1, name: 'Anton'},
				{id: 2, name: 'Natasha'},
				{id: 3, name: 'Masik'}
			],
			newMessageBody: 'Hello'
		},
		sidebar: {
			friends: [
				{id: 1, name: 'Anton', url: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg'},
				{id: 2, name: 'Natasha', url: 'https://content-static.upwork.com/blog/uploads/sites/4/2014/10/27173913/BLOG-Upwork-profile-photo-face.png'},
				{id: 3, name: 'Masik', url: 'https://external-preview.redd.it/w4OHuxBN_rhoieORy0LabFzJ4rB837GmYlqp1P2Q5h8.jpg?auto=webp&s=e48b59100278a43bb318b6d35c0d3298e355cee0'}
			]
		}
	},
	_callSubscriber() {
		console.log('state was changed');
	},

	get getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	_updateNewMessageText(newMessage) {
		this._state.dialogsPage.newMessageBody = newMessage;
		this._callSubscriber(this._state);
	},
	_addPost() {
		let newPost = {
			id: 5,
			name: 'Anonymus',
			status: 'noname',
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	_addMessage() {
		let newMessage = {
			id: 4,
			message: this._state.dialogsPage.newMessageBody
		};
		this._state.dialogsPage.messages.push(newMessage)
		this._state.dialogsPage.newMessageBody = '';
		this._callSubscriber(this._state);
		debugger;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			this._addPost();
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._updateNewPostText(action.newText);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._updateNewMessageText(action.newMessageBody);
		} else if (action.type === SEND_MESSAGE) {
			this._addMessage();
		}
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text });
export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

window.store = store;

export default store;