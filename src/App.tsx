import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Footer from "./Footer/footer";
import Menu from "./Menu/menu";
import DialogsConteiner from "./Profile/Dialogs/dialogsConteiner";
import News from "./Profile/News/news";
import Settings from "./Profile/Setings/settings";
import UserConteiner from "./Profile/Users/usersConteiner";
import MusicConteiner from "./Profile/Music/musicConteiner";
import ProfileContainer from "./Profile/profileConteiner";
import HeaderComponent from "./Header/headerComponent";
import ContainerLogin from "./Profile/Login/loginContainer";
import Logout from "./Profile/Login/logoutConteiner";

function  App () {

    return (
        <BrowserRouter>
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
                    <Route path='/dialogs' render={() => <DialogsConteiner name={'Anton'}/>}/>
                    <Route path='/friends' render={() => <UserConteiner/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <MusicConteiner/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <ContainerLogin/>}/>
                    <Route path='/logout' render={() => <Logout/>}/>
                </aside>
                <footer className='footer'><Footer/></footer>
            </div>
        </BrowserRouter>
    );
}
export default App;

