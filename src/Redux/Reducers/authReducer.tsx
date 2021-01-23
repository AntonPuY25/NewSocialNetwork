import {
    TypeActionAuth,
    TypeActionSetAuthData,
    TypeInitialStateAuth,
     TypeResponseDataData,

} from "../../Types/Types";
export const SET_AUTH_DATA = "SET_AUTH_DATA"
export const SET_AUTH_ISAUTH = "SET_AUTH_ISAUTH"
export const SetAuthDataAC = (data:TypeResponseDataData):TypeActionSetAuthData=>{
    return{
        type:SET_AUTH_DATA,
        data
    }
}
export const SetAuthIsAuthTestAC = (isAuth:boolean)=>{
    return{
        type:SET_AUTH_ISAUTH,
        isAuth
    } as const
}

let initilaState:TypeInitialStateAuth = {
    data: {} as TypeResponseDataData,
    isAuth:false
}

const authResucer = (state = initilaState,action:TypeActionAuth):TypeInitialStateAuth=>{

    switch (action.type){

        case SET_AUTH_DATA:
            return {
                ...state,
                data:action.data

            }
        case SET_AUTH_ISAUTH:
            return {
                ...state,
                isAuth:action.isAuth

            }
        default:
            return {...state}
    }


}

export default authResucer;