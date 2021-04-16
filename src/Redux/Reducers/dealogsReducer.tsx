import {TypeAction, TypeChatMessage, TypeInitialStateDialogs} from "../../Types/Types";
import {Dispatch} from "react";
import {WebSocketApi} from "../../DALL/api";

export const ADD_MESSAGE = "dialogs/ADD_MESSAGE";


let initialState = {
    dataMessage: [],
}
export let dialogsReducer = (state: TypeInitialStateDialogs = initialState, action: TypeAction): TypeInitialStateDialogs => {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessages = [...state.dataMessage,...action.messages]
            return {
                ...state,
             dataMessage:newMessages,
            }
        case "CLOSE_PAGE_MESSAGES":{
            return {
                ...state,
                dataMessage:action.messages
            }
        }

        default:
            return state
    }


}

export const DialogAC = (messages:TypeChatMessage[]) => {
    return {
        type: ADD_MESSAGE,
        messages
    } as const
}
export const ClosePageMessages = (messages:[]) => {
    return {
        type: 'CLOSE_PAGE_MESSAGES',
        messages
    } as const
}


let ws:WebSocket;
export const getMessageTC = ()=> async (dispatch:Dispatch<TypeAction>)=>{
    ws =  await WebSocketApi.getMessages()
    ws.addEventListener('message',(e:MessageEvent)=>{
        dispatch(DialogAC(JSON.parse(e.data)))

    })


}
export const setMessageTC = (textMessage:string)=> async (dispatch:Dispatch<TypeAction>)=>{
            if(!textMessage){
                return
            }
           ws.send(textMessage)



}

export default dialogsReducer;
