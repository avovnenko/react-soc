import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/nophoto.jpg';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, toggleFollow}) => {
	return (
		<div className={s.user_block} >
			<div className={s.pic_block}>
				<div className={s.pic}>
					<NavLink to={`/profile/${user.id}`}>
						<img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""/>
					</NavLink>
				</div>
				{user.followed
					?
					<button disabled={followingInProgress.some(id => id === user.id)}
							className={`${s.follow_btn} ${s.unfollow}`}
							onClick={() => {
								toggleFollow(false, user.id);
							}}>Unfollow</button>
					:
					<button disabled={followingInProgress.some(id => id === user.id)}
							className={`${s.follow_btn} ${s.follow}`}
							onClick={() => {
								toggleFollow(true, user.id);
							}}>Follow</button>
				}
			</div>
			<div className={s.info}>
				<span className={s.name}>{user.name}</span>
				<span className={s.status}>{user.status}</span>
			</div>
		</div>
	);
};

export default User;