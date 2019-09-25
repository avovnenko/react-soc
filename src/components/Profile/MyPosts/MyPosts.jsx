import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
	let postData = [
		{id: 1, name: 'Anton', status: 'Coco', message: 'Hello Natasha!', likesCount: '10'},
		{id: 2, name: 'Natasha', status: 'Coco', message: 'Hello Coco!', likesCount: '15'},
		{id: 3, name: 'Masik', status: 'Dog', message: 'Meow!', likesCount: '999'}
	];

	return (
		<div className={s.myPostsBlock}>
			My posts
			<div className={s.addPost}>
				<textarea></textarea><br/>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				<Post name={postData[0].name} status={postData[0].status} message={postData[0].message} likesCount={postData[0].likesCount}/>
				<Post name={postData[1].name} status={postData[1].status} message={postData[1].message} likesCount={postData[1].likesCount}/>
				<Post name={postData[2].name} status={postData[2].status} message={postData[2].message} likesCount={postData[2].likesCount}/>
			</div>
		</div>
	);
};

export default MyPosts;