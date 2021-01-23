import React from "react";
import s from './header.module.css';
import {AppBar, Button, IconButton, Toolbar} from "@material-ui/core";

export default function Header(){
    return(<div className={s.header} >
        <AppBar position="static" color={"transparent"}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <div>
                        <img alt={'logo'} src={"https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434839_1280.png"}/>

                    </div>
                </IconButton>

                    <Button variant={"text"} ><div className={s.login}>Login</div></Button>

            </Toolbar>
        </AppBar>



    </div>)
}