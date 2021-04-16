import React from "react";
import s from './validatorsTags.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import {Checkbox, TextField} from "@material-ui/core";

export type WrappedFieldProps={
    input:WrappedFieldInputProps
    meta:WrappedFieldMetaProps
}
export const Input:React.FC<WrappedFieldProps> = ({input,meta,...props})=>{
    const  hasError = (meta.touched && meta.error)
    return<div>
        <TextField id="filled-basic" className={hasError?s.error:""} label="Filled" variant="filled" {...props} {...input} />
        {hasError?<div className={s.divError}>{meta.error}</div>:""}
    </div>
}

export const RadioBtn:React.FC<WrappedFieldProps> = ({input,meta,...props})=>{

    return<div>
          <span>
                    Remember me:
                </span>
        <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            {...props} {...input}

        />
    </div>
}