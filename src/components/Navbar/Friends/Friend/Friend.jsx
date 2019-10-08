import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={s.friend}>
			<img src={props.url} alt=""/>
			<div className="name">
				{props.name}
			</div>
		</div>
	);
};

export default Friend;