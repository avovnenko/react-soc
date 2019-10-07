import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

	let postsElements =
		props.postsData.map( p => <Post name={p.name} status={p.status} message={p.message} likesCount={p.likesCount}/>)

	return (
		<div className={s.myPostsBlock}>
			My posts
			<div className={s.addPost}>
				<textarea></textarea><br/>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;