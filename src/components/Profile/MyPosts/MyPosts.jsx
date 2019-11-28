import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
	constructor(props) {
		super(props);
		this.postsElements =
			this.props.posts.map( p => <Post name={p.name} status={p.status} message={p.message} key={p.id} likesCount={p.likesCount}/>);

		this.newPostElement = React.createRef()
	}

	onAddPost = () => {
		this.props.addPost();
	};

	onPostChange = () => {
		let text = this.newPostElement.current.value;
		this.props.updateNewPostText(text)
	};

	render() {
		return (
			<div className={s.myPostsBlock}>
				My posts
				<div className={s.addPost}>
					<textarea ref={this.newPostElement} value={this.props.newPostText} onChange={this.onPostChange}/><br/>
					<button onClick={ this.onAddPost }>Add post</button>
					<button>Remove</button>
				</div>
				<div className={s.posts}>
					{this.postsElements}
				</div>
			</div>
		);
	}
}

export default MyPosts;