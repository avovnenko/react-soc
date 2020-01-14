import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/nophoto.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";


const ProfileInfo = ({profile}) => {

	if (!profile) {
		return <Preloader/>;
	} else {
		let contacts = [];
		for (let c in profile.contacts) {
			if (profile.contacts.hasOwnProperty(c)) {
				contacts.push({
					name: c,
					url: profile.contacts[c]
				});
			}
		}

		return (
			<div>
				<div className={s.bg}>
					<img src={!profile.photos.large ? userPhoto : profile.photos.large} alt=""/>
				</div>
				<div className={s.descriptionBlock}>
					Привет! Это - {profile.fullName}
				</div>
				<div className={s.descriptionBlock}>
					{profile.aboutMe}
				</div>
				<div className={s.profileStatus}>
					<ProfileStatusContainer profile={profile}/>
				</div>
				Мои ссылки:
				<ul className={s.s_l}>
					{
						contacts.map(c => {
								if (c.url)
									return <li key={c.name}>
										<a href={`${c.url}`} target="blank">
											{c.name}
										</a>
									</li>;
								return null;
							}
						)
					}
				</ul>
			</div>
		);
	}
};

export default ProfileInfo;