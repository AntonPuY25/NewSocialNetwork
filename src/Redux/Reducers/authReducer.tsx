import {
    TypeActionAuth,
    TypeInitialStateAuth, TypeResponseDataAuth,
    TypeStoreReducer,

} from "../../Types/Types";
import {getAuthApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

export const SET_USER_ID = "SET_USER_ID"
export const SET_AUTH_EMAIL = "SET_AUTH_EMAIL"
export const SET_AUTH_LOGIN = "SET_AUTH_LOGIN"
export const SET_AUTH_ISAUTH = "SET_AUTH_ISAUTH";


export const SetAuthIsAuthTestAC = (isAuth: boolean) => {
    return {
        type: SET_AUTH_ISAUTH,
        isAuth
    } as const
}
export const SetUserIdAC = (userId: number) => {
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

export const authThunkCreator = (): ThunkAction<Promise<void>, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
       return  getAuthApi.checkLogin().then((data: TypeResponseDataAuth) => {
            if ((data.resultCode === 0)) {
                dispatch(SetUserIdAC(data.data.id))
                dispatch(SetEmailAC(data.data.email))
                dispatch(SetLoginAC(data.data.login))
                dispatch(SetAuthIsAuthTestAC(true))

            } else {
                dispatch(SetAuthIsAuthTestAC(false))
            }

        })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean,
                                  captcha: boolean): ThunkAction<void, TypeStoreReducer,
    unknown, TypeActionAuth | FormAction> => {
    return (dispatch) => {
        getAuthApi.login(email, password, rememberMe, captcha).then(data => {
            if (data.resultCode === 0) {
                dispatch(SetUserIdAC(data.data.userId))
                dispatch(SetEmailAC(email))
                dispatch(SetAuthIsAuthTestAC(true))
            } else {
                let message = data.messages.length ? data.messages[0] : ['Some Error']
                dispatch(stopSubmit("Login", {_error: message}))

            }

        })
    }
}
export const logoutThunkCreator = (): ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.Logout()
        dispatch(SetEmailAC(""))
        dispatch(SetUserIdAC(0))
        dispatch(SetAuthIsAuthTestAC(false))

    }
}
let initilaState: TypeInitialStateAuth = {
    email: "",
    login: "",
    isAuth: false,
    userId: null as number | null,

}

const authResucer = (state = initilaState, action: TypeActionAuth): TypeInitialStateAuth => {

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

        default:
            return {...state}
    }


}

export default authResucer;