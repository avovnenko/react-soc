import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

	let postsElements =
		props.profilePage.posts.map( p => <Post name={p.name} status={p.status} message={p.message} key={p.id} likesCount={p.likesCount}/>);

	let onSubmit = (formData) => {
		props.addPost(formData.newPostText);
		formData.newPostText = '';
	};

	return (
		<div className={s.myPostsBlock}>
			My posts
			<div className={s.addPost}>
				<AddPostReduxForm onSubmit={onSubmit}/>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<Field name={'newPostText'}
			   component={Textarea}
			   validate={[requiredField, maxLength10]}
			   placeholder={'New post text'} />
			   <br/>
		<button type={'submit'}>Add post</button>
	</form>;
};

const AddPostReduxForm = reduxForm({
	form: 'ProfileAddPost'
})(AddPostForm);

export default MyPosts;