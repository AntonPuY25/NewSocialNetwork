import React, {ChangeEvent, useState} from "react";

type TypeStatusProps = {
    status: string
    setTextStatusAC:(statusText:string)=>void
    setStatusThunkCreator:(statusText:string)=>void
}

const StatusFunc:React.FC<TypeStatusProps> = (props)=>{

const [toggle,setToggle]= useState<boolean>(true)

    const changeISToggleFalse = ()=>{
    setToggle(false)
    }
    const changeISToggleTrue = ()=>{
        setToggle(true)
        props.setStatusThunkCreator(props.status)

    }
    const changeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        props.setTextStatusAC(e.currentTarget.value)
    }

        return <div>
            {toggle?
                <div onDoubleClick={changeISToggleFalse}> {props.status}</div>
                :
                <div onBlur={changeISToggleTrue}><input onChange={changeStatus} autoFocus value={props.status}/></div>
            }
        </div>
    }


export default StatusFunc;