import React from 'react';
import s from './Post.module.css';


const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://c.ndtvimg.com/2019-07/2t829hlo_govinda-twitter_625x300_31_July_19.jpg" alt=""/>
			post 1

			<div className={s.like}>
				<span>Like</span>
			</div>
		</div>
	);
};

export default Post;