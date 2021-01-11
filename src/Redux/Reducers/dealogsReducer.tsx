const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";
export type TypeDialog = {
    id: number
    name: string
    address: number
}
export type TypeMessage = {
    id: number
    message: string
}
export type TypeMessageData = {
    dataDialog: Array<TypeDialog>
    dataMessage: Array<TypeMessage>
}
export  type TypeAction = {
    type?: string
    text?: string
}
export type TypeInitialStateDialogs = {
    messageData: TypeMessageData
    valueMessage: string
}

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
let dialogsReducer = (state: TypeInitialStateDialogs = initialState, action: TypeAction):TypeInitialStateDialogs => {
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
        default:
            return state
    }


}
export const DialogTextAC: (value: string) => TypeAction = (text) => ({type: ADD_TEXT_MESSAGE, text: text})
export const DialogAC: () => TypeAction = () => ({type: ADD_MESSAGE})
export default dialogsReducer;
