import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.bg}>
				<img src="http://pluspng.com/img-png/forest-png-hd-images-green-forest-hd-photo-png-1280.png" alt=""/>
			</div>
			<div>
				avatar + description
				<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg" alt="" width={200}/>
			</div>

			<MyPosts/>
		</div>
	);
};

export default Profile;