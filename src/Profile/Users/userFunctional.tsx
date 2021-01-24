import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import {TypeUserFunProps} from "../../Types/Types";
import {Button} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import axios from "axios";

let UserFun: React.FC<TypeUserFunProps> = ({
                                               functionTest, arr, clickPage, pageNumber, users,
                                               follow, unFollow
                                           }) => {

    return <div>
        <Button variant={"contained"} onClick={() => {
            functionTest(10, false)
        }}><ArrowBackIosIcon fontSize={"default"}/></Button>
        {arr.map((i, id) => {

            return <span onClick={() => {
                clickPage(i)
            }} key={id} className={pageNumber === i ? s.pageNumber : "" + s.test}>{i}</span>

        })}
        <Button variant={"contained"} onClick={() => {
            functionTest(10, true)
        }}><KeyboardArrowRightIcon fontSize={"large"}/></Button>


        {users.map(i => {
            return (<div className={s.people} key={i.id}>
                    <div><NavLink
                        to={`/profile/${i.id}`}> <img className={s.avaUser} alt={'Ava'}
                                                      src={i.photos.small ? i.photos.small : require(`../../Img/ava1.png`)}/></NavLink>
                    </div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>

                    {i.followed === true ? <Button variant={"contained"} onClick={() => {
                            axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9943ad9b-2b43-46f7-bddd-09fd21e745ce'
                                    }
                                })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        follow(i.id)
                                    }
                                })

                        }}>Follow</Button>
                        : <Button variant={"contained"} onClick={() => {
                            axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9943ad9b-2b43-46f7-bddd-09fd21e745ce'
                                    }
                                })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        unFollow(i.id)
                                    }
                                })
                        }}>UnFollow</Button>}

                </div>

            )
        })}

    </div>;
}

export default UserFun;