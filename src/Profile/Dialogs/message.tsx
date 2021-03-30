import React, { useEffect} from "react";
import s from "./dialogs.module.css";
import {TypeChatMessage} from "../../Types/Types";
import {ClosePageMessages, getMessageTC} from "../../Redux/Reducers/dealogsReducer";
import {useDispatch} from "react-redux";

type PropsDialog={
    messages:Array<TypeChatMessage>
}


let Message = React.memo( (props:PropsDialog)=>{
    const  dispatch = useDispatch()




    useEffect(()=>{
        dispatch(getMessageTC())
            return ()=>{
                dispatch(ClosePageMessages([]))
            }
    }, [dispatch])
    let message = props.messages.map((m,i) => {
        return (
            <div key={i} className={s.message}>
                <img src={m.photo} alt={'ava'}/> <b>{m.userName}</b>
                <br/>
                {m.message}
            </div>
        )
    })
    return (
        <div>

            {message}

        </div>
    )
})
export default Message;