import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TypeLoginProps} from "../../Types/Types";
import {maxLengthCreator, required} from "../../Validators/validator";
import {Input} from "../../Validators/TagsForValidators/tags";
import {Redirect} from "react-router-dom";
import s from '../../Validators/TagsForValidators/validatorsTags.module.css'

let maxLength = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<TypeFormData, { captchaUrl: string }> & { captchaUrl: string }>
    = ({
           captchaUrl,
           handleSubmit
           , error,
       }) => {
    console.log('Render')
    return <div>

        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} validate={[required, maxLength]} name={'email'}
                       placeholder={"Login"}/>
            </div>
            <div>
                <Field component={Input} type="password" name={'password'} placeholder={'Password'}
                       validate={[required]}
                />
            </div>
            <div>

                <Field component={"input"} type={"checkbox"} name={'rememberMe'}/>Remember me
            </div>
            {captchaUrl ? <div>
                <img src={captchaUrl} alt="captcha"/>
                <Field component='input' name={'captcha'} validate={[required]} placeholder={'captcha'}/>
            </div> : ""}

            {error ? <div className={s.error}>

                {error}

            </div> : ""}
            <div>
                <button>Login</button>
            </div>

        </form>
    </div>
}

export const LoginReduxForm = reduxForm<TypeFormData, { captchaUrl: string }>({
    form: "Login"
})(LoginForm);

type TypeFormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string

}

const Login = (props: TypeLoginProps) => {
    let captchaOk = "";
    if (props.captchaUrl !== null) {
        captchaOk = props.captchaUrl
    }
    const onSubmit = (formData: TypeFormData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>


        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaOk}/>
    </div>

}


export default Login;