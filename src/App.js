import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
	let componentsDialogs = () => <DialogsContainer />,

		componentsProfile = () => <Profile />,

		componentsUsers = () => <UsersContainer />;

	return (
		<div className='app-wrapper'>

				<Header/>
				<Navbar />

				<div className='app-wrapper-content'>

					<Route path={`/news`} component={News}/>

					<Route path={`/users`} render={componentsUsers}/>

					<Route path={`/dialogs`} render={componentsDialogs}/>

					<Route path={`/profile`} render={componentsProfile}/>
				</div>
			</div>
	);
};

export default App;