import {
    TypeActionAuth,
    TypeActionSetAuthData,
    TypeInitialStateAuth, TypeResponseDataAuth,
    TypeResponseDataData,

} from "../../Types/Types";
import {getAuthApi} from "../../DALL/api";

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

export const authThunkCreator = (): any => {
    return (dispatch: any) => {
        getAuthApi.checkLogin().then((data: TypeResponseDataAuth) => {
            return (data.resultCode === 0) ?
                dispatch(SetAuthIsAuthTestAC(true)) &
                dispatch(SetAuthDataAC(data.data)) :
                dispatch(SetAuthIsAuthTestAC(false))
        })
    }
}
let initilaState: TypeInitialStateAuth = {
    data: {} as TypeResponseDataData,
    isAuth: false
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
        default:
            return {...state}
    }


}

export default authResucer;