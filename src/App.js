import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
	let componentsDialogs = () => <DialogsContainer />,

		componentsProfile = () => <ProfileContainer />,

		componentsUsers = () => <UsersContainer />;

	return (
		<div className='app-wrapper'>

				<Header/>
				<Navbar />

				<div className='app-wrapper-content'>

					<Route path={`/news`} component={News}/>

					<Route path={`/users`} render={componentsUsers}/>

					<Route path={`/dialogs`} render={componentsDialogs}/>

					<Route path={`/profile/:userId?`} render={componentsProfile}/>
				</div>
			</div>
	);
};

export default App;