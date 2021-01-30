import React from "react";
import {Field,reduxForm} from "redux-form";
import { TypeLoginProps} from "../../Types/Types";

const LoginForm = (props:any)=>{
    return<div>
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={"input"} name={'email'} placeholder={"Login"} />
            </div>
            <div>
                <Field component={"input"} name={'password'} placeholder={'Password'} />
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