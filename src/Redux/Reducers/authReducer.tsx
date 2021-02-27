import {
    TypeActionAuth,
    TypeInitialStateAuth,
    TypeStore,

} from "../../Types/Types";
import {getAuthApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

export const SET_USER_ID = "auth/SET_USER_ID"
export const SET_AUTH_EMAIL = "auth/SET_AUTH_EMAIL"
export const SET_AUTH_LOGIN = "auth/SET_AUTH_LOGIN"
export const SET_AUTH_ISAUTH = "auth/SET_AUTH_ISAUTH";
export const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";


export const SetAuthIsAuthTestAC = (isAuth: boolean) => {
    return {
        type: SET_AUTH_ISAUTH,
        isAuth
    } as const
}
export const SetUserIdAC = (userId: string) => {
    return {
        type: SET_USER_ID,
        userId
    } as const
}
export const SetEmailAC = (email: string) => {
    return {
        type: SET_AUTH_EMAIL,
        email
    } as const
}
export const SetLoginAC = (login: string) => {
    return {
        type: SET_AUTH_LOGIN,
        login
    } as const
}
 export const SetCaptchaUrl=(captchaUrl: string) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    } as const
}




export const authThunkCreator = (): ThunkAction<Promise<void>, any,
    TypeStore, TypeActionAuth> => {
    return async (dispatch) => {
        let data = await getAuthApi.checkLogin();
        if ((data.resultCode === 0)) {
            dispatch(SetUserIdAC(data.data.id.toString()))
            dispatch(SetEmailAC(data.data.email))
            dispatch(SetLoginAC(data.data.login))
            dispatch(SetAuthIsAuthTestAC(true))


        } else {
            dispatch(SetAuthIsAuthTestAC(false))
        }


    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean,
                                  captcha: string): ThunkAction<void, TypeStore,
    unknown, TypeActionAuth | FormAction> => {
    return async (dispatch) => {
        let data = await getAuthApi.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(SetUserIdAC(data.data.userId.toString()))
            dispatch(SetEmailAC(email))
            dispatch(SetAuthIsAuthTestAC(true))
        } else {
            if(data.resultCode === 10){
                let captcha = await getAuthApi.captchaUrl();
                dispatch(SetCaptchaUrl(captcha.url))

            }
            let message = data.messages.length ? data.messages[0] : ['Some Error']
            dispatch(stopSubmit("Login", {_error: message}))

        }


    }
}
export const logoutThunkCreator = (): ThunkAction<void, any,
    TypeStore, TypeActionAuth> => {
    return async (dispatch) => {
        await getAuthApi.Logout()
        dispatch(SetEmailAC(""))
        dispatch(SetUserIdAC("0"))
        dispatch(SetAuthIsAuthTestAC(false))

    }
}
let initilaState: TypeInitialStateAuth = {
    email: "",
    login: "",
    isAuth: false,
    userId: "",
    captchaUrl: null,

}

const authReducer = (state = initilaState, action: TypeActionAuth): TypeInitialStateAuth => {

    switch (action.type) {

        case SET_AUTH_EMAIL:
            return {
                ...state,
                email: action.email

            }
        case SET_AUTH_ISAUTH:
            return {
                ...state,
                isAuth: action.isAuth

            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case SET_AUTH_LOGIN:

            return {
                ...state,
                login: action.login
            }
        case "auth/SET_CAPTCHA_URL":{
            return{
                ...state,
                captchaUrl:action.captchaUrl
            }
        }


        default:
            return {...state}
    }


}

export default authReducer;