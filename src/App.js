import React, {Component} from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		let componentsDialogs = () => <DialogsContainer/>,

			componentsProfile = () => <ProfileContainer/>,

			componentsUsers = () => <UsersContainer/>;

		if (!this.props.initialized) {
			return <Preloader/>
		} else {
			return (
				<div className='app-wrapper'>

					<HeaderContainer/>

					<Navbar/>

					<div className='app-wrapper-content'>

						<Route path={`/news`} component={News}/>

						<Route path={`/users`} render={componentsUsers}/>

						<Route path={`/dialogs`} render={componentsDialogs}/>

						<Route path={`/profile/:userId?`} render={componentsProfile}/>

						<Route path={`/login`} render={() => <LoginPage/>}/>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});



export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App);