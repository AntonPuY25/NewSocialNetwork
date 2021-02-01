import React from "react";
import s from './validatorsTags.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

export type WrappedFieldProps={
    input:WrappedFieldInputProps
    meta:WrappedFieldMetaProps
}
export const Input:React.FC<WrappedFieldProps> = ({input,meta,...props})=>{
    const  hasError = (meta.touched && meta.error)
    return<div>
        <input  className={hasError?s.error:""} {...props} {...input}/>
        {hasError?<div className={s.divError}>{meta.error}</div>:""}
    </div>
}