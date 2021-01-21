import React from "react";
import s from './users.module.css'
import axios from 'axios';
import {TypeResponseData, TypeUsersProps} from "../../Types/Types";



const Users = (props:TypeUsersProps)=>{
if(props.users.length === 0){
    axios.get<TypeResponseData>('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
props.setUsers(response.data.items)
    })

}
    return <div>

        {props.users.map(i=>{

            return(<div key={i.id}>
                    <div><img className={s.avaUser} alt={'Ava'} src={i.photos.small?i.photos.small:require(`../../Img/ava1.png`)}/></div>
                    <div>{i.name}</div>
                    <div>{i.status}</div>
                {i.followed===true?<button onClick={()=>{props.follow(i.id)}}>Follow</button>
                    :<button onClick={()=>{props.unFollow(i.id)}}>UnFollow</button>}

                </div>

            )
        })}

    </div>
}



export default Users;