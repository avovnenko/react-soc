import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

	return (
		<div className={s.friends}>
			{props.friends}
		</div>
	);
};

export default Friends;