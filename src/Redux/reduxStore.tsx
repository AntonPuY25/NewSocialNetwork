import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import dialogsReducer from "./Reducers/dealogsReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import MusicReducer from "./Reducers/musicReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./Reducers/appReducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
    authPage:authReducer,
    appPage:AppReducer,
    form:formReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;