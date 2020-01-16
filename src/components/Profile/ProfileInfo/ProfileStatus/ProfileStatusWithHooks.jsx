import React, { useState, useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [profileStatus, changeProfileStatus] = useState(props.profileStatus);
	let [isEmpty, changeIsEmpty] = useState(profileStatus ? false : true);

	const activateEditMode = () => {
		setEditMode(true);
		changeIsEmpty(false);
	};
	const deactivateEditMode = () => {
		setEditMode(false);
		changeIsEmpty(profileStatus ? false : true);
		props.updateProfileStatus(profileStatus);
	};
	const statusOnChangeHandle = (e) => {
		changeProfileStatus(e.target.value);
	};

	useEffect(() => {
		changeProfileStatus(props.profileStatus);
		changeIsEmpty(props.profileStatus ? false : true);
	}, [props.profileStatus] );


	return (
		<>
			{ !editMode ?
				<div><span onDoubleClick={ activateEditMode }>{props.profileStatus || '------'}</span></div>
				:
				<div><input autoFocus={true} onBlur={ deactivateEditMode }  onChange={ (e) => {statusOnChangeHandle(e)} } value={profileStatus}/></div>
			}
			{ isEmpty ?
				<button onClick={ activateEditMode }>Поставить Статус</button> : ''
			}
		</>
	);
};

export default ProfileStatusWithHooks;