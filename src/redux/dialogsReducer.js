const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
	]
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.messages[state.messages.length - 1].id + 1,
				message: action.message
			};

			return {
				...state,
				messages: [...state.messages, newMessage]
			};
		default:
			return state;
	}
};

export default dialogsReducer;

export const addMessage = (message) => ({type: SEND_MESSAGE, message});