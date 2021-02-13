import React, { useEffect} from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Footer from "./Footer/footer";
import Menu from "./Menu/menu";
import DialogsContainer from "./Profile/Dialogs/dialogsConteiner";
import News from "./Profile/News/news";
import Settings from "./Profile/Setings/settings";
import UserContainer from "./Profile/Users/usersConteiner";
import MusicContainer from "./Profile/Music/musicConteiner";
import ProfileContainer from "./Profile/profileContainer";
import HeaderComponent from "./Header/headerComponent";
import ContainerLogin from "./Profile/Login/loginContainer";
import Logout from "./Profile/Login/logoutConteiner";
import {useDispatch, useSelector} from "react-redux";
import { TypeMapStateToPropsApp, TypeStore} from "./Types/Types";
import Preloader from "./Profile/Preloader/Preloader";
import {initialThunkCreator} from "./Redux/Reducers/appReducer";


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
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer name={'Anton'}/>}/>
                    <Route path='/friends' render={() => <UserContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <MusicContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <ContainerLogin/>}/>
                    <Route path='/logout' render={() => <Logout/>}/>
                </aside>
                <footer className='footer'><Footer/></footer>
            </div>
        )

}

export default App;

