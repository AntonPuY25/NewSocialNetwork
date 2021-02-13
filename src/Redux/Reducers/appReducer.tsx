import {TypeActionsApp, TypeInitialState, TypeStore} from "../../Types/Types";
import {ThunkAction} from "redux-thunk";
import {authThunkCreator} from "./authReducer";

let initialState: TypeInitialState = {
    initialized: false
}

export const ActionsApp = {
    setInitializedAC: (initialized: boolean) => {
        return {
            type: 'app/SET_INITIALIZED',
            initialized
        } as const
    }
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

export const initialThunkCreator =  (initialized: boolean): ThunkAction<void, any,
    TypeStore, TypeActionsApp> => {
    return  async (dispatch) => {
             await  dispatch( authThunkCreator())
              dispatch(ActionsApp.setInitializedAC(initialized))



    }
}

export default AppReducer;

