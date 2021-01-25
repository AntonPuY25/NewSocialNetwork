import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import {TypeUserFunProps, TypeUserResponseData} from "../../Types/Types";
import {Button} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {getUsersApi} from "../../DALL/api";

let UserFun: React.FC<TypeUserFunProps> = ({
                                               functionTest, arr, clickPage, pageNumber, users,
                                               follow, unFollow,isDisabled,disabledButton
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

                    {i.followed === true ? <Button disabled={isDisabled.some(id=>id===i.id)} variant={"contained"} onClick={() => {

                            disabledButton([i.id])

                            getUsersApi.followUsersApi(i.id).then((data: TypeUserResponseData) => {
                                if (data.resultCode === 0) {

                                    follow(i.id)
                                    disabledButton([])
                                }

                            })

                        }}>Follow</Button>
                        : <Button disabled={isDisabled.some(id=>id===i.id)} variant={"contained"} onClick={() => {
                            disabledButton([i.id])
                            getUsersApi.UnfollowUsersApi(i.id).then((data: TypeUserResponseData) => {
                                if (data.resultCode === 0) {

                                    unFollow(i.id)
                                    disabledButton([])
                                }

                            })

                        }}>UnFollow</Button>}

                </div>

            )
        })}

    </div>;
}

export default UserFun;