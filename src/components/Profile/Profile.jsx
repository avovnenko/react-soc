import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

	return (
		<div className={s.content}>
			<ProfileInfo/>

			<MyPosts postsData={props.state.posts}
					 newPostText={props.state.newPostText}
					 dispatch={props.dispatch}/>
		</div>
	);
};

export default Profile;