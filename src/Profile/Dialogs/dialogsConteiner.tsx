import {
    DialogAC,
    DialogTextAC,
} from "../../Redux/Reducers/dealogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {
    TypeAction,
    TypeMapDispatchToProps,
    TypeMapStateToProps,
    TypeStoreReducer
} from "../../Types/Types";

let mapStateToProps = (state:TypeStoreReducer):TypeMapStateToProps=>{
    return{
        valueMessage:state.dialogsPage.valueMessage,
        messageData:state.dialogsPage.messageData,
        isAuth:state.authPage.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch<TypeAction>):TypeMapDispatchToProps=>{
    return{
        addMessage:()=>{
            dispatch(DialogAC())
        },
        onChangeMessageText:(text:string)=>{
            dispatch(DialogTextAC(text))
        }
    }
}
let DialogsConteiner = connect<TypeMapStateToProps,TypeMapDispatchToProps,
    {},TypeStoreReducer>(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsConteiner;