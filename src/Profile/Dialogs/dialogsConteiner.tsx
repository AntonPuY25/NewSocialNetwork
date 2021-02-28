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
    TypeStore
} from "../../Types/Types";
import {RedirectHoc} from "../../HOC/redirectHoc";
import {compose} from "redux";

let mapStateToProps = (state: TypeStore): TypeMapStateToProps => {
    return {
        valueMessage: state.dialogsPage.valueMessage,
        messageData: state.dialogsPage.messageData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<TypeAction>): TypeMapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(DialogAC())
        },
        onChangeMessageText: (text: string) => {
            dispatch(DialogTextAC(text))
        }
    }
}


export default compose<React.ComponentType>(
    connect<TypeMapStateToProps, TypeMapDispatchToProps,
        {}, TypeStore>(mapStateToProps, mapDispatchToProps),
    RedirectHoc
)(Dialogs);

