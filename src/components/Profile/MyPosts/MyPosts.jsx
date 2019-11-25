import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements =
		props.posts.map( p => <Post name={p.name} status={p.status} message={p.message} key={p.id} likesCount={p.likesCount}/>);

	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text)
	};

	return (
		<div className={s.myPostsBlock}>
			My posts
			<div className={s.addPost}>
				<textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/><br/>
				<button onClick={ onAddPost }>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;