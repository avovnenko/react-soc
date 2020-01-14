import React from 'react';
import s from "./Users.module.css";
import Paginator from "../common/Pagination/Pagination";
import User from "./User";

let Users = React.memo(({pageSize, currentPage, totalUsersCount, setCurrentPage, ...props}) => {
	return (
		<div>
			<Paginator currentPage={currentPage}
					   totalUsersCount={totalUsersCount}
					   setCurrentPage={setCurrentPage}
					   pageSize={pageSize}/>
			<div className={s.users}>
				{
					props.users.slice(0, props.showUsers).map(u => <User key={u.id} user={u}
							  followingInProgress={props.followingInProgress}
							  toggleFollow={props.toggleFollow} />)
				}
			</div>
		</div>
	);
});

export default Users;