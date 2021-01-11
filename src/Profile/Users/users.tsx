import React from "react";
import s from './users.module.css'
import axios from 'axios';
export type TypePhoto = {
    small:null
    large:null

}
export type User = {
    name:string
    id:number
    uniqueUrlName:null
    photos:TypePhoto
    status:null
    followed:boolean
}
export type TypeResponseData = {
    items:Array<User>
    totalCount: number
    error: null
}
export type TypeUsersProps = {
   users:Array<User>
    follow:(value:number)=>void
    unFollow:(value:number)=>void
    setUsers:(value:Array<User>)=>void


}



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