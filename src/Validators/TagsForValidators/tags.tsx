import React from "react";
import s from './validatorsTags.module.css'
type TypeInputForm = {
    input:any
    meta:any
}

export const Input:React.FC<TypeInputForm> = ({input,meta,...props})=>{
    const  hasError = (meta.touched && meta.error)
    return<div>
        <input  className={hasError?s.error:""} {...props} {...input}/>
        {hasError?<div className={s.divError}>{meta.error}</div>:""}
    </div>
}