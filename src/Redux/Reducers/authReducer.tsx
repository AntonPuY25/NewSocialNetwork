import {
    TypeActionAuth,
    TypeActionSetAuthData,
    TypeInitialStateAuth, TypeResponseDataAuth,
    TypeResponseDataData, TypeStoreReducer,

} from "../../Types/Types";
import {getAuthApi} from "../../DALL/api";
import {ThunkAction} from "redux-thunk";
export const SET_USER_ID = "SET_USER_ID"
export const SET_AUTH_DATA = "SET_AUTH_DATA"
export const SET_AUTH_ISAUTH = "SET_AUTH_ISAUTH"
export const SetAuthDataAC = (data: TypeResponseDataData): TypeActionSetAuthData => {
    return {
        type: SET_AUTH_DATA,
        data
    }
}
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

export const authThunkCreator = (): ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.checkLogin().then((data: TypeResponseDataAuth) => {
            if((data.resultCode === 0)){
                console.log(data.data.id)
                dispatch(SetUserIdAC(data.data.id))
                dispatch(SetAuthIsAuthTestAC(true))
                dispatch(SetAuthDataAC(data.data))


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
                dispatch(SetUserIdAC(2))
            }

        })
    }
    }
export const logoutThunkCreator = ():ThunkAction<void, any,
    TypeStoreReducer, TypeActionAuth> => {
    return (dispatch) => {
        getAuthApi.Logout()

    }
}
let initilaState: TypeInitialStateAuth = {
    data: {} as TypeResponseDataData,
    isAuth: false,
    userId:13747,

}

const authResucer = (state = initilaState, action: TypeActionAuth): TypeInitialStateAuth => {

    switch (action.type) {

        case SET_AUTH_DATA:
            return {
                ...state,
                data: action.data

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

        default:
            return {...state}
    }


}

export default authResucer;