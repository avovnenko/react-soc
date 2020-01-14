import {authMe} from "./authReducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

let initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			};
		default:
			return state;
	}
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () =>
	(dispatch) => {
		let promises = dispatch(authMe());
		Promise.all([promises])
			.then(() => {
				dispatch(initializedSuccess());
			})
	};

export default appReducer;