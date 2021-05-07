import {put, takeEvery} from 'redux-saga/effects'
import {TypeActionsApp, TypeInitialState} from "../../../Types/Types";
import {authSagaAC} from "./authSaga";

let initialState: TypeInitialState = {
    initialized: false
}

export const ActionsApp = {
    setInitializedAC: (initialized: boolean) => {
        return {
            type: 'app/SET_INITIALIZED',
            initialized
        } as const
    },
}
export const AppReducer = (state: TypeInitialState = initialState, action: TypeActionsApp): TypeInitialState => {
    switch (action.type) {
        case "app/SET_INITIALIZED":
            return {
                ...state,
                initialized: action.initialized
            }
        default:
            return state
    }

}


function* appSaga(action:TypeAppSagaAC){
    yield put(authSagaAC())
    yield put(ActionsApp.setInitializedAC(action.initialized))
}
export const initialAppSagaAC = (initialized:boolean)=>{
    return{
        type:'/app/INITIAL_APP_SAGA',
        initialized
    } as const
}

export type TypeAppSagaAC = ReturnType<typeof initialAppSagaAC>

export function* appWatcher() {

    yield takeEvery('/app/INITIAL_APP_SAGA',appSaga)
}

export default AppReducer;

