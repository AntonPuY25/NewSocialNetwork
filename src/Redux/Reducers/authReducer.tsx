import {
    TypeActionAuth,
    TypeInitialStateAuth, TypeResponseDataAuth,
     TypeStoreReducer,

} from "../../Types/Types";
import {getAuthApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";
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
export const SetEmailAC = (email:string)=>{
    return{
        type:SET_AUTH_EMAIL,
        email
    } as const
}
export const SetLoginAC = (login:string)=>{
    return{
        type:SET_AUTH_LOGIN,
        login
    } as const
}

export const authThunkCreator = (): ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.checkLogin().then((data: TypeResponseDataAuth) => {
            if((data.resultCode === 0)){

                dispatch(SetUserIdAC(data.data.id))
                dispatch(SetEmailAC(data.data.email))
                dispatch(SetLoginAC(data.data.login))
                dispatch(SetAuthIsAuthTestAC(true))


            }else{
                dispatch(SetAuthIsAuthTestAC(false))
            }

        })
    }
}
export const loginThunkCreator = (email:string,password:string,rememberMe:boolean,captcha:boolean):ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.login(email,password,rememberMe,captcha).then(data=>{
            if(data.resultCode===0){
                dispatch(SetUserIdAC(data.data.userId))
                dispatch(SetEmailAC(email))
                dispatch(SetAuthIsAuthTestAC(true))

            }

        })
    }
    }
export const logoutThunkCreator = ():ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.Logout()
        dispatch(SetEmailAC(""))
        dispatch(SetUserIdAC(0))
        dispatch(SetAuthIsAuthTestAC(false))

    }
}
let initilaState: TypeInitialStateAuth = {
    email:"",
    login:"",
    isAuth: false,
    userId:13747,

}

const authResucer = (state = initilaState, action: TypeActionAuth): TypeInitialStateAuth => {

    switch (action.type) {

        case SET_AUTH_EMAIL:
            return {
                ...state,
                email:action.email

            }
        case SET_AUTH_ISAUTH:
            return {
                ...state,
                isAuth: action.isAuth

            }
        case SET_USER_ID:
            return {
                ...state,
                userId:action.userId
            }
        case SET_AUTH_LOGIN:

            return {
                ...state,
                login:action.login
            }

        default:
            return {...state}
    }


}

export default authResucer;