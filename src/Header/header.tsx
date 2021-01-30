import React from "react";
import s from './header.module.css';
import {AppBar, Button, IconButton, Toolbar} from "@material-ui/core";
import {TypePropsHeader} from "../Types/Types";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from "react-router-dom";
const Header:React.FC<TypePropsHeader>=({isAuth,email})=>{
    return(<div className={s.header} >
        <AppBar position="static" color={"transparent"}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">

                    <LinkedInIcon style={{ color: 'white' }}  fontSize={"large"}/>

                </IconButton>
                {isAuth ? <div className={s.email}>{email}
                    <Button variant={"text"} >
                        <NavLink to={'/logout'} className={s.login}>Logout</NavLink></Button></div>
                    : <Button variant={"text"} >
                    <NavLink to={'/login'} className={s.login}>Login</NavLink></Button>}

            </Toolbar>
        </AppBar>




    </div>)
}
export default Header