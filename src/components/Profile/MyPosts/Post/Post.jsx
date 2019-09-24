import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://c.ndtvimg.com/2019-07/2t829hlo_govinda-twitter_625x300_31_July_19.jpg" alt=""/><br/>
			<span className={s.name}>{props.name}</span>,
			<span className={s.status}>{props.status}</span><br/>
			<span className={s.message}>{props.message}</span>

			<div className={s.like}>
				<span>Like</span>
			</div>
		</div>
	);
};

export default Post;