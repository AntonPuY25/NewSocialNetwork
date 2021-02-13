import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TypeInitialStateProfile, TypeStore} from "../../../Types/Types";
import {ActionsProfile, setStatusThunkCreator} from "../../../Redux/Reducers/profileReducer";


const StatusFunc:React.FC = ()=>{
    const statePage = useSelector<TypeStore, TypeInitialStateProfile>(state => state.profilePage)
    const dispatch = useDispatch()

    const [toggle,setToggle]= useState<boolean>(true)

    const changeISToggleFalse = ()=>{
    setToggle(false)
    }
    const changeISToggleTrue = ()=>{
        setToggle(true)
        dispatch(setStatusThunkCreator(statePage.status))

    }
    const changeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(ActionsProfile.setTextStatusAC(e.currentTarget.value))
    }

        return <div>
            {toggle?
                <div onDoubleClick={changeISToggleFalse}> {statePage.status}</div>
                :
                <div onBlur={changeISToggleTrue}><input onChange={changeStatus} autoFocus value={statePage.status}/></div>
            }
        </div>
    }


export default StatusFunc;