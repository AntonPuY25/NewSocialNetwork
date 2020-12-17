import React from 'react';
import './App.css';
import Footer from "./Footer/footer";
import Profile from "./Profile/profile";
import Menu from "./Menu/menu";
import Header from "./Header/header";

function App() {
    return (
        <div className="App">
        <header className='header'>
           <Header/>
        </header>
            <nav className='nav'>
                <Menu/>

            </nav>

            <aside className='aside'>
                <Profile/>
            </aside>

            <footer className='footer'><Footer/></footer>
        </div>
    );
}

export default App;

