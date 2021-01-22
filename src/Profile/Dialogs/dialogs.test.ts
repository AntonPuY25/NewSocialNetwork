import { TypeInitialStateDialogs} from "../../Types/Types";
import dialogsReducer, {DeleteMessageAC, DialogAC, DialogTextAC} from "../../Redux/Reducers/dealogsReducer";
let initialState:TypeInitialStateDialogs;
beforeEach(()=>{
     initialState = {
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

})
test("Add_Text_Post",()=>{
let action = DialogTextAC('TEST')
    let newState =dialogsReducer(initialState,action);

    expect(newState.valueMessage).toBe('TEST')
    expect(newState.messageData.dataMessage.length).toBe(3)
})
test("Add_Post",()=>{
    let action = DialogAC()
    let newState =dialogsReducer(initialState,action);
    expect(newState.messageData.dataMessage.length).toBe(4)
    expect(newState.messageData.dataMessage[3].message).toBe("")

})
test("Delete_Post",()=>{
    let action = DeleteMessageAC(1)
    let newState =dialogsReducer(initialState,action);
    expect(newState.messageData.dataMessage.length).toBe(2)
    expect(newState.messageData.dataMessage[0].message).toBe("What do you do?")

})