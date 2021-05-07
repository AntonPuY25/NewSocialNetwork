import {stopSubmit} from "redux-form";
import {getAuthApi} from "../../../DALL/api";
import {TypeActionAuth, TypeInitialStateAuth} from "../../../Types/Types";
import {put, takeEvery, call} from 'redux-saga/effects'

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
export const SetCaptchaUrl = (captchaUrl: string) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    } as const
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
        case "auth/SET_CAPTCHA_URL": {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }


        default:
            return {...state}
    }


}

function* authSaga(action: TypeAuthSagaAC) {
    let data = yield call(getAuthApi.checkLogin);
    if ((data.resultCode === 0)) {
        yield put(SetUserIdAC(data.data.id.toString()))
        yield put(SetEmailAC(data.data.email))
        yield put(SetLoginAC(data.data.login))
        yield put(SetAuthIsAuthTestAC(true))
    } else {
        yield put(SetAuthIsAuthTestAC(false))
    }
}

function* loginSaga(action: TypeLoginSagaAC) {
    let data = yield call(getAuthApi.login, action.email, action.password,
        action.rememberMe, action.captcha);
    if (data.resultCode === 0) {
        yield put(SetUserIdAC(data.data.userId.toString()))
        yield put(SetEmailAC(action.email))
        yield put(SetAuthIsAuthTestAC(true))
    } else {
        if (data.resultCode === 10) {
            let captcha = yield call(getAuthApi.captchaUrl);
            yield put(SetCaptchaUrl(captcha.url))

        }
        let message = data.messages.length ? data.messages[0] : ['Some Error']
        yield put(stopSubmit("Login", {_error: message}))
    }
}
function* logoutSaga(action:TypeLogoutSagaAC) {
     yield call(getAuthApi.Logout)
    yield put(SetEmailAC(""))
    yield put(SetUserIdAC("0"))
    yield put(SetAuthIsAuthTestAC(false))
}



let initilaState: TypeInitialStateAuth = {
    email: "",
    login: "",
    isAuth: false,
    userId: "",
    captchaUrl: null,

}
export const authSagaAC = () => {
    return {
        type: '/auth/AUTH_SAGA'
    } as const
}
export const loginSagaAC = (email: string,
                            password: string,
                            rememberMe: boolean,
                            captcha: string) => {
    return {
        type: '/auth/LOGIN_SAGA',
        email, password, rememberMe, captcha
    } as const

}

export const logoutSagaAC = () => {
    return {
        type: '/auth/LOGOUT_SAGA',
    } as const
}
export type TypeLogoutSagaAC = ReturnType<typeof logoutSagaAC>
export type TypeLoginSagaAC = ReturnType<typeof loginSagaAC>
export type TypeAuthSagaAC = ReturnType<typeof authSagaAC>

export function* authWatcher() {

    yield takeEvery('/auth/AUTH_SAGA', authSaga)
    yield takeEvery('/auth/LOGIN_SAGA', loginSaga)
    yield takeEvery('/auth/LOGOUT_SAGA', logoutSaga)
}


export default authReducer;