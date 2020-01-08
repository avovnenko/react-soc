import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";

const App = (props) => {
	let componentsDialogs = () => <DialogsContainer />,

		componentsProfile = () => <ProfileContainer />,

		componentsUsers = () => <UsersContainer />;

	return (
		<div className='app-wrapper'>

				<HeaderContainer />

				<Navbar />

				<div className='app-wrapper-content'>

					<Route path={`/news`} component={News}/>

					<Route path={`/users`} render={componentsUsers}/>

					<Route path={`/dialogs`} render={componentsDialogs}/>

					<Route path={`/profile/:userId?`} render={componentsProfile}/>

					<Route path={`/login`} render={() => <LoginPage /> }/>
				</div>
			</div>
	);
};

export default App;