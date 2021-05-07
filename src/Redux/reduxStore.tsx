import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import dialogsReducer from "./Reducers/dealogsReducer";
import profileReducer from "./Reducers/profileReducer";
import usersReducer from "./Reducers/usersReducer";
import MusicReducer from "./Reducers/musicReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import FriendsReducer from "./Reducers/friendsReducer";
import createSagaMiddleware from 'redux-saga'
import AppReducer, {appWatcher} from "./Reducers/saga/appSaga";
import authReducer, {authWatcher} from "./Reducers/saga/authSaga";
import { all } from 'redux-saga/effects';
export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    musicPage:MusicReducer,
    authPage:authReducer,
    appPage:AppReducer,
    friendsPage:FriendsReducer,
    form:formReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createSaga = createSagaMiddleware();
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware,createSaga)));
createSaga.run(rootWatcher)
 function* rootWatcher(){
yield all([appWatcher(),authWatcher()])
 }

export default store;