import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/nophoto.jpg';
import {NavLink} from "react-router-dom";


let Users = (props) => {
	
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1;i <= pagesCount; i++) {
		pages.push(i);
	}
	
	return (
		<div>
			<ul className={s.pagination}>
				{pages.map(p => {
					if ((p >= parseInt(props.currentPage) - 2 && p <= parseInt(props.currentPage) + 2) || p === pagesCount || p === 1) {
						return <li key={p} onClick={() => {
							props.setCurrentPage(p);
						}} className={p === parseInt(props.currentPage) ? s.selected_page : ''}>{p}</li>
					} else if (p <= parseInt(props.currentPage) + 5 && p >= parseInt(props.currentPage) - 5) {
						return <li key={p}>.</li>
					}

				})}
			</ul>
			<div className={s.users}>
				{
					props.users.slice(0, props.showUsers).map(u =>
						<div className={s.user_block} key={u.id}>
							<div className={s.pic_block}>
								<div className={s.pic}>
									<NavLink to={`/profile/${u.id}`}>
										<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
									</NavLink>
								</div>
								{u.followed
									? <button className={`${s.follow_btn} ${s.unfollow}`} onClick={() => {
										props.unFollowUser(u.id)
									}}>Unfollow</button>
									: <button className={`${s.follow_btn} ${s.follow}`} onClick={() => {
										props.followUser(u.id)
									}}>Follow</button>
								}
							</div>
							<div className={s.info}>
								<span className={s.name}>{u.name}</span>
								<span className={s.status}>{u.status}</span>
							</div>
						</div>
					)}
				<button className={s.show_more} onClick={props.showMore}>Show more</button>
			</div>
		</div>
	);
};

export default Users;