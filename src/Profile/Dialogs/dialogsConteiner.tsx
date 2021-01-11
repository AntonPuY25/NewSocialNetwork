import {DialogAC, DialogTextAC} from "../../Redux/Reducers/dealogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {TypeStoreReducer} from "../../Redux/reduxStore";

let mapStateToProps = (state:TypeStoreReducer)=>{
    return{
        valueMessage:state.dialogsPage.valueMessage,
        messageData:state.dialogsPage.messageData
    }
}
let mapDispatchToProps = (dispatch:any)=>{
    return{
        addMessage:()=>{
            dispatch(DialogAC())
        },
        onChangeMessageText:(text:string)=>{
            dispatch(DialogTextAC(text))
        }
    }
}
let DialogsConteiner = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsConteiner;