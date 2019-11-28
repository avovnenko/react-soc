import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class Profile extends React.Component {
	render() {
		return (
			<div className={s.content}>
				<ProfileInfo/>

				<MyPostsContainer store={this.props.store} />
			</div>
		);
	}
}

export default Profile;