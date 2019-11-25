const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
	SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageBody
			};

			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageBody: ''
			};
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.newMessageBody
			};
		default:
			return state;
	}
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text});