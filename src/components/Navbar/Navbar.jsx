import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

	return (
		<nav className={s.nav}>
			<div className={`${s.item}`}>
				<NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
			</div>
			<div className={s.item}>
				<a href="#">Music</a>
			</div>
			<div className={s.item}>
				<a href="#">Settings</a>
			</div>

			<h1>Friends</h1>
			<Friends state={props.state} />
		</nav>
	);
};

export default Navbar;