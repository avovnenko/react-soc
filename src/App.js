import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {
	let componentsDialogs = () => <Dialogs state={props.appState.dialogsPage}/>,

		componentsProfile = () => <Profile state={props.appState.profilePage}/>;

	return (
		<div className='app-wrapper'>

				<Header/>

				<Navbar state={props.appState.sidebar}/>

				<div className='app-wrapper-content'>
					{/*<Route path={`/dialogs`} component={Dialogs}/>*/}
					{/*<Route path={`/profile`} component={Profile}/>*/}

					<Route path={`/news`} component={News}/>


					<Route path={`/dialogs`} render={componentsDialogs}/>
					<Route path={`/profile`} render={componentsProfile}/>
				</div>
			</div>
	);
};

export default App;
