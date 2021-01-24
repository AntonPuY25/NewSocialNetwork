import React from "react";
import s from './header.module.css';
import {AppBar, Button, IconButton, Toolbar} from "@material-ui/core";
import {TypePropsHeader} from "../Types/Types";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Header:React.FC<TypePropsHeader>=({isAuth,email})=>{
    return(<div className={s.header} >
        <AppBar position="static" color={"transparent"}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">

                    <LinkedInIcon style={{ color: 'white' }}  fontSize={"large"}/>

                </IconButton>
                {isAuth ? <div className={s.email}>{email}</div>: <Button variant={"text"} >
                    <div className={s.login}>Login</div></Button>}

            </Toolbar>
        </AppBar>




    </div>)
}
export default Header