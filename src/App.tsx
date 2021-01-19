import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Footer from "./Footer/footer";
import Menu from "./Menu/menu";
import Header from "./Header/header";
import DialogsConteiner from "./Profile/Dialogs/dialogsConteiner";
import News from "./Profile/News/news";
import Settings from "./Profile/Setings/settings";
import UserConteiner from "./Profile/Users/usersConteiner";
import MusicConteiner from "./Profile/Music/musicConteiner";
import ProfileConteiner from "./Profile/profileConteiner";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <header className='header'>
                    <Header/>
                </header>
                <nav className='nav'>
                    <Menu/>


                </nav>

                <aside className='aside'>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileConteiner/>}/>
                    <Route path='/dialogs' render={() => <DialogsConteiner/>}/>
                    <Route path='/friends' render={() => <UserConteiner/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <MusicConteiner/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </aside>
                <footer className='footer'><Footer/></footer>
            </div>
        </BrowserRouter>
    );
}

export default App;

