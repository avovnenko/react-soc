import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
	console.log(props);

	let followUser = (userId) => {
		props.follow(userId);
	};
	let unFollowUser = (userId) => {
		props.unFollow(userId);
	};
	let showMore = () => {
		props.showMore();
	};

	if (props.users.length === 0) {
		props.setUsers(
			[
				{
					id: 1,
					img: 'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Person_Undefined_Female_Light.png',
					name: 'User 1',
					location: {
						country: 'Ukraine',
						city: 'Kyiv',
					},
					status: 'Hello world!',
					followStatus: false
				},
				{
					id: 2,
					img: 'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Client_Female_Light.png',
					name: 'User 2',
					location: {
						country: 'Ukraine',
						city: 'Kyiv',
					},
					status: 'Hello world!',
					followStatus: true
				},
				{
					id: 3,
					img: 'http://icons.veryicon.com/png/System/Must%20Have/User.png',
					name: 'User 3',
					location: {
						country: 'Ukraine',
						city: 'Kyiv',
					},
					status: 'Hello world!',
					followStatus: false
				},
				{
					id: 4,
					img: 'http://icons.iconarchive.com/icons/gianni-polito/colobrush/256/system-user-man-icon.png',
					name: 'User 4',
					location: {
						country: 'Ukraine',
						city: 'Kyiv',
					},
					status: 'Hello world!',
					followStatus: true
				},
				{
					id: 5,
					img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
					name: 'User 5',
					location: {
						country: 'Ukraine',
						city: 'Chabani',
					},
					status: 'Hello!',
					followStatus: false
				}
			]
		);
	}


	let usersList = props.users.slice(0, props.showUsers).map( u =>
		<div className={s.user_block} key={u.id}>
			<div className={s.pic_block}>
				<div className={s.pic}>
					<img src={u.img} alt=""/>
				</div>
				{ u.followStatus
					? <button className={`${s.follow_btn} ${s.unfollow}`} onClick={ () => {unFollowUser(u.id) } }>Unfollow</button>
					: <button className={`${s.follow_btn} ${s.follow}`} onClick={ () => {followUser(u.id) } }>Follow</button>
				}
			</div>
			<div className={s.info}>
				<span className={s.name}>{u.name}</span>
				<span className={s.location}>{u.location.country}, {u.location.city}</span>
				<span className={s.status}>{u.status}</span>
			</div>
		</div>
	);

	return (
		<div className={s.users}>
			{usersList}
			<button className={s.show_more} onClick={showMore}>Show more</button>
		</div>
	);
};

export default Users;