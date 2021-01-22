import {TypeAction, TypeInitialStateDialogs} from "../../Types/Types";

export const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";


let initialState = {
    messageData: {
        dataDialog: [
            {
                id: 1,
                name: 'Anton',
                address: 1
            },
            {
                id: 2,
                name: 'Yana',
                address: 2
            },
            {
                id: 3,
                name: 'Kirill',
                address: 3
            },
            {
                id: 4,
                name: 'Ira',
                address: 4
            },
            {
                id: 5,
                name: 'Lera',
                address: 5
            }
        ],
        dataMessage: [
            {
                id: 1,
                message: 'Hello,where are you from?'
            },
            {
                id: 2,
                message: 'What do you do?'
            },
            {
                id: 3,
                message: 'Do you have friends?'
            }
        ],
    },
    valueMessage: "",
}
export let dialogsReducer = (state: TypeInitialStateDialogs = initialState, action: TypeAction):TypeInitialStateDialogs => {
    switch (action.type) {
        case ADD_TEXT_MESSAGE:
            return {
                ...state,
                valueMessage:action.text || ""
            }
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.valueMessage
            }
            return {
                ...state,
                messageData:{
                    ...state.messageData,
                    dataMessage:[...state.messageData.dataMessage,newMessage]

                },
                valueMessage:""
            }
        case "DELETE_MESSAGE":
            return {
                ...state,
                messageData:{
                    ...state.messageData,
                    dataMessage:[...state.messageData.dataMessage.filter(mes=>{
                        return mes.id!==action.id
                    })]
                }

            }
        default:
            return state
    }


}
export const DialogTextAC = (text:string)=>{
    return {
        type:ADD_TEXT_MESSAGE,
        text
    } as const
}
export const DialogAC= ()=>{
    return{
        type:ADD_MESSAGE
    } as const
}
export const DeleteMessageAC = (id:number)=> {
    return {
        type: DELETE_MESSAGE,
        id
    } as const
}

export default dialogsReducer;
