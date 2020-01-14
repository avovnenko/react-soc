import React from 'react';
import s from "./Paginator.module.css";

let Paginator = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<ul className={s.pagination}>
			{pages.map(p => {
				if ((p >= parseInt(props.currentPage) - 2 && p <= parseInt(props.currentPage) + 2) || p === pagesCount || p === 1) {
					return <li key={p} onClick={() => {
						props.setCurrentPage(p);
					}} className={p === parseInt(props.currentPage) ? s.selected_page : ''}>{p}</li>
				} else if (p <= parseInt(props.currentPage) + 5 && p >= parseInt(props.currentPage) - 5) {
					return <li key={p}>.</li>
				}
				return null;
			})}
		</ul>
	);
};

export default Paginator;