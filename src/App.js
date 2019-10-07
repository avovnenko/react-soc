import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {
	let componentsDialogs = () => <Dialogs myDialogs={props.myDialogs} myMessages={props.myMessages}/>,
		componentsProfile = () => <Profile myPosts={props.myPosts}/>;

	return (
		<BrowserRouter>
			<div className='app-wrapper'>

				<Header/>

				<Navbar/>

				<div className='app-wrapper-content'>
					{/*<Route path={`/dialogs`} component={Dialogs}/>*/}
					{/*<Route path={`/profile`} component={Profile}/>*/}

					<Route path={`/news`} component={News}/>


					<Route path={`/dialogs`} render={componentsDialogs}/>
					<Route path={`/profile`} render={componentsProfile}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
