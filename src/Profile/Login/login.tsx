import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TypeLoginProps} from "../../Types/Types";
import {maxLengthCreator, required} from "../../Validators/validator";
import {Input, RadioBtn} from "../../Validators/TagsForValidators/tags";
import {Redirect} from "react-router-dom";
import s from '../../Validators/TagsForValidators/validatorsTags.module.css'
import styles from './form.module.css';
import {Button, FormLabel} from "@material-ui/core";

type TypeCaptcha = {
    captchaUrl: string
}
let maxLength = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<TypeFormData, TypeCaptcha> & TypeCaptcha>
    = ({
           captchaUrl,
           handleSubmit
           , error,
       }) => {
    return <div>
        <FormLabel>

            <p>Use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        </FormLabel>
        <form onSubmit={handleSubmit} className={styles.form}>
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

                <Field component={RadioBtn} type={"checkbox"} name={'rememberMe'}/>

            </div>
            {captchaUrl ? <div>
                <img src={captchaUrl} alt="captcha"/>
                <Field component='input' name={'captcha'} validate={[required]} placeholder={'captcha'}/>
            </div> : ""}

            {error ? <div className={s.error}>

                {error}

            </div> : ""}

            <Button variant="contained" type={"submit"} color="primary">
                Login
            </Button>
        </form>
    </div>
}

export const LoginReduxForm = reduxForm<TypeFormData, TypeCaptcha>({
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
    return <div className={styles.formContainer}>


        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaOk}/>
    </div>

}


export default Login;