import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route} from "react-router-dom"

const App = (props) => {

	let componentsDialogs = () => <Dialogs
			state={props.state.dialogsPage}
			dispatch={props.dispatch}/>,

		componentsProfile = () => <Profile
			state={props.state.profilePage}
			dispatch={props.dispatch}/>;

	return (
		<div className='app-wrapper'>

				<Header/>
				<Navbar state={props.state.sidebar}/>

				<div className='app-wrapper-content'>

					<Route path={`/news`} component={News}/>


					<Route path={`/dialogs`} render={componentsDialogs}/>
					<Route path={`/profile`} render={componentsProfile}/>
				</div>
			</div>
	);
};

export default App;
