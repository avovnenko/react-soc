import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";

import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import WithSuspense from "./hoc/withSuspense/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		let componentsDialogs = WithSuspense(DialogsContainer),

			componentsProfile = WithSuspense(ProfileContainer),

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


let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App);


const MainApp = (props) => {
	return <HashRouter basename={process.env.PUBLIC_URL}>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>;
};

export default MainApp;


