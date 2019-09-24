import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
	return (
		<div className={s.myPostsBlock}>
			My posts
			<div className={s.addPost}>
				<textarea></textarea><br/>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				<Post name='Anton' status='Coco' message='Hello Natasha!'/>
				<Post name='Natasha' status='Coco' message='Hello Coco!'/>
				<Post name='Masik' status={`Dog`} message='Meow!'/>
			</div>
		</div>
	);
};

export default MyPosts;