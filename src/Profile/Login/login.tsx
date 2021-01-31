import React from "react";
import {Field,reduxForm} from "redux-form";
import { TypeLoginProps} from "../../Types/Types";
import {maxLengthCreator, required} from "../../Validators/validator";
import {Input} from "../../Validators/TagsForValidators/tags";

const LoginForm = (props:any)=>{
let max = maxLengthCreator(30)
    return<div>
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={Input}  validate={[required,maxLengthCreator(20)]} name={'email'}
                      placeholder={"Login"}  />
            </div>
            <div>
                <Field component={Input}  name={'password'} placeholder={'Password'}
                       validate={[required]}
                />
            </div>
            <div>

                <Field component={"input"} type={"checkbox"} name={'rememberMe'} />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    </div>
}

export const LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm);

const Login = (props:TypeLoginProps)=>{
    const onSubmit = (formData:any)=>{

         props.loginThunkCreator(formData.email,formData.password,formData.rememberMe,true)
    }
    return<div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}




export default Login;