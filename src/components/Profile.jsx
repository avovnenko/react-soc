import React from 'react';

const Profile = () => {
	return (
		<div className='content'>
			<div className='bg'>
				<img src="http://pluspng.com/img-png/forest-png-hd-images-green-forest-hd-photo-png-1280.png" alt=""/>
			</div>
			<div>
				avatar + description
				<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/21/10/avatar-neytiri.jpg" alt="" width={200}/>
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div>
					<div>post 1</div>
					<div>post 2</div>
					<div>post 3</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;