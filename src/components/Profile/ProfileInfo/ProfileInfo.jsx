import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/nophoto.jpg';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>;
	} else {
		let contacts = [];
		for (let c in props.profile.contacts ) {
			if (props.profile.contacts.hasOwnProperty(c)) {
				contacts.push({
					name: c,
					url: props.profile.contacts[c]
				});
			}
		}

		return (
			<div>
				<div className={s.bg}>
					<img src={!props.profile.photos.large ? userPhoto : props.profile.photos.large} alt=""/>
				</div>
				<div className={s.descriptionBlock}>
					Привет! Это - {props.profile.fullName}
				</div>
				<div className={s.descriptionBlock}>
					{props.profile.aboutMe}
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
							}
						)
					}
				</ul>
			</div>
		);
	}
};

export default ProfileInfo;