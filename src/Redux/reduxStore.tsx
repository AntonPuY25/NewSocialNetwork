import {createStore, combineReducers,applyMiddleware} from 'redux';
import dialogsReducer from "./Reducers/dealogsReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import MusicReducer from "./Reducers/musicReducer";
import authResucer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
    authPage:authResucer,
    form:formReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store;