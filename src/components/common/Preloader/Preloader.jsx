import React from "react";
import preloader from '../../../assets/images/preloader.svg';
import s from './Preloader.module.css';

let Preloader = (props) => {
	return (
		<div className={s.preloaderWrapper}>
			<div className={s.matrixBg}></div>
			<img src={preloader} alt={'Preloader'}/>
		</div>
	)
};

export default Preloader;