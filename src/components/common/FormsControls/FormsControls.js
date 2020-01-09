import React from "react";
import s from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={s.formControl + ' ' + (hasError ? s.error : '')}>
			<div>
				{props.children}
			</div>
			{ hasError && <span className={s.errorMsg}> {meta.error} </span> }
		</div>
	);
};

export const Textarea = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>;
};
export const Input = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormControl {...props} element={'input'}><input {...input} {...restProps}/></FormControl>;
};