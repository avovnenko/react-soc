import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

	return (
		<header className={s.header}>
			<img src="https://simply-communicate.com/wp-content/uploads/2019/03/facebook-2661207_960_720.jpg" alt=""/>

			<div className={s.loginBlock}>
				{ props.isAuth ?
					<div>
						<span className={s.login}>{props.login}</span>
						<button onClick={props.userLogout}>Logout</button>
					</div>
					:
					<NavLink to={`/login`}>Login</NavLink>
				}
			</div>
		</header>
	);
};

export default Header;