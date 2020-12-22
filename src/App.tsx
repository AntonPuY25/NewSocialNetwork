import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Footer from "./Footer/footer";
import Profile from "./Profile/profile";
import Menu from "./Menu/menu";
import Header from "./Header/header";
import Dialogs from "./Profile/Dialogs/dialogs";
import News from "./Profile/News/news";
import Music from "./Profile/Music/music";
import Settings from "./Profile/Setings/settings";
import {StorePropsType} from "./index";


type PropsType = {
    dataStore:StorePropsType
}

function App(props:PropsType) {
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

                <Route path='/profile' render={() => <Profile dataPost={props.dataStore.dataPost} />} />
                <Route path='/dialogs' render={() => <Dialogs dataStore={props.dataStore}/>} />
                <Route path='/news' render={() => <News/>} />
                <Route path='/music' render={() => <Music/>} />
                <Route path='/settings' render={() => <Settings/>} />

            </aside>

            <footer className='footer'><Footer/></footer>
        </div>
        </BrowserRouter>
    );
}

export default App;

