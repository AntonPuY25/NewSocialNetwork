import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import { TypeUserFunProps} from "../../Types/Types";
import {Button} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {useDispatch, useSelector} from "react-redux";
import {followThunkCreator, unFollowThunkCreator} from "../../Redux/Reducers/usersReducer";
import {getAllSelectors} from "../../Redux/Reducers/Selectors/userSelectors";

let UserFun: React.FC<TypeUserFunProps> = ({
                                               functionTest, arr, clickPage,

                                           }) => {
    const {pageNumber,users,disabledButton} = useSelector(getAllSelectors)
    const dispatch = useDispatch()

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

                    {i.followed ? <Button disabled={disabledButton.some(id=>id===i.id)} variant={"contained"} onClick={() => {

                            dispatch(followThunkCreator(i.id))

                        }}>UnFollow</Button>
                        : <Button disabled={disabledButton.some(id=>id===i.id)} variant={"contained"} onClick={() => {
                            dispatch(unFollowThunkCreator(i.id))

                        }}>Follow</Button>}

                </div>

            )
        })}

    </div>;
}

export default UserFun;