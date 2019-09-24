import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.bg}>
				<img src="http://pluspng.com/img-png/forest-png-hd-images-green-forest-hd-photo-png-1280.png" alt=""/>
			</div>
			<div className={s.descriptionBlock}>
				<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg" alt="" width={200}/>
			</div>
		</div>
	);
};

export default ProfileInfo;