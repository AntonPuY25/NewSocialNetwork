import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route,Switch} from "react-router-dom";
import './App.css';
import Footer from "./Footer/footer";
import Menu from "./Menu/menu";
import DialogsContainer from "./Profile/Dialogs/dialogsConteiner";
import Settings from "./Profile/Setings/settings";
import UserContainer from "./Profile/Users/usersConteiner";
import MusicContainer from "./Profile/Music/musicConteiner";
import ProfileContainer from "./Profile/profileContainer";
import HeaderComponent from "./Header/headerComponent";
import ContainerLogin from "./Profile/Login/loginContainer";
import Logout from "./Profile/Login/logoutConteiner";
import {Provider, useDispatch, useSelector} from "react-redux";
import {TypeMapStateToPropsApp, TypeStore} from "./Types/Types";
import Preloader from "./Profile/Preloader/Preloader";
import {initialThunkCreator} from "./Redux/Reducers/appReducer";
import store from "./Redux/reduxStore";
import Friends from "./Profile/Friends/friends";

const LazyNews = React.lazy(() => import("./Profile/News/news"));
const App: React.FC = () => {
    const state = useSelector<TypeStore, TypeMapStateToPropsApp>(state => state.appPage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialThunkCreator(true))
    }, [dispatch])


    if (!state.initialized) {
        return <Preloader/>
    }
    return (

        <div className="App">
            <header className='header'>
                <HeaderComponent/>
            </header>
            <nav className='nav'>
                <Menu/>
            </nav>
            <aside className='aside'>
                <Switch>
                    <Route exact path='/NewSocialNetwork' render={() => <Redirect to={'/login'}/>}/>
                    <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/people' render={() => <UserContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/news' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <LazyNews/>
                        </React.Suspense>
                    }}/>
                    <Route path='/music' render={() => <MusicContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <ContainerLogin/>}/>
                    <Route path='/logout' render={() => <Logout/>}/>
                </Switch>

            </aside>
            <footer className='footer'><Footer/></footer>
        </div>

    )

}
const FinishApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )


}
export default FinishApp;

